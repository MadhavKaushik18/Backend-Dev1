const fs=require("fs").promises;
//readstudents fromfile
const readStudentsFromFile=async()=>{
    try{
        const fileData=await fs.readFile("./students.json","utf-8")
        return JSON.parse(fileData||"[]");
    }
    catch(e){
        console.log(e.message);
    }
};

// Write students to file
const writeStudentsToFile = async (students) => {
    try {
        await fs.writeFile(
            "./students.json",
            JSON.stringify(students, null, 2) // pretty format
        );
    } catch (e) {
        console.log("Error writing file:", e.message);
    }
};

// Export functions
module.exports = {
    readStudentsFromFile,
    writeStudentsToFile
};