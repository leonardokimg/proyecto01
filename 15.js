const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función para mostrar el menú
const mostrarMenu = () => {
    console.log("Menú:");
    console.log("1. Opción 1");
    console.log("2. Opción 2");
    console.log("3. Salir");
    rl.question("Selecciona una opción: ", (respuesta) => {
        switch (respuesta) {
            case '1':
                console.log("Has seleccionado Opción 1.");
                mostrarMenu(); // Mostrar el menú nuevamente
                break;
            case '2':
                console.log("Has seleccionado Opción 2.");
                mostrarMenu(); // Mostrar el menú nuevamente
                break;
            case '3':
                console.log("Has salido del menú.");
                rl.close(); // Cerrar la interfaz de readline
                break;
            default:
                console.log("Opción no válida. Intenta de nuevo.");
                mostrarMenu(); // Mostrar el menú nuevamente
        }
    });
};

mostrarMenu();

