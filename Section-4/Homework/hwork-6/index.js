console.log("EX6");
console.log("Hi there, this is young learning tasks to front-end developer careers:");
let programming = {
    language: ["HTML", "CSS", "Basic of JavaScript", "Node Package Manager (npm)", "Git",],
    status: ["False", "True"],
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
        console.log("---------------------");
        for (i = 0; i < programming['language'].length; i++) {
            console.log(`#${i + 1}.${programming['language'][i]}`);
            console.log("Complete: false");
        };
        console.log("---------------------");
        // console.log("---------------------");
        // for (i = 0; i < programming['language'].length; i++) {
        //     console.log(`#${i + 1}.${programming['language'][i]}`);
        //     console.log("Complete: false")
        // };
        if (x == "Update") {
            m = Number(prompt("Enter position:"));
            n = String(prompt("Enter new title"))
            programming['language'][m - 1] = `${n}`;
            for (i = 0; i < programming['language'].length; i++) {
                console.log(`#${i + 1}.${programming['language'][i]}`);
                console.log("Complete: false")
            };
        };
    }
    // for (i = 0; i < programming['language'].length; i++) {
    //     console.log(`#${i + 1}.${programming['language'][i]}`);
    //     console.log("Complete: false")
    // };
    if (x == "Complete") {
        for (i = 0; i < programming['language'].length; i++) {
            m = Number(prompt("Enter position:"));
            if (i = m) {
                console.log("---------------------");
                console.log(`Position ${m} after being changed is :`)
                console.log(`#${m}.${programming['language'][m - 1]}`);
                console.log(`Complete: ${programming.status[1]}`)
            } else {
                console.log(`#${i + 1}.${programming['language'][i]}`);
                console.log("Complete: false")
            }
        }
    }
    console.log("---------------------");
    if (x == "Delete") {
        m = Number(prompt("Enter position:"));
        programming['language'].splice(m - 1, 1);
        for (i = 0; i < programming['language'].length; i++) {
            console.log(`#${i + 1}.${programming['language'][i]}`);
            console.log("Complete: false")
        };
    };
    break;
};