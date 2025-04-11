const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función para la cuenta regresiva
const cuentaRegresiva = (numero) => {
    let count = numero;
    const interval = setInterval(() => {
        console.log(count);
        count--;
        if (count < 0) {
            clearInterval(interval);
            console.log("¡Cuenta regresiva terminada!");
            rl.close(); // Cerrar la interfaz de readline
        }
    }, 1000); // Imprimir cada segundo
};

// Pedir al usuario que ingrese un número
rl.question("Ingresa un número para la cuenta regresiva: ", (respuesta) => {
    const numero = parseInt(respuesta);
    if (!isNaN(numero)) {
        cuentaRegresiva(numero);
    } else {
        console.log("Por favor, ingresa un número válido.");
        rl.close(); // Cerrar la interfaz de readline
    }
});
