alert("Create a new array containing only the odd Numbers");
let words = prompt("Enter a sequence of numbers").split(",");
console.log(`${words}`)
words = words.map(Number);
var result = words.filter(word => word%2!=0);
alert(`${words}=>${(result)}`);