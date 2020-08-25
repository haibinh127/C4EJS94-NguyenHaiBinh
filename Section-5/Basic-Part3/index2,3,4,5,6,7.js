let inventorybyBrand = {
    asus = [
        {

            name: 'Asus Zenbook',

            brand: 'Asus',

            price: 20000,

            quantity: 4,

        }
    ],
    dell = [
        {

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
    hp = [
        {

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
if(x=="dell"){
    alert(`There are ${inventorybyBrand['dell'].length} generations in inventory`)
};
