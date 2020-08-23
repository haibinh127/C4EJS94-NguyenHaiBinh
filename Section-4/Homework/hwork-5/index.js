let products = {
    name: ["Xiaomi portable charger 20000mah", "Vsmart Active 1", "Iphone X", "Samsung Galaxy A9 "],
    brand: ["Xiaomi", "Vsmart", "Apple", "Samsung"],
    price: ["428", "5487", "21490", "8490"],
    color: ["White", "Black", "Gray", "Blue"],
    category: ["charger", "phone", "phone", "phone"],
    providers: ["Phukienzero  Dientuccc", "Tgdd  Ddghn  Vhstore", "Tgdd", "Tgdd"]
};
for (let i = 0; i < products['name'].length; i++) {
    console.log("------------------------");
    console.log(`Name: ${products.name[i]} `);
    console.log(`Price: ${products.price[i]} `);
};
for (let j = 0; j < products['name'].length; j++) {
    console.log("------------------------");
    console.log(`#${j + 1} Name: ${products.name[j]} `);
    console.log(` Price: ${products.price[j]} `);
};
while (true) {
    k = Number(prompt("Enter product position:"))
    console.log(`Product at position ${k} is: `)
    console.log(`Name: ${products.name[k - 1]} `);
    console.log(`Brand: ${products.brand[k - 1]} `);
    console.log(`Price: ${products.price[k - 1]} `);
    console.log(`Color: ${products.color[k - 1]} `);
    console.log(`Category: ${products.category[k - 1]} `);
    console.log(`Providers: ${products.providers[k - 1]}`);
    break;
};
console.log("------------------------");
while (true) {
    l = String(prompt("Enter your category"));
    if (l == "charger") {
        console.log(`Name: ${products.name[0]} `);
        console.log(`Price: ${products.price[0]} `);
    } else {
        for (let i = 1; i < products['name'].length; i++) {
            console.log("------------------------");
            console.log(`Name: ${products.name[i]} `);
            console.log(`Price: ${products.price[i]} `);
        }
    } break;
};
console.log("------------------------");
g = String(prompt("Enter your provider:"));
if (g == "Tgdd") {
    for (let b = 1; b < products['name'].length; b++) {
        console.log(`Name: ${products.name[b]} `);
        console.log(`Brand: ${products.brand[b]} `);
        console.log(`Price: ${products.price[b]} `);
        console.log(`Color: ${products.color[b]} `);
        console.log(`Category: ${products.category[b]} `);
        console.log(`Providers: ${products.providers[b]}`);
        console.log("------------------------");
    }
}
if (g == "VhStore") {
    console.log(`Name: ${products.name[1]} `);
    console.log(`Brand: ${products.brand[1]}`);
    console.log(`Price: ${products.price[1]} `);
    console.log(`Color: ${products.color[1]} `);
    console.log(`Category: ${products.category[1]} `);
    console.log(`Providers: ${products.providers[1]}`);
    console.log("------------------------");
} else if (g == "Phukienzero") {
    console.log(`Name: ${products.name[0]} `);
    console.log(`Brand: ${products.brand[0]} `);
    console.log(`Price: ${products.price[0]} `);
    console.log(`Color: ${products.color[0]} `);
    console.log(`Category: ${products.category[0]} `);
    console.log(`Providers: ${products.providers[0]}`);
    console.log("------------------------");
} else if (g == "Dientucc") {
    console.log(`Name: ${products.name[0]} `);
    console.log(`Brand: ${products.brand[0]} `);
    console.log(`Price: ${products.price[0]} `);
    console.log(`Color: ${products.color[0]} `);
    console.log(`Category: ${products.category[0]} `);
    console.log(`Providers: ${products.providers[0]}`);
    console.log("------------------------");
} else if (g == "Ddghn") {
    console.log(`Name: ${products.name[1]} `);
    console.log(`Brand: ${products.brand[1]}`);
    console.log(`Price: ${products.price[1]} `);
    console.log(`Color: ${products.color[1]} `);
    console.log(`Category: ${products.category[1]} `);
    console.log(`Providers: ${products.providers[1]}`);
    console.log("------------------------");
};
