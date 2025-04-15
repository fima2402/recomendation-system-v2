import { fuzzyComparisonMatrix } from "../../database/index.js";
import { scalaSaatyMatrix } from "../../database/index.js";

// Fungsi untuk menjumlahkan TFN
function addTFN(a, b) {
    return [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
  }
  
// Fungsi untuk membagi TFN
function divideTFN(a, b) {
    return [    
        Number((a[0] / b[2]).toFixed(2)),
        Number((a[1] / b[1]).toFixed(2)),
        Number((a[2] / b[0]).toFixed(2))
    ];
}

// Fungsi untuk menghitung normalisasi
function normalizationFunc(fse) {
    const defuzzifikasi = fse.map(([l, m, u]) => {
        const result = (l + m + u) / 3;
        return Number(result.toFixed(2));
    });
  
    const total = defuzzifikasi.reduce((sum, val) => sum + val, 0);
  
    const normalisasi = defuzzifikasi.map(val => {
        const result = val / total;
        return Number(result.toFixed(2));
    });

    return normalisasi;
}

function multiplyMatrixWithVector(matrix, vector) {
    const result = [];
  
    for (let i = 0; i < matrix.length; i++) {
      let sum = 0;
      for (let j = 0; j < vector.length; j++) {
        sum += matrix[i][j] * vector[j];
      }
      result.push(sum);
    }
  
    return result;
}

function roundResult(result) {
    return result.map((num, i) => {
      const decimals = i === 0 ? 0 : i === 1 ? 1 : 2;
      return Number(num.toFixed(decimals));
    });
}

function deltaMaxFunc(a, b) {
    const result = []
    let deltaMax = 0;

    a.forEach((val, i) => {
        result.push(Number((val/b[i])))
    })

    deltaMax = result.reduce((acc, val) => acc + val, 0) / result.length;

    return deltaMax;
}

function calculateCI(lambdaMax, n) {
    return (lambdaMax - n) / (n - 1);
}

function fuzzyAHP() {
    const f = fuzzyComparisonMatrix();
    const scalaSaaty = scalaSaatyMatrix();

    const rowSums = f.matrix.map(row => {
        return row.reduce((acc, curr) => addTFN(acc, curr), [0, 0, 0]);
    });

    const totalSum = rowSums.reduce((acc, curr) => addTFN(acc, curr), [0, 0, 0]);

    const FSEs = rowSums.map(rowSum => divideTFN(rowSum, totalSum));

    // defuzzifikasi dan normalisasi
    const weight = normalizationFunc(FSEs);

    // deltamax
    const aw = multiplyMatrixWithVector(scalaSaaty, weight);
    const rounded = roundResult(aw);
    const deltaMax = deltaMaxFunc(rounded, weight);

    // ci
    const ci = calculateCI(deltaMax, f.matrix.length);

    // cr
    const cr = Number((ci / 0.58).toFixed(2));

    return {
        status: cr < 0.1,
        value: {
            'cr': cr, 
            'w' : {
                'akreditasi': weight[0],
                'fasilitas': weight[1],
                'jarak': weight[2],
            }
        },
        msg: `Karena (${cr}<0.1), maka tingkat konsistensi matriks kriteria dapat diterima.`,
    }
}

export default fuzzyAHP;