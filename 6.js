function revertirArray(array) {
    const nuevoArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
        nuevoArray.push(array[i]);
    }
    return nuevoArray;
}

const numeros = [1, 2, 3, 4, 5];
console.log(revertirArray(numeros)); 