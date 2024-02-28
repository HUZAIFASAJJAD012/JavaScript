const randomnumber=Math.floor(Math.random()*10+1);
let guss=0;
document.getElementById("btn").onclick = function(){


let gusss=document.getElementById("userinput").value;

guss+=1;

if(randomnumber==gusss){


    alert(`${randomnumber} is the numer , it took you ${guss}`);
}
else if(gusss<randomnumber){


    alert("too small!");
}
else 


    alert("too larg!");
 

}