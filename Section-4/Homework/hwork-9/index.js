let pos = {
    x: 100,
    y: 50,
  width:20,
  height:40,
  };
  penup();
  rt(90);
  fd(pos.x);
  rt(270);
  fd(pos.y)
function retangle() {
  for (var i=1; i <= 4; i++) {
    pendown()
    fd(pos.height)
    rt(90)
    fd(pos.width)
    lt(270)
  }
}
retangle()