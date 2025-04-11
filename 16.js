let suma = 0;

for (let i = 1; i <= 50; i++) {
    if (i % 2 !== 0) {
        suma += i;
    }
    if (suma > 500) {
        break;
    }
}

console.log(`La suma de impares es: ${suma}`);
