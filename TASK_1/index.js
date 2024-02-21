console.log("my name is huzaifa");
// window.alert("love coding")
// comments


/*
this is a multi line comment 
*/

// {{{{variable }}}} 

//var variable we can access out side and aslo we can access inside the bracket brackets 
{
    var a=10;
    var b=20;
    console.log(b);

}
console.log(a);

// let variable cann't access out side the brackets 
{
    let  a=12;
    console.log(a);

}

//const variable cann't access out side the brackets  and also we cannot chane the value of the variable {
   {


    const  a=12;
    console.log(a);

}


{
    let fname="huzaifa"; // string
let age=21; // number 
let student=true; // boolean

age=age+1;

console.log("hello",fname);
console.log(age);
console.log(student);



document.getElementById("p1").innerHTML = "hello" + fname;
}

//arthmetic expression 
{

let  age=21;

age =age + 2;

a =age * 2;

console.log(age);
console.log(a);

}



//for saving username 
let username ;
document.getElementById("button").onclick=function(){

username=document.getElementById("Fname").value;

window.alert(username);
document.getElementById("changetext").innerHTML=username;
};