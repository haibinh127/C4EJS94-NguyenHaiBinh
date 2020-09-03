let inputx = document.getElementById(`name`);
let input1 = document.getElementById(`username`);
inputx.addEventListener(`keyup`, (name) => {
    if (name.keyCode === 13) {
        alert(`Hi ${name.target.value}`);
    }
});
let inputy = document.getElementById(`wish`);
let input2 = document.getElementById(`userwish`);
inputy.addEventListener(`keyup`, (wish) => {
    if (wish.keyCode === 13) {
        alert(`Your dream is ${wish.target.value}`);
    }
});