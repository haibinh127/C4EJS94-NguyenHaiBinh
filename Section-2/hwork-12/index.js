x = prompt("Enter the number of edges");
y = prompt("Enter the lenght of edges")
n = Number(x);
m = Number(y);
if (n > 1) {
    function polygon() {
        for (var i = 1; i <= n; i++) {
            fd(m)
            rt(360 / n)
        }
    }
    polygon()
} else {
    function circle() {
        for (var i = 1; i <= 360; i++) {
            fd(m/360)
            rt(1)
        }
    }
    circle()
}