const http=require("http");
const url=require("url");
const server=http.createServer((req,res)=>{
    switch(req.url){
        case "/login":
            res.writeHead(200,{"content-type":"text/html"});
            res.end("<h1>Welcome to home page</h1>");
            break;
        case "/signup":
            res.writeHead(200,{"content-type":"text/html"});
            res.end("<h1> sign up</h1>");
            break;
        default:
            res.writeHead(404,{"content-type":"text/html"});
            res.end("<h1>page not found</h1>");
            break;

    }

})
server.listen(8000,()=>{
    console.log("server running at 8000");
})