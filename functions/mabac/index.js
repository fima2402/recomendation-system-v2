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
      const normRow = { name: row.id, 'value' : [] };
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
            "name": v.name,
            "value": [ 
                (w.akreditasi * v.value[0]) + w.akreditasi, 
                (w.fasilitas * v.value[1]) + w.fasilitas,
                (w.jarak * v.value[1]) + w.jarak,
            ]
        })
    })

    return result
}

function nearArea(mt) {

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
    const calculate = matrixTertimbang(weight, normalized)

    return {weight, schools}
}

export default mabac;