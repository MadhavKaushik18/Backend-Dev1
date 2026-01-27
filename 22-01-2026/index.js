const fs=require("fs");
const path=require("path");
const { CLIENT_RENEG_LIMIT } = require("tls");
const inputFilePath=path.join(__dirname,"input.txt")
const outputFilePath=path.join(__dirname,"output.txt")
//const readStream=fs.createReadStream(inputFilePath)
// const writeStream=fs.createWriteStream(outputFilePath)
fs.readFile("./22-01-2026/input.txt",(err)=>{
    if(err){
        console.log(err);
    }
})
/*readStream.on("data", (chunk)=>{
    console.log("data is reading in chunks",chunk);
})*/
