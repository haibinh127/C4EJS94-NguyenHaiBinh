let h1 = document.querySelector(`input`);
h1.addEventListener('keyup',(e) => {
    if (e.keyCode === 13) {
        alert(`Hi ${e.target.value}`)
    }
    h2 = document.querySelector(`button`);
    h2.addEventListener('click', function () {
        z = (e.target.value).toUpperCase();
        alert(`Your name in uppercase is: ${z}`)
    })
})