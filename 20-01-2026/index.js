
const fs=require("fs");


if(pathname==='/admin'){
    if(user==='admin' && pass==='1234'){
        fs.readFile("./admin_dashboard.html",(err,data)=>{
            if(err){
                console.log(err);
            }
            else{
                res.end()
            }
        })
    }
    else{
        res.writeHead(401,content-type)
    }
}
