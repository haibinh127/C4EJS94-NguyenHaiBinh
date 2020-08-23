let pos = {
    x: 100,
    y: 50,
  width:20,
  };
  penup();
  rt(90);
  fd(pos.x);
  rt(270);
  fd(pos.y)
function square() {
  for (var i=1; i <= 4; i++) {
    pendown()
    fd(pos.width)
    lt(90)
  }
}
square()