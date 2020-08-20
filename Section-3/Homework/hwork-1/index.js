console.log("Variable Swap");
//1.Destructuring assignment
// let a = 1;
// let b = 2;
// console.log(`Gia tri của a và b trước khi swap la a =${a} va b=${b}`);
// [a, b] = [b, a];
// console.log(`Gia tri cua a va b sau khi swap la a =${a} va b=${b}`);
//2.Temporary variable
// let a = 1;
// let b = 2;
// let temp;
// console.log(`Gia tri của a và b trước khi swap la a =${a} va b=${b}`);
// temp = a;
// a = b;
// b = temp;
// console.log(`Gia tri cua a va b sau khi swap la a =${a} va b=${b}`);
//3.Addition and difference
// let a=1;
// let b=2;
// console.log(`Gia tri của a và b trước khi swap la a =${a} va b=${b}`);
// a=a+b;
// b=a-b;
// a=a-b;
// console.log(`Gia tri cua a va b sau khi swap la a =${a} va b=${b}`);
//4.Bitwise XOR operator
let a = 1;
let b = 2;
console.log(`Gia tri của a và b trước khi swap la a =${a} va b=${b}`);
a = a ^ b;
b = a ^ b;
a = a ^ b;
console.log(`Gia tri cua a va b sau khi swap la a =${a} va b=${b}`);