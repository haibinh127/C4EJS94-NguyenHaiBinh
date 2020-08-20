console.log("Welcome to Binh's shop");
while (true) {
    x = ((prompt("Welcome to my shop, how can i help you ? \n \
A: Show current items: \n \
B: Enter the name of new item: \n \
C: Update an item \n \
D: Delete an item ")));
    var A = "A";
    var B = "B";
    var C = "C";
    var D = "D";
    var items = ["Jeans", "T-Shirt", "Socks"]
    if (String(x) == String(A)) {
        console.log('The current items are:');
        for (i = 0; i < items.length; i++) {
            console.log(`${i + 1}` + "." + items[i]);
        }
        break;
    }
    else if (String(x) == String(B)) {
        z = prompt('Enter the name of the new item');
        alert("Done");
        x = ((prompt("Welcome to my shop, how can i help you ? \n \
A: Show current items: \n \
B: Enter the name of new item: \n \
C: Update an item \n \
D: Delete an item ")));
        var A = "A";
        var B = "B";
        var C = "C";
        var D = "D";
        var items = ["Jeans", "T-Shirt", "Socks"]
        if (String(x) == String(A)) {
            items.push(z);
            console.log('The current items are:');
            for (i = 0; i < items.length; i++) {
                console.log(`${i + 1}` + "." + items[i]);
            };
        }
    } else if (String(x) == String(C)) {
        var y = prompt("Enter the position you want to update");
        y = Number(y);
        var o = prompt("Enter the new name");
        items.push(z);
        items[(y - 1), 0] = o;
        var h = items.length;
        alert('Done');
        x = ((prompt("Welcome to my shop, how can i help you ? \n \
A: Show current items: \n \
B: Enter the name of new item: \n \
C: Update an item \n \
D: Delete an item ")));
        var A = "A";
        var B = "B";
        var C = "C";
        var D = "D";
        if (String(x) == String(A)) {
            console.log('The current items are:');
            for (i = 0; i < h; i++) {
                console.log(`${i + 1}` + "." + items[i]);
            };
        }
    } else if (String(x) == String(D)) {
        p = prompt("Enter the position you want to delete");
        p = Number(p);
        alert('Done');
        x = ((prompt("Welcome to my shop, how can i help you ? \n \
    A: Show current items: \n \
    B: Enter the name of new item: \n \
    C: Update an item \n \
    D: Delete an item ")));
        if (String(x) == String(A)) {
            items.splice((p - 1), 1);
            console.log('The current items are:');
            for (i = 0; i < items.length; i++) {
                console.log(`${i + 1}` + "." + items[i]);
            };
        }
        break;
    } else {
        alert('This command is not supported')
    }
};