// ej 9
// Rellena la matriz como la siguiente utilizando bucles for anidados
// let matriz = [
//   ['00','01','02'],
//   ['10','11','12'],
//   ['20','21','22']
// ];
let matriz = [
    [],
    [],
    []
]
for (let i = 0; i < matriz.length; i++) {
    for(let x = 0; x < 3; x++){
        matriz[i][x] = `${i}${x}`;
    }
}
console.log(matriz);