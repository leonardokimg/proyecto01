function buscarElemento(array, nombre) {
    const index = array.indexOf(nombre);
    return index !== -1 ? index : "No encontrado";
}


const nombres = ["Juan", "Ana", "Pedro","leo"];
console.log(buscarElemento(nombres, "leo")); 
