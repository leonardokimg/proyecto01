const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const numeroAleatorio = Math.floor(Math.random() * 10) + 1;
let intentos = 0;

const adivinarNumero = () => {
    rl.question("Adivina el número del 1 al 10: ", (respuesta) => {
        const intento = parseInt(respuesta);
        if (intento === numeroAleatorio) {
            console.log("¡Correcto!");
            rl.close();
        } else {
            console.log("Incorrecto, intenta de nuevo.");
            intentos++;
            if (intentos < 3) {
                adivinarNumero();
            } else {
                console.log(`Lo siento, el número era ${numeroAleatorio}.`);
                rl.close();
            }
        }
    });
};

adivinarNumero();

