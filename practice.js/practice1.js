const user={name:"Rahul",email:"rahul@gmail.com",password:"avsg123",phone:"7983965449",social:{fb:"https// fb.com",insta:"https://insta.com"

}}
//const username=user.name;
//const email=user.email;
//const {name,email,phone,social}=user;
//const updatedUser={...user,address:"MAthura"}
//console.log("updateData",updatedUser)
const user1={...user};
user1.name="Ajay";
var {password,...publicData}=user;
console.log("publicdata",publicData);
const numbers=[1,2,3,4,5];
const newnumbers=numbers.map((number)=>number*2);
console.log(newnumbers);
const sumofnumbers=numbers.reducez(sum,number,0) => sum+item,{
    console.log("",number)
}
