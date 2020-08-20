console.log("Welcome to Binh's shop");
while (true) {
    x = ((prompt("Welcome to my shop, how can i help you ? \n \
A: Show current items \n \
B: jacket \n \
C: shoes \n \
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
        };
        break;
    } else if (String(x) == String(B)) {
        alert('Thank you');
        break;
    } else if (String(x) == String(C)) {
        alert('Thank you');
        break;
    } else if (String(x) == String(D)) {
        alert('Thank you');
        break;
    } else {
        alert('This command is not supported')
    }
};