function sumarElementos(array) {
    return array.reduce((acumulador, numero) => acumulador + numero, 0);
}

const numeros = [1, 2, 3, 4, 5];
console.log(sumarElementos(numeros)); 
