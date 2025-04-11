function primerMultiplo5(array) {
    return array.find(numero => numero % 5 === 0);
}

const numeros = [1, 2, 5, 10, 15];
console.log(primerMultiplo5(numeros)); 
