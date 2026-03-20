const express=require("express");
const app=express();
const router=express.Router();

const{getAllStudents}=require("../controller/Students.controller");
router.get("/",getAllStudents)
router.post("/",createStudent)

module.exports=router;