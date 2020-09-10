let num1 = document.getElementById("firstone");
let plus = document.getElementById("plus");
let num2 = document.getElementById("secondone");
let equal = document.getElementById("equal");
let num3 = document.getElementById("thirdone");
let answer = document.getElementById("math2");
let right = document.getElementById("tick");
let startplay = document.getElementById("start");
function myMath() {
    a = Math.floor(Math.random() * 11);
    x = "+"
    b = Math.floor(Math.random() * 11);
    y = "="
    c = Math.floor(Math.random() * 21);
    num1.innerHTML = a;
    plus.innerHTML = x;
    num2.innerHTML = b;
    equal.innerHTML = y;
    num3.innerHTML = c;
    answer.innerHTML = `<input id="r" type="button" value="RIGHT" onclick="righta()">&emsp;<input id="wr" type="button" value="WRONG" onclick="wrongb()">`
};
startplay.addEventListener('click',setInterval(myMath, 5000));
function righta() {
    d = a + b;
    if (a == d) { alert("Well Done") };
    if (a != d) { alert("Not Correct") }
};
function wrongb() {
    d = a + b;
    if (a != d) { alert("Well Done") };
    if (a == d) { alert("Not Correct") };
};
