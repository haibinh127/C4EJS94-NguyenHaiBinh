console.log("Caculate the factorial of a number n=");
n = prompt("Enter a number");
y = 1;
let i = 1;
while (i <= n) {
    y = y * i
    i++
};
alert(` The factorial of ${n} is ` + y);