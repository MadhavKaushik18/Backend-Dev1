//const {add,remove,area}=require("./math");

//console.log(add(1,4),remove(1,5),area(5))
const fs=require("fs");
fs.writeFileSync("./test.txt","this is  file content")
const file=fs.readFileSync("test.txt","utf-8")

const asyncfile=fs.readFile("test.txt","utf-8",(err,data)=>{
    if(err){
        console.log("Error",err);
    }
    else{
        console.log("file resding succesfully",data);
    }
})
console.log(asyncfile)

