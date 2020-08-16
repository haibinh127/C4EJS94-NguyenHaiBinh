z = prompt("Enter the number of polygon");
x = prompt("Enter the number of edges")
y = prompt("Enter the lenght of edges");
n = Number(z);
m = Number(y);
function polygon() {
    for (var i = 1; i <= n; i++) {
        fd(m)
        rt(360 / n)
    }
}
polygon()