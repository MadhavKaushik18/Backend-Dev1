const fs=require("fs");
fs.copyFile("test.txt","dest.txt")

//fs.copyFileSync("test.txt","dest.txt");
fs.copyFile("test.txt","new_dest.txt",(err)=>{
    if(err){
        console.log("error while file is copied",err);
    }
    else{
        console.log("file is copied");
    }
})
//fs.copyFileSync("test.txt","dest.txt");
fs.unlinkSync("new_dest.txt");
fs.unlink("dest.txt",(err)=>{
    if(err){
        console.log("error while deleting file",err,err);
    }
    else{
        console.log("file is deleted");
    }
})
