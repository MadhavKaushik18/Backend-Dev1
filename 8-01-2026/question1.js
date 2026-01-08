    function checkOrderStatus(orderId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        if (typeof orderId === "number") {
            resolve("Order Shipped");
        } else {
            reject("Invalid Order ID");
        }
        }, 1000);
    });
    }

    async function handleOrder(orderId) {
    try {
        const result = await checkOrderStatus(orderId);
        console.log(result);
    } catch (error) {
        console.log(error);
    }
    }


    handleOrder(101);
    handleOrder("ABC");
