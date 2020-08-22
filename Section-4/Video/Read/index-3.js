console.log("You can check whether a value is undefined (has no value) or not by using if - else pair for example:");
let movie = {
    title: 'The dark knight rises',
    year: 2012,
    rate: 8.4
};
x = String(prompt(" What do you want to know "));
a = 'title';
b = 'year';
c = 'rate';
if (x == a) {
    alert(movie.title);
} else if (x == b) {
    alert(movie.year);
} else if (x == c) {
    alert(movie.rate);
} else {
    alert(`${x} does not exist in our data`);
};