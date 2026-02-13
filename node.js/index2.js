const fs=require('fs');
const http=require('http');
const url=require('url');
/*const server=http.createServer(req,res=>{
    const timestamp=new Date().toLocaleString();
    const log=`${"user is requested at:",  ,"for request:"`${}`;
    fs.appendFile("./server_log.txt",log(),(err,data)=>{
        if(err){
            console.log("Error");
        }
        else{
            console.log("log generated");
        }
    })

})*/