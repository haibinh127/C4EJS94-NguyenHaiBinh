let dataStructure = {
    questions: ["How many legs does a optopus has ?", "Which country is home to the Kangaroo ?", "Which fictional detective lived at 221b Baker Street ?", "What sweet food made by bees using nectar from flowers ?"],
    answer1: ["4 legs", "no legs", "8 legs", "2 legs"],
    answer2: ["Australia", "Austria", "New Zealand", "US"],
    answer3: ["Watson", "Sam Spade", "Scubidu", "Sherlock Holmes"],
    answer4: ["Bread", "Honey", "Sugar", "Potent"],
    rightChoice: ["8 legs", "Australia", "Honey", "Sherlock Holmes"]
}
let score = 0;{
    x1 = Number(prompt(`${dataStructure['questions'][0]} \n \
1.${dataStructure.answer1[0]} \n \
2.${dataStructure.answer1[1]} \n \
3.${dataStructure.answer1[2]} \n \
4.${dataStructure.answer1[3]} \n \
`));
    x2 = Number(prompt(`${dataStructure['questions'][1]} \n \
1.${dataStructure.answer2[0]} \n \
2.${dataStructure.answer2[1]} \n \
3.${dataStructure.answer2[2]} \n \
4.${dataStructure.answer2[3]} \n \
`));
    x3 = Number(prompt(`${dataStructure['questions'][2]} \n \
1.${dataStructure.answer3[0]} \n \
2.${dataStructure.answer3[1]} \n \
3.${dataStructure.answer3[2]} \n \
4.${dataStructure.answer3[3]} \n \
`));
    x4 = Number(prompt(`${dataStructure['questions'][3]} \n \
1.${dataStructure.answer4[0]} \n \
2.${dataStructure.answer4[1]} \n \
3.${dataStructure.answer4[2]} \n \
4.${dataStructure.answer4[3]} \n \
`));
};
alert("We are out of questions :(");
if(x1==3){score++};
if(x2==1){score++};
if(x3==4){score++};
if(x4==2){score++};
alert(`You answer correctly ${score} out of ${dataStructure['rightChoice'].length}`);