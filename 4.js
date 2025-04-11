function ordenarArray(array) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]]; 
            }
        }
    }
    return array;
}


const numeros = [15, 17, 2, 87, 56];
console.log(ordenarArray(numeros)); 
