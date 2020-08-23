console.log("EX6");
console.log("Hi there, this is young learning tasks to front-end developer careers:");
let programming = {
    language: ["HTML", "CSS", "Basic of JavaScript", "Node Package Manager (npm)", "Git",]
};
for (i = 0; i < programming['language'].length; i++) {
    console.log(`#${i + 1}.${programming['language'][i]}`);
    console.log("Complete: false")
};
while (true) {
    x = String(prompt("Enter your command (New,Delete,Update,Complete)"));
    if (x == "New") {
        y = String(prompt("Emter new task"));
        programming['language'].push(y);
    };
    console.log("---------------------");
    for (i = 0; i < programming['language'].length; i++) {
        console.log(`#${i + 1}.${programming['language'][i]}`);
        console.log("Complete: false")
    };
    if (x == "Update") {

    };
};