    const cart = [
    { item: "Laptop", price: 50000, quantity: 1, inStock: true },
    { item: "Mouse", price: 1500, quantity: 2, inStock: true },
    { item: "Keyboard", price: 3000, quantity: 1, inStock: false }
    ];


    const allAvailable = cart.every(product => product.inStock);

    console.log(allAvailable ? "Ready to Ship" : "Wait");

    const outOfStock = cart.filter(product => !product.inStock);

    console.log(outOfStock);
    const totalBill = outOfStock.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
    );

    console.log("Total Bill:", totalBill);


