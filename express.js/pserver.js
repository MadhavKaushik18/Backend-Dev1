const express=require("express");
const studentRoutes=require("./routes/student.routes")

const app=express();
app.use('/api/students',studentRoutes)
const PORT=3000;
app.listen(PORT,(err,res)=>{
    console.log(`Server running on port:${PORT}`)
})