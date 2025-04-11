function mayorMenor(array) {
    const mayor = Math.max(...array);
    const menor = Math.min(...array);
    return { mayor, menor };
}

const numeros = [15, 52, 75, 3, 54];
console.log(mayorMenor(numeros)); 
