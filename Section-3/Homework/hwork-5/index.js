console.log("EX5");
alert("Caculate the total of a sequence of numbers ")
let arr = prompt("Enter a sequence of numbers").split(",");
arr = arr.map(Number);
console.log(arr);
let s = 0;
for (var i = 0; i < arr.length; i++) {
    s += arr[i];
};
alert(`The sum of them is ${s}`);