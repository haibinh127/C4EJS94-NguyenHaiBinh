console.log("Welcome to Binh's shop");
while (true) {
    x = ((prompt("Welcome to my shop, how can i help you ? \n \
A: Show current items: \n \
B: Enter the name of new item: \n \
C: Update an item \n \
D: bag ")));
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
    };
    while (true) {
        x = ((prompt("Welcome to my shop, how can i help you ? \n \
A: Show current items: \n \
B: Enter the name of new item: \n \
C: Update an item \n \
D: bag ")));
        var A = "A";
        var B = "B";
        var C = "C";
        var D = "D";
        if (String(x) == String(B)) {
            var z = prompt('Enter the name of the new item:');
            alert("Done");
            items.push(z);
            console.log('The current items are:');
            for (i = 0; i < items.length; i++) {
                console.log(`${i + 1}` + "." + items[i]);
            }
        }else if (String(x) == String(C)) {
                var updateItem = prompt("Enter the position you want to update");
                var newName = prompt("Enter the new name")
                alert('Done');
                console.log('The current items are:');
                items[Number(updateItem)] = newName;
                for (i = 0; i < items.length; i++) {
                    console.log(`${i + 1}` + "." + items[i]);
                }
            } else if(String(x) == String(A)){
                console.log('The current items are:');
                for (i = 0; i < items.length; i++) {
                    console.log(`${i + 1}` + "." + items[i]);
            }
        }
    }
}
    //         else if (String(x) == String(D)) {
    //             alert('Thank you');
    //             break;
    //         } else {
    //             alert('This command is not supported')
    //         }
    //     }
    // };