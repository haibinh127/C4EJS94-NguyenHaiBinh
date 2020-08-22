console.log("Array of Object");
let movie1 = {
    title: 'The dark knight rises 1',
    year: 2011,
    rate: 8.5,
};
let movie2 = {
    title: 'The dark knight rises 2',
    year: 2012,
    rate: 8.6,
};
let movie3 = {
    title: 'The dark knight rises 3',
    year: 2012,
    rate: 8.7,
};
let movies = [];
movies.push(movie1);
movies.push(movie2);
movies.push(movie3);
console.log(movies[0]);
console.log(movies[2]);
console.log(movies[2].title);
for (i = 0; i < movies.length; i++) {
    console.log("-----------------");
    console.log(movies[i].title);
    console.log(`Year: ${movies[i].year}`);
    console.log(`Rate: ${movies[i].rate}`);
};
console.log(`Rate: ${movies[movies.length-1].rate+=0.7}`);