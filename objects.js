const cars=[
    {
        name:"ferrari",
        price:10000,
        color:"ash"
    },
    {
        name:"bmw",
        price:10000,
        color:"white"
    },
    {
        name:"thar",
        price:150000,
        color:"black"
    }
];
    const expensiveCars = cars.filter(car => car.price > 10000);
    console.log(expensiveCars);

    