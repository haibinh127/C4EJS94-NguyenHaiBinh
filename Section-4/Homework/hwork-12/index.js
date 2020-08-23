const cmds = [
    {
        shape: 'circle',
        x: 0,
        y: -20,
        radius: 60,
    },
    {
        shape: 'circle',
        x: 0,
        y: 80,
        radius: 40,
    },
    {
        shape: 'circle',
        x: -75,
        y: 10,
        radius: 20,
    },
    {
        shape: 'circle',
        x: 75,
        y: 10,
        radius: 20,
    },
    {
        shape: 'square',
        x: -65,
        y: -100,
        width: 30,
    },
    {
        shape: 'square',
        x: 38,
        y: -100,
        width: 30,
    },

    {
        shape: 'rect',
        x: -30,
        y: 80,
        width: 20,
        height: 4
    },
    {
        shape: 'rect',
        x: 10,
        y: 80,
        width: 20,
        height: 4
    },
    {
        shape: 'rect',
        x: -10,
        y: 50,
        width: 20,
        height: 6
    },
    {
        shape: 'square',
        x: 500,
        y: 500,
        width: 20,
    },
];
for (let i = 0; i < cmds.length; i++) {
    if (cmds[i].shape == 'square') {
        penup();
        rt(90);
        fd(cmds[i].x);
        rt(270);
        fd(cmds[i].y)
        pendown();
        for (let j = 0; j < 4; j++) {
            fd(cmds[i].width);
            rt(90);
        }
        home();
    } else if (cmds[i].shape == 'rect') {
        penup();
        rt(90);
        fd(cmds[i].x);
        rt(270);
        fd(cmds[i].y)
        pendown();
        for (let j = 0; j < 2; j++) {
            fd(cmds[i].height);
            rt(90);
            fd(cmds[i].width);
            rt(90);
        }
        home();
    } else {
        penup();
        rt(90);
        fd(cmds[i].x);
        rt(270);
        fd(cmds[i].y);
        pendown();
        for (var n = 1; n <= 360; n++) {
            fd(cmds[i].radius / 360)
            rt(1)
        }
    }
}