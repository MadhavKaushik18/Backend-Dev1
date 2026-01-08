    function fetchUser(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
        resolve({ name: "Rahul", isPremium: true });
        }, 1000);
    });
    }

    function fetchOrders(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
        resolve([
            { item: "Laptop", price: 1000, status: "delivered" },
            { item: "Phone", price: 500, status: "pending" }
        ]);
        }, 2000);
    });
    }

    async function displayDashboard(id) {
    try {
        const user = await fetchUser(id);
        const orders = await fetchOrders(id);

        const deliveredOrders = orders.filter(
        order => order.status === "delivered"
        );

        const finalPrices = deliveredOrders.map(order =>
        user.isPremium ? order.price * 0.9 : order.price
        );

        const total = finalPrices.reduce((sum, price) => sum + price, 0);

        console.log(`Welcome ${user.name}`);
        console.log(`Total Amount (after discount): $${total}`);
    } catch (error) {
        console.log("Error:", error);
    }
    }

    displayDashboard(1);
