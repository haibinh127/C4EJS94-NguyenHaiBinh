console.log("Read All Exercise");
console.log("Your movie list is:");
let movieTitle = ["Batman", "Up", "Attack on titans", "My boss my hero "];
//1
// console.log(movieTitle);
//2
// console.log("The first half of your movie list is: ");
// for (let i = 0; i < (movieTitle.length) / 2; i++) {
//     console.log(movieTitle[i]);
// };
//3
console.log(" Your movie list with position is: ");
for (i = 0; i < movieTitle.length; i++) {
    console.log(`${i+1}` + "." + movieTitle[i]);
};
