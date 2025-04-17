function normalizeMatrixBenefitRounded(matrix) {
    const criteria = ["akreditasi", "fasilitas", "jarak"];
    
    // Hitung min dan max
    const minMax = {};
    for (const c of criteria) {
      const values = matrix.map(row => row[c]);
      minMax[c] = {
        min: Math.min(...values),
        max: Math.max(...values)
      };
    }
  
    // Normalisasi dan pembulatan ke 0 atau 1
    const normalized = matrix.map(row => {
      const normRow = { id: row.id, 'value' : [] };
      for (const c of criteria) {
        const min = minMax[c].min;
        const max = minMax[c].max;
        let raw = (max - min === 0) ? 1 : (row[c] - min) / (max - min);
  
        // Pembulatan ke 0 atau 1
        if (raw < 0.5) raw = 0;
        else raw = 1;
  
        normRow['value'].push(raw);
      }
      return normRow;
    });
  
    return normalized;
}  
 
function matrixTertimbang(w, norm) {
    const result = [];

    norm.forEach((v) => {
        result.push({
            "id": v.id,
            "value": [ 
                (w.akreditasi * v.value[0]) + w.akreditasi, 
                (w.fasilitas * v.value[1]) + w.fasilitas,
                (w.jarak * v.value[2]) + w.jarak,
            ]
        })
    })

    return result
}

function nearArea(mt) {
  let list_g1 = []
  let list_g2 = []
  let list_g3 = []
  let g1 = 1
  let g2 = 1
  let g3 = 1

  mt.forEach((v) => {
    list_g1.push(v.value[0])
    list_g2.push(v.value[1])
    list_g3.push(v.value[2])
  })

  list_g1.flatMap((v) => g1 = v * g1)
  list_g2.flatMap((v) => g2 = v * g2)
  list_g3.flatMap((v) => g3 = v * g3)


  g1 = Number(Math.pow(g1, 1/list_g1.length).toFixed(1))
  g2 = Number(Math.pow(g2, 1/list_g2.length).toFixed(1))
  g3 = Number(Math.pow(g3, 1/list_g3.length).toFixed(1))
  return {
    g1,g2,g3
  }
}

function distanceAlternate(mt,na) {
  let result = []

  mt.map((v) => {
    const value = v.value;
    const final_value = (value[0] - na.g1) + (value[1] - na.g2) + (value[2] - na.g3) 

    result.push({
      ...v,
      value: final_value
    })
  })

  return result
}

function mabac(weight, schools) {
    const filtered_data = [];

    schools.forEach(school => {
        filtered_data.push({
            id: school.id,
            akreditasi: school.accreditation.value, 
            fasilitas: school.facility.value, 
            jarak: school.distance.value ?? 1
        })
    });

    const normalized = normalizeMatrixBenefitRounded(filtered_data)
    const mt = matrixTertimbang(weight, normalized)
    const na = nearArea(mt)
    const da = distanceAlternate(mt,na)
    

    return da
}

export default mabac;