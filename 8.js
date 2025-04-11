function sumarPositivos(array) {
    return array.filter(numero => numero > 0).reduce((acumulador, numero) => acumulador + numero, 0);
}

const numeros = [-7, 9, -12, 15, 1];
console.log(sumarPositivos(numeros)); 
