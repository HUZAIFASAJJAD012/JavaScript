//template literals 


let Name = "huzaifa";

let age=20;
 

let text =`my name is ${Name}  and my age is ${age}` 



console.log(text);


// local string 

let a=23203392.0;

let b=0.20;

let mynum=a.toLocaleString("en-US",{style:"currency",currency:"PKR"});
let mynum2=a.toLocaleString("hi-IN");
let num3=b.toLocaleString(undefined,{style:"unit",unit:"celsius"});
console.log(mynum);
console.log(mynum2);
console.log(num3);

