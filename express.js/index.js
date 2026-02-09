const express=require("express");
const app=express()
const PORT=8000;
const students={
    id:1,name:"Madhav",branch:"cse",
    id:2,name:"AMAN",branch:"cse",
    id:3,name:"TARUN",branch:"cse",
}
app.get("/",(err,res)=>{
    res.send("welcome to home page");
})
app.get("/user",(err,res)=>{
    res.send("user page");
})
app.get("/students",(req,res)=>{
    res.json(students)
});
app.get("/students/:id",(req,res)=>{
    res.send("")
});
app.get("/students/search",(req,res)=>{
    const searchQuery=req.query.search;
    console.log(res.query)
});
app.listen(PORT,()=>{
    console.log('Example app listening at localhost8000')
});