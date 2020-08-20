console.log("EX7");
alert("Search to look for the number in my array,")
var arr = [1, 2, 3, 4, 5];
arr = arr.map(Number);
alert(`This is my array ${arr}`);
x = Number(prompt("Please enter your number"));
console.log(x);
if (arr.includes(x)) {
    alert(`${x} is found in my array at index ` + arr.indexOf(x));
} else {
    alert(`${x} is not found in my array `);
}