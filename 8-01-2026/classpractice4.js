//console.log("task1")
//let user;
//setTimeout(()=>{
  //  user={name:"abc",phone:"78326723",address:"Mathura"}
    //console.log("task2")
//},0);
//console.log(user)
//Promise.resolve(()=>console.log("task3"))
//console.log(user)
const fetchUser=(userId)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
    
        const users={1:{name:"raj",email:"raj@gmail.com",address:"Mathura"},2:{name:"Vishal",email:"vishal@gmail.com",Address:"Agra"}};
    const user=users[userId]
    if(user){
        resolve(user);
    }
    else{
        reject("user not found");
    }
},1000);
    });
};
fetchUser(1).then(user =>console.log(user))
.then((user)=>console.log(user))
//.catch((err)=>console.log(err))
const userData=async(userId)=>{
    try{
        const user=await fetchUser(userId);
        console.log("user data is fetched")
    }
    catch(e){
        console.log(e)

    }
}