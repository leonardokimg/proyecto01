const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función para validar la entrada del usuario
const validarEntrada = () => {
    rl.question("Ingresa un número mayor que 0: ", (respuesta) => {
        const numero = parseInt(respuesta);
        if (numero > 0) {
            console.log(`Número válido: ${numero}`);
            rl.close(); // Cerrar la interfaz de readline
        } else {
            console.log("Número inválido. Inténtalo de nuevo.");
            validarEntrada(); // Volver a pedir entrada
        }
    });
};

validarEntrada();
