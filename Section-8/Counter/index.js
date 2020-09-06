let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let number = document.getElementById("number");
let a = 0;
plus.addEventListener('click', function () {
    a += 1;
    number.innerHTML = a;
})
minus.addEventListener('click',function(){
    a+=-1;
    number.innerHTML = a;
})