alert("Create a new array containing the names, each surrounded with<> .");
let words = prompt("Enter a sequence of Names").split(",");
console.log(`${words}`);
let newArr = words.map(words => `<${words}>`);
console.log(`${newArr}`);
alert(`${words}=>${(newArr)}`);