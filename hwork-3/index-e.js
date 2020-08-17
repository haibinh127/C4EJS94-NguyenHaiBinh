j = prompt("please enter n");
k = prompt("please enter c");
j = Number(j);
k = Number(k);
console.log(`A sequence of numbers stepping by 3,starting from ${k} and ending before ${j} are:` )
while (k < j) {
    console.log(k);
    k += 3;
};