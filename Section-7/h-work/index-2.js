function sayHello(message, person) {
    alert(message + ', ' + person);
}
//setTimeout
// setTimeout(sayHello, 1000, "Hi", "Binh");
//setInterval
setInterval(sayHello, 2000, "Hi", "Binh");