const fibonacci = (n) => {
    const secuencia = [0, 1];
    for (let i = 2; i < n; i++) {
        secuencia[i] = secuencia[i - 1] + secuencia[i - 2];
    }
    return secuencia;
};

console.log(fibonacci(10));