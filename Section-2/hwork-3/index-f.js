k = prompt("please enter an ending number :");
l = prompt("please enter a starting number :");
j = prompt("please enter steps: ");
k = Number(k);
l = Number(l);
j = Number(j);
console.log(`A sequene of number starting from ${l} and ending before ${k},stepping by ${j} are:`)
while (l < k) {
    console.log(l);
    l += j;
};