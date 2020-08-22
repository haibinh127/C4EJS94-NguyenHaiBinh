console.log("Write a script, asking users what they want to update and what is the update, perform the update and then log out the result");
let movie = {
    title: 'The dark knight rises',
    year: 2012,
    rate: 8.4
};
x = String(prompt(" What do you want to update ? "));
z = String(prompt(" What is the update ?"));
a = 'title';
b = 'year';
c = 'rate';
if (x == a) {
    console.log("Done.New Data:")
    movie.title = z;
    console.log(movie);
} else if (x == b) {
    console.log("Done.New Data:")
    movie.year = Number(z);
    console.log(movie);
} else if (x == c) {
    console.log("Done.New Data:")
    movie.rate = Number(z);
    console.log(movie);
} else {
    alert(`${x} does not exist in our data`);
};