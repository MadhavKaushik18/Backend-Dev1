const fs=require("fs");
const path=require("path");
const { CLIENT_RENEG_LIMIT } = require("tls");
const inputFilePath=path.join(__dirname,"input.txt")
const outputFilePath=path.join(__dirname,"output.txt")
const readStream=fs.createReadStream(inputFilePath,"utf-8")
// const writeStream=fs.createWriteStream(outputFilePath)

readStream.on("data", (chunk)=>{
    console.log(chunk);
})
