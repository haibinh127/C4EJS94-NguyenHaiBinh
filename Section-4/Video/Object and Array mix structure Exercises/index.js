let movie1 = {
    title: 'The dark knight rises 1',
    year: 2011,
    rate: 8.5,
    characters: ["hulk", "ironman", "thor"]
};
let movie2 = {
    title: 'The dark knight rises 2',
    year: 2012,
    rate: 8.6,
    characters: ["hulk1", "ironman1", "thor1"]
};
let movie3 = {
    title: 'The dark knight rises 3',
    year: 2012,
    rate: 8.7,
    characters: ["hulk2", "ironman2", "thor3"]
};
let movies = [];
movies.push(movie1);
movies.push(movie2);
movies.push(movie3);
for (i = 0; i < movies.length; i++) {
    test = movies[i].characters.join("  ");
    console.log("-----------------");
    console.log(movies[i].title);
    console.log(`Year: ${movies[i].year}`);
    console.log(`Rate: ${movies[i].rate}`);
    console.log(`Casts: ${test}`);
};
