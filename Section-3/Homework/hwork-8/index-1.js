console.log("Ex8");
console.log("Hello, my name is Binh and here is my sheep sizes: ")
var sheep = ["5", "7", "300", "90", "24", "50", "75"];
sheep = sheep.map(Number);
console.log(sheep);
max = sheep[0];
for (var i = 0; i < sheep.length; i++) {
    if (sheep[i] >= max) {
        max = sheep[i];
    }
}
console.log(` Now my biggest sheep has size: ${max}, let shave it`);
console.log("After shearing, here is my flock:");
sheep[sheep.indexOf(max)]=8;
console.log(sheep);
console.log('MONTH1');
console.log("One month hass passed,my sheep have grown,here are their size");
sheep[sheep.indexOf(5,7,8,90,24,50,75)] = Number(sheep.indexOf(5,7,300,90,24,50,75))+50 ;
console.log(sheep);