const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let suma = 0;

// Función para sumar hasta que el usuario ingrese 0
const sumarHastaCero = () => {
    rl.question("Ingresa un número (0 para terminar): ", (respuesta) => {
        const numero = parseInt(respuesta);
        if (!isNaN(numero)) {
            suma += numero;
            if (numero === 0) {
                console.log(`La suma total es: ${suma}`);
                rl.close(); // Cerrar la interfaz de readline
            } else {
                sumarHastaCero(); // Volver a pedir otro número
            }
        } else {
            console.log("Por favor, ingresa un número válido.");
            sumarHastaCero(); // Volver a pedir otro número
        }
    });
};

sumarHastaCero();
