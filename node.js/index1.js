/*const logger=require("./logger")
logger.logactivity1("user logged in")*/
const http=require("http");
const server=http.createServer((req,res)=>{
   // res.writeHead(200,{"content-type":"application/json"});
    //res.end("Response is closed");
    const parsedurl=url.parse(req.url,true);
   
    switch(req.url){
        case "/":
            res.writeHead(200,{"content-type":"text/html"})
            res.end("<h1> welcome to home page</h1>")
            break;
        case "/about":
            res.writeHead(200,{"content-type":"text/html"})
            res.end("<h1> welcome to about page</h1>")
            break;
        default:
            res.writeHead(404,{"content-type":"text/html"})
           // res.end("<h1> page not found</h1")
            res.end({username:"",phone:""})


    }
})


