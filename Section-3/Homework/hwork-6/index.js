console.log("EX6");
alert("Find the smallest number of a sequence of numbers ")
let arr = prompt("Enter a sequence of numbers").split(",");
arr = arr.map(Number);
console.log(arr);
let s = 0;
min = arr[0];
for (var i = 0; i < arr.length; i++) {
    if (arr[i] <= min) {
        min = arr[i];
    }
}
console.log(` The smallest number is ${min}`);