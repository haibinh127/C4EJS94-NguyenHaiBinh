let input = document.querySelector(`input`);
let input1 = document.getElementById(`player`);
input.addEventListener(`keyup`, (e) => {
    if (e.keyCode === 13) {
        input1.innerHTML += `<li>${e.target.value}</li>`;
    }
})