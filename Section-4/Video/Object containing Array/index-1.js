let movie = {
    title: 'Avenger',
    year: 2012,
    rate: 8.0,
    characters: ["Thor", "Loki", "Ironman"],
};
console.log(`Title: ${movie.title} `);
console.log(`Year: ${movie.year}`);
console.log(`Rate: ${movie.rate}`);
test = movie.characters.join("  ");
console.log(`Casts: ${test}`);
console.log("-------------------")
test1 = movie.characters.push("Hulk");
console.log(`Title: ${movie.title} `);
console.log(`Year: ${movie.year}`);
console.log(`Rate: ${movie.rate}`);
test = movie.characters.join("  ");
console.log(`Casts: ${test}`);
