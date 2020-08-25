var questions = [
    {
        question1: "Which fictional live at 221b Baker Street ? \n \
        1.Watson \n \
        2.Sam Spade \n \
        3.Scubidu \n \
        4.Sherlock Holmes",
        rightChoice: 4,
    },
    {
        question2: "What sweet food made by bees using nectar from flowers ? \n \
        1.Bread \n \
        2.Honey \n \
        3.Sugar \n \
        4.Potent",
        rightChoice: 2,
    }
];
i = Math.floor(Math.random() * 2)
console.log(i);
if (i == 0) {
    x = Number(prompt(`${questions[0]['question1']}`))
    if(x==questions[0]['rightChoice']){
        alert('Bravo!!!')
    } else{
        alert('Good luck next time')
    } 
};
if (i == 1) {
    y = Number(prompt(`${questions[1]['question2']}`))
    if(y==questions[1]['rightChoice']){
        alert('Bravo!!!')
    } else{
        alert('Good luck next time')
    } 
};
