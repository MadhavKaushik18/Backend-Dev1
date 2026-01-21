    const fs=require("fs");
    fs.mkdir("newdirectory",(err)=>{
        if(err)return;
        console.log("Directory created");
    });
    fs.mkdir("folder/folder1/folder2",{recursive:true},(err)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log("directory is created");
    })
    fs.readdir("newdirectory",(err,files)=>{
        if(err){
            console.log(err);return
        }
        else{
            console.log("Files:",files);
        }
    })
    // fs.rmdir("newdirectory",(err)=>{
    //         if(err){
    //         console.log(err);return
    //     }
    //     console.log("directory removed");
    // })
    fs.rm("newdirectory",(err)=>{
        if(err){
            console.log(err);return
        }
        console.log("directory removed");
    })