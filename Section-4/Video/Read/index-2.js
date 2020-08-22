console.log("Khởi tạo 1 list, trong này liệt kê ít nhất ba thứ mà bạn thích (Sport, LOL, BTS) , thêm 1 thứ mà bạn thích vào cuối list này, sau khi thêm cần in ra list mới");
let x = ['Sport', 'LOL', 'BTS'];
z = String(prompt("Please enter a new item"));
x.push(z);
console.log(x);
console.log(`1: ${x[0]}. `.toUpperCase());
console.log(`2: ${x[x.length - 1]} `.toUpperCase());
console.log(`3: ${x[x.length - 2]} `.toUpperCase());
