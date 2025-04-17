import { Router } from 'express';
import fuzzyAHP from '../functions/fuzzy_ahp/index.js';
import { getFirestore, collection, getDocs, query, where, doc } from 'firebase/firestore';
import { body, validationResult } from 'express-validator';
var router = Router();

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
  let list_distance_school = [];
  let distance = {
    zonation: '',
    address: address,
    sub_address: sub_address
  }

  // zonation
  let docs = await getDocs(collection(db, "zonation"))

  docs.forEach((doc) => {
    const address_distance = doc.data().address.filter((item) => item === address)

    if(address_distance.length > 0) {
      distance.zonation = doc.data().id
    }
  })

  docs = await getDocs(collection(db, "distance"))

  docs.forEach((doc) => {
    const filter = {
      "priority" : {
        'priority_1' : doc.data().priority_1.address_id === distance.zonation,
        'priority_2' : doc.data().priority_2.address_id === distance.address,
        'priority_3' : doc.data().priority_3.address_id === distance.sub_address,
      }
    }

    let result = ''
    if(filter.priority.priority_1) {
      result = {
        "name": 'priority_1',
        "value": 1
      }
    } 
    
    if(filter.priority.priority_2) {
      result = {
        "name": 'priority_2',
        "value": 2
      }
    } 
    
    if(filter.priority.priority_3) {
      result = {
        "name": 'priority_3',
        "value": 3
      }
    }

    const list_distance = doc.data()

    list_distance_school.push({
      id: list_distance.id,
      school_id: list_distance.school_id,
      result: result,
    })
  })


  list_distance_school = list_distance_school.filter((item) => {
    return item.result !== ''
  })

  res.send(list_distance_school);
})

export default router;
