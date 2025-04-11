let a = 0, b = 1;

while (a <= 100) {
    console.log(a);
    let temp = a;
    a = b;
    b = temp + b;
}
