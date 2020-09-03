let x = document.getElementById(`nice-body`);
let h2 = `<h2>This is heading level 2</h2>`;
x.innerHTML += h2;
let h3 = `<ul>
    <li>Ronaldo</li>
    <li>Messi</li>
    <li id ="neymarjr">Neymar</li>
</ul>`;
x.innerHTML += h3;
console.log(h3);
//3-3
let h4 = document.getElementById(`neymarjr`);
h4.remove();
console.log(h3);