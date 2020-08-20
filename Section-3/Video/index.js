//Innit
console.log(" Titles of some of your favorite movies");
let movieTitle = ['Stranger Things', 'Sherlock Holmes', 'Catch me if you can'];
console.log(movieTitle);
// Create
// {
//     console.log(" New movies list are: ")
//     let newMovie = prompt("Please enter a new movie name");
//     movieTitle.push(newMovie);
// }
//  Read
//  {
//     i = prompt("Please enter the number of a movie you want to watch:")
//     console.log(movieTitle[i]);
// }
///Update.1
// let i = 0 ;
// let item = prompt("Please enter a new movie title:")
// console.log("New movie-list is:")
// movieTitle[i] = item;
// console.log(movieTitle);
//Update.2
// let i = prompt("Please enter the number of movieTitle you want to change: ");
// console.log(`Your movie name is: `);
// console.log(movieTitle[i]);
// let x = prompt("Please enter your new movieTitle name:");
// movieTitle[i] = x;
// console.log(" Your new movie-list is: ");
// console.log(movieTitle);
//Delete.1
// let i = prompt("Please enter the position of the movie you want to delete in the movieTitle:");
// h = movieTitle.splice(i, 1);
// console.log(`Your movie-list after delete movie number ${i} is: ` );
// console.log(movieTitle);
//Delete.2 
let i = prompt("Please enter the position of the movie you want to delete in your movie-list:");
let h = prompt("How many movie you want to delete from your movie-list ?");
movieTitle.splice(i, h);
console.log(`Your movie-list after delete ${h}-movie(s) at positon ${i} is:`);
console.log(movieTitle);
