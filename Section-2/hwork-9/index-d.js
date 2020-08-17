var x = prompt("Hay nhap vao so n")
console.log(`Chuoi 0 va 1 cua so ${x} la: `)
x = Number(x);
for (let i = 0; i < x; i++) {
    if (i % 2 == 0) {
        console.log(0);
    } else {
        console.log(1);
    }
};