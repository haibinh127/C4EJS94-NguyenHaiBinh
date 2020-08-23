const circle = {
    shape: 'circle',
    x: 100,
    y: 50,
    radius: 30,
};
penup();
rt(90);
fd(circle.x);
rt(270);
fd(circle.y);
pendown();
function circle1() {
    for (var i = 1; i <= 360; i++) {
        fd(circle.radius / 360)
        rt(1)
    }
}
circle1()