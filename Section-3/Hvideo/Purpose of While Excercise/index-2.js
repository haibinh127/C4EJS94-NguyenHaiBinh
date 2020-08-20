console.log("A quiz");
alert("How many legs does a spider have ?");
alert(`The answers are: \n \
1.none \n \
2.4 legs \n \
3.8 legs \n \
4.12 legs`);
while (true) {
    x = Number(prompt("Please write your answer:"));
    if (x == 1) {
        alert("Good luck next time");
    } else if (x == 2) {
        alert("Good luck next time");
    } else if (x == 3) {
        alert("Bravo, you are correct");
        break
    } else if (x == 4) {
        alert("Good luck next time");
    } else {
        alert("Invalide choice, the answer must be 1, 2, 3 or 4");
    }
}
