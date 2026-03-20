const fs=require("fs").promises;
const db=require("../Modules/fileHandler");







const createStudent=async(req,res)=>{
    try{
        const{name,branch}=req.body;
        if(!name||!branch)return res.status(400).send("Details missing");
        //read the file first
        let existingStudents=await db.readStudentsFromFile();
        //if existingstudents is undefined/null,make it an empty array
        if(!existingStudents){
            existingStudents=[];
        }

    //create and push new student
    const newStudent={
        id:
    }

}}