let keywordExplaination = {
    debug: 'The process of figuring out why your program has a certain error and how to fix it',
    done: 'When your task is complete, the only thing you have to do is to wait for users to use it (no additional codes or actions needed)',
    defect: 'The formal word for ‘error’',
    pm: 'The short version of Project Manager, the person in charge of the final result of a project',
    uiux: 'UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels'
};
var A = "debug";
var B = "done";
var C = "defect";
var D = "pm";
var E = "uiux";
alert("Hi there, this is dev dictionary");
// let keywordExplaination2 = [];
// keywordExplaination2.push(keywordExplaination.debug);
// keywordExplaination2.push(keywordExplaination.done);
// keywordExplaination2.push(keywordExplaination.defect);
// keywordExplaination2.push(keywordExplaination.pm);
// keywordExplaination2.push(keywordExplaination.uiux);
while (true) {
    x = String(prompt("Enter a keyword"));
    if (x == A) {
        alert(`${x}:\n\
        ${keywordExplaination.debug}`);
    } else if (x == B) {
        alert(`${x}:\n\
        ${keywordExplaination.done}`);
    } else if (x == C) {
        alert(`${x}:\n\
        ${keywordExplaination.defect}`);
    } else if (x == D) {
        alert(`${x}:\n\
        ${keywordExplaination.pm}`);
    } else if (x == D) {
        alert(`${x}:\n\
        ${keywordExplaination.pm}`);
    }else {
        h=prompt(`We could not find you word: ${x} ,please leave your explaination:`) 
        alert("Done");
        alert(`${x}:\n\
        ${h}`);
        break;
    };
};    
