function contarPares(array) {
    return array.filter(numero => numero % 2 === 0).length;
}


const numeros = [42, 77, 33, 22, 98];
console.log(contarPares(numeros)); 
