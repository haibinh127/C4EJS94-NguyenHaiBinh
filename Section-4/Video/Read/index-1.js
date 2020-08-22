console.log("Init");
let movie = {
    title: 'The dark knight rises',
    year: 2012,
    rate: 8.4
};
//1
console.log(movie.title);
console.log(movie.year);
console.log(movie.rate);
//2
console.log(movie['title']);
console.log(movie['year']);
console.log(movie['rate']);
//3.Log an non-existent property of the movie, director, what is the result?
console.log(movie.director);//undefined
console.log(movie['director']);//undefined