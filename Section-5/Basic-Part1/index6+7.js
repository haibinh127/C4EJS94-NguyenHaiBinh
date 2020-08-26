var questions = [
    {
        question: "Which fictional live at 221b Baker Street ? \n \
        1.Watson \n \
        2.Sam Spade \n \
        3.Scubidu \n \
        4.Sherlock Holmes",
        rightChoice: 4,
    },
    {
        question: "What sweet food made by bees using nectar from flowers ? \n \
        1.Bread \n \
        2.Honey \n \
        3.Sugar \n \
        4.Potent",
        rightChoice: 2,
    },
    {
        question: "Which country is home to the Kangaroo ? \n \
        1.Australia \n \
        2.Austria \n \
        3.New Zealand \n \
        4.US",
        rightChoice: 1,
    },
    {
        question: "How many legs does a optopus has ? \n \
        1.4 legs \n \
        2.0 leg \n \
        3.8 legs \n \
        4.2 legs",
        rightChoice: 3,
    }
];
var score = 0;
for (var i = 0; i < questions.length; i++) {
    respone = Number(prompt(questions[i].question))
    if (respone = questions[i].rightChoice) {
        score++;
    };
}
alert("We are out of questions :(");
alert(`You answer correctly ${score} out of ${questions.length}`);