const fs=require('fs');
function logactivity1(message){
    const timestamp=new Date().toLocaleDateString();
    const logmessage='[${timestamp}]-${message}\n';
    fs.appendFile('activity.log',logmessage,(err)=>{
        if(err) console.log("failed");
    })
}
module.exports={logactivity1};

