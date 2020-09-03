const container = document.getElementById(`list`);
//d
for (i = 0; i < 3; i++) {
    container.insertAdjacentHTML(`beforebegin`, `<li>${i}</li>`)
};
//a
for (i = 0; i < 3; i++) {
    container.insertAdjacentHTML(`afterbegin`, `<li>${i}</li>`)
};
//c
for (i = 0; i < 3; i++) {
    container.insertAdjacentHTML(`beforeend`, `<li>${i}</li>`)
};
//b
for (i = 0; i < 3; i++) {
    container.insertAdjacentHTML(`afterend`, `<li>${i}</li>`)
};