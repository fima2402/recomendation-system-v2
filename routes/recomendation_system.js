import { Router } from 'express';
import fuzzyAHP from '../functions/fuzzy_ahp/index.js';
import mabac from '../functions/mabac/index.js';
import { getFirestore, collection, getDocs, query, where, doc } from 'firebase/firestore';
import { body, validationResult } from 'express-validator';
var router = Router();

function sortDataByFinalValue(data, ascending = true) {
  return data.sort((a, b) => {
    if (ascending) {
      return a.final_value - b.final_value; // Urutkan dari kecil ke besar
    } else {
      return b.final_value - a.final_value; // Urutkan dari besar ke kecil
    }
  });
}

const schema = [
  body('address')
      .notEmpty().withMessage("address is required!"),
  body('sub_address')
      .notEmpty().withMessage("sub_address is required!")
]

router.get('/', function(req, res, next) {
  const f = fuzzyAHP();
  res.send({fuzzyAHP: f});
});

router.post('/', schema, async function(req, res, next) {
  const validation = validationResult(req);
  const { body } = req
  
  // validation
  if(validation.errors.length  > 0) {
    return res.status(400).send(validation)
  }

  const { address, sub_address, type } = body;

  const db = getFirestore();
  let list_zonation = [];
  let list_distance = [];
  let list_school = [];
  let list_address = [];
  let list_subaddress = [];
  let result = [];
  let distance_user = {
    zonation: '',
    address: address,
    sub_address: sub_address
  }

  // zonation
  let docs = await getDocs(collection(db, "zonation"))

  docs.forEach((doc) => {
    const filter = doc.data().address.filter((item) => item === address)

    list_zonation.push(doc.data())
    if(filter.length > 0) {
      distance_user.zonation = doc.data().id
    }
  })

  // school
  docs = await getDocs(
                      query(
                        collection(db, "schools"), 
                        type ? where('type', '==', type) : '',
                      )
                    )
  docs.forEach((doc) => {
    list_school.push(doc.data())
  })

  // address
  docs = await getDocs(collection(db, "address"))
  docs.forEach((doc) => {
    list_address.push(doc.data())
  })

  // sub address
  docs = await getDocs(collection(db, "sub-address"))
  docs.forEach((doc) => {
    list_subaddress.push(doc.data())
  })

  // distance
  docs = await getDocs(collection(db, "distance"))

  docs.forEach((doc) => {
      const filter = {
        "priority" : {
          'priority_1' : doc.data().priority_1.address_id === distance_user.zonation || doc.data().priority_1.address_id === 'zonation-all',
          'priority_2' : doc.data().priority_2.address_id === distance_user.address,
          'priority_3' : doc.data().priority_3.address_id === distance_user.sub_address,
        }
      }
  
      let detail = {
        "id": 'priority_0',
        "value": 0,
      }
  
      if(filter.priority.priority_1) {
        detail = {
          "id": 'priority_1',
          "value": 1
        }
      } 
      
      if(filter.priority.priority_2) {
        detail = {
          "id": 'priority_2',
          "value": 2
        }
      } 
      
      if(filter.priority.priority_3) {
        detail = {
          "id": 'priority_3',
          "value": 3
        }
      }
  
      const doc_distance = doc.data()
  
      list_distance.push({
        id: doc_distance.id,
        school_id: doc_distance.school_id,
        name: doc_distance,
        detail: doc_distance,
        result: { 
          ...detail,         
          'zonation': list_zonation.find(v => v.id === distance_user.zonation)?.name ?? '',
          'address': list_address.find(v => v.id === distance_user.address)?.name ?? '',
          'sub_address': list_subaddress.find(v => v.id === distance_user.sub_address)?.name ?? '', 
        },
      })
  })

  // main function
  result = list_school.map((school) => {
    let distance_value = 1
    let accreditation_value = 1
    let facility_value = 1

    const distance_detail = list_distance.find((v) => v.school_id === school.id)
    
    distance_value = distance_detail.result
    school.accreditation === 'A' ? accreditation_value = 3 : school.accreditation === 'B' ? accreditation_value = 2 : accreditation_value = 1
    school.facility === 'memadai' ? facility_value = 3 : school.facility === 'setara' ? facility_value = 2 : facility_value = 1
    
    const zonation = list_zonation.find(v => v.id === list_distance.find(v => v.school_id === school.id).name.priority_1.address_id)?.name ?? 'A, B, C, D, E'

    return {
      id: school.id,
      name: school.name,
      type: school.type,
      category: school.category,
      address: list_address.find(v => v.id === distance_detail.detail.priority_2.address_id).name ?? '',
      sub_address: list_subaddress.find(v => v.id === distance_detail.detail.priority_3.address_id)?.name ?? '',
      zonation: zonation,
      link_profile: school.link_profile,
      distance: distance_value,
      facility: {
          name: school.facility,
          value: facility_value
      },
      accreditation: {
          name: school.accreditation,
          value: accreditation_value
      }
    }
  })

  result = result.filter((v) => v.zonation === list_zonation.find((v) => v.id === distance_user.zonation).name)

  // fuzzy ahp
  const f = fuzzyAHP();
  const w = f.value.w;

  // Mabac
  const m = mabac(w, result);

  let final_result = result.map((school) => ({
    ...school,
    final_value: m.find((v) => v.id === school.id)?.value ?? null
  }))

  
  const near_sub_address = final_result.filter((v) => v.distance.value === 3)
  const far_sub_address_address = final_result.filter((v) =>  v.distance.value === 2)
  const far_sub_address_zonation = final_result.filter((v) =>  v.distance.value === 1)

  let filtered = [...sortDataByFinalValue(near_sub_address, false), ...sortDataByFinalValue(far_sub_address_address,false), ...sortDataByFinalValue(far_sub_address_zonation, false)]
  filtered = Array.from(
    new Map(filtered.map((v) => [v.id, v])).values()
  );

  const negeri = final_result.filter((v) => v.category === 'negeri')
  const swasta = final_result.filter((v) => v.category === 'swasta')
  const negeri_filtered = filtered.filter((v) => v.category === 'negeri')
  const swasta_filtered = filtered.filter((v) => v.category === 'swasta')


  final_result = {
    "default" : {
      "negeri" : {
        "data": sortDataByFinalValue(negeri, false).slice(0,10),
        "total": negeri.length
      },
      "swasta" : {
        "data": sortDataByFinalValue(swasta, false).slice(0,10),
        "total": swasta.length
      },            
    }, 
    "filtered" : {
      "negeri" : {
        "data": negeri_filtered.slice(0,10),
        "total": negeri_filtered.length
      },
      "swasta" : {
        "data": swasta_filtered.slice(0,10),
        "total": swasta_filtered.length
      },
    }
    
  }

  res.send({fuzzyAhp: f, result: final_result});
})

export default router;
