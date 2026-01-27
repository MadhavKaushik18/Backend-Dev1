    const http = require("http");
    const url = require("url");
    const fs = require("fs");
    
    const server = http.createServer((req, res) => {
    if (req.url.startsWith("/product")) {
        const parsedUrl = url.parse(req.url, true);
        const { name, price, discount } = parsedUrl.query;
        const originalPrice = Number(price);
        const discountPercent = Number(discount);
        
        const discountAmount = (originalPrice * discountPercent) / 100;
        const finalPrice = originalPrice - discountAmount;
        
        const logData = `Product: ${name}, Price: ${originalPrice}, Discount: ${discountPercent}%, Final Price: ${finalPrice}\n`;
        fs.appendFile("searches.txt", logData, (err) => {
        if (err) console.log("Error writing file");
        });
        
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(`
        <html>
            <head>
            <title>Product Search</title>
            <style>
                body {
                font-family: Arial, sans-serif;
                background-color: #f4f6f8;
                padding: 40px;
                }
                .card {
                background: white;
                padding: 25px;
                width: 400px;
                margin: auto;
                border-radius: 10px;
                box-shadow: 0 4px 10px rgba(0,0,0,0.1);
                }
                h2 {
                color: #333;
                text-align: center;
                }
                p {
                font-size: 16px;
                color: #555;
                }
                .final {
                font-size: 18px;
                font-weight: bold;
                color: green;
                }
            </style>
            </head>
            <body>
            <div class="card">
                <h2>Product Details</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Original Price:</strong> ₹${originalPrice}</p>
                <p><strong>Discount:</strong> ${discountPercent}%</p>
                <p class="final">Final Price: ₹${finalPrice}</p>
            </div>
            </body>
        </html>
        `);
    }
    });
    
    server.listen(8000, () => {
    console.log("Server running on http://localhost:8000");
    });
