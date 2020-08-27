let inventorybyBrand = {
    asus: [{

        name: 'Asus Zenbook',

        brand: 'Asus',

        price: 20000,

        quantity: 4,

    }],
    dell: [{

            name: 'Dell XPS 9370',

            price: 30000,

            brand: 'Dell',

            quantity: 1,

        },
        {

            name: 'Dell Inspiron 3567',

            price: 9300,

            brand: 'Dell',

            quantity: 12,

        },
        {
            name: 'Dell Latitude E5450',

            price: 8600,

            brand: 'Dell',

            quantity: 2,

        },
    ],
    hp: [{

            name: 'HP Envy 13aq',

            price: 21000,

            brand: 'HP',

            quantity: 5,

        },
        {

            name: 'HP Pavilion',

            brand: 'HP',

            price: 14000,

            quantity: 7,

        }
    ]
};
console.log(inventorybyBrand);
x = prompt("Which brand ?")
if (x == "dell") {
    sum = 0;
    position = 0;
    for (i = 0; i < inventorybyBrand['dell'].length; i++) {
        sum += inventorybyBrand['dell'][i].price * inventorybyBrand['dell'][i].quantity
    }
    for (n = 0; n < inventorybyBrand['dell'].length; n++) {
        alert(`There are ${inventorybyBrand['dell'].length} generations in inventory \n \
        ${inventorybyBrand['dell'][n].name} \n \
        ${inventorybyBrand['dell'][n+1].name} \n \
        ${inventorybyBrand['dell'][n+2].name} \n \
    With total value: ${sum.toLocaleString('vn-VN', { style: 'currency', currency: 'VND' })}`)
    }
}
if (x == "hp") {
    sum = 0;
    for (i = 0; i < inventorybyBrand['hp'].length; i++) {
        sum += inventorybyBrand['hp'][i].price * inventorybyBrand['hp'][i].quantity
    }
    alert(`There are ${inventorybyBrand['hp'].length} generations in inventory \n \
    ${inventorybyBrand['hp'][0].name} \n \
    ${inventorybyBrand['hp'][1].name} \n \  
    With total value: ${sum.toLocaleString('vn-VN', { style: 'currency', currency: 'VND' })}`)
};
if (x == "asus") {
    sum = 0;
    for (i = 0; i < inventorybyBrand['asus'].length; i++) {
        sum += inventorybyBrand['asus'][i].price * inventorybyBrand['asus'][i].quantity
    }
    alert(`There are ${inventorybyBrand['asus'].length} generation in inventory \n \
    ${inventorybyBrand['asus'][0].name} \n \ 
    With total value: ${sum.toLocaleString('vn-VN', { style: 'currency', currency: 'VND' })} `)
};