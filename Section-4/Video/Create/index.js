console.log("Upgrade Update script to check whether the property entered by users exist, if yes, perform as usual, if no, tell them that we will add new and perform create");
let movie = {
    title: 'The dark knight rises',
    year: 2012,
    rate: 8.4
};
x = String(prompt(" What do you want to update ? "));
a = 'title';
b = 'year';
c = 'rate';
if (x == a) {
    z = String(prompt(" What is the update ?"));
    console.log("Done.New Data:")
    movie.title = z;
    console.log(movie);
} else if (x == b) {
    z = String(prompt(" What is the update ?"));
    console.log("Done.New Data:")
    movie.year = Number(z);
    console.log(movie);
} else if (x == c) {
    z = String(prompt(" What is the update ?"));
    console.log("Done.New Data:")
    movie.rate = Number(z);
    console.log(movie);
} else {
    alert(`${x} does not exist in our data, we wil add new.`);
    w = prompt("What is the update")
    y = prompt("Enter the new data:");
    movie[`${w}`] = y;
    console.log(movie);
};
