const express=require("express");
const app=express();
const PORT=4000;
app.use(express.static("public"));
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/form.html");

});
app.listen(PORT,()=>{
    console.log(`SERVER RUNNING ON http://localhost:${PORT}`);
});