console.log("Ex8");
console.log("Hello, my name is Binh and here is my sheep sizes: ")
var sheep = [5, 7, 300, 90, 24, 50, 75];
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
sheep[sheep.indexOf(max)] = 8;
console.log(sheep);
for (let i = 0; i < sheep.length; i++) {
    sheep[i] += 50;
}
console.log(`Month1`)
console.log(`One month has, passed, my sheeps have grown, here are their sizes \n ${sheep.join(" ")}`);
for (let i = 1; i < 4; i++) {
    console.log(`Month${i+1}`)
    for (let j = 0; j < sheep.length; j++) {
        sheep[j] += 50; 
        max = sheep[0];
        if (sheep[j] >= max) {
            max = sheep[j];
        }
    }
    console.log(`One months has, passed, my sheeps have grown, here are their sizes \n ${sheep.join(" ")}`);
    console.log(` Now my biggest sheep has size: ${sheep.indexOf(max)}, let shave it`);
};
