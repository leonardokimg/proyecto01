const readline = require('readline');

// Crear interfaz para leer la entrada del usuario
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función para mostrar la tabla de multiplicar
const mostrarTablaMultiplicar = (numero) => {
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
};

// Pedir al usuario que ingrese un número
rl.question("Ingresa un número para ver su tabla de multiplicar: ", (respuesta) => {
    const numero = parseInt(respuesta);
    if (!isNaN(numero)) {
        mostrarTablaMultiplicar(numero);
    } else {
        console.log("Por favor, ingresa un número válido.");
    }
    rl.close(); // Cerrar la interfaz de readline
});

