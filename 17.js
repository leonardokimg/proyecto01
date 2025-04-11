const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const usuarioCorrecto = "admin";
const contrasenaCorrecta = "1234";
let intentos = 0;

// Función para el contador de intentos
const contadorIntentos = () => {
    if (intentos < 3) {
        rl.question("Ingresa tu usuario: ", (usuario) => {
            rl.question("Ingresa tu contraseña: ", (contrasena) => {
                if (usuario === usuarioCorrecto && contrasena === contrasenaCorrecta) {
                    console.log("Acceso permitido");
                    rl.close(); // Cerrar la interfaz de readline
                } else {
                    console.log("Usuario o contraseña incorrectos.");
                    intentos++;
                    contadorIntentos(); // Volver a intentar
                }
            });
        });
    } else {
        console.log("Acceso denegado.");
        rl.close(); // Cerrar la interfaz de readline
    }
};

contadorIntentos();
