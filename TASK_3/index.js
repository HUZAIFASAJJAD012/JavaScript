// math intransic object 
// let x =24.3;


// power=Math.pow(x,3);
// r=Math.round(power);
// f= Math.floor(power);
// window.alert(r);
// window.alert(f);



// let a=1;
// let b=2;
// let c=4;


// max=Math.max(a,b,c);
// min=Math.min(a,b,c);

// window.alert(max);
// window.alert(min);


// slove right angled triangle 

document.getElementById("button").onclick= function(){

a=document.getElementById("a").value;
b=document.getElementById("b").value;

c= Math.sqrt(Math.pow(a,2) + Math.pow(b,2 ));
window.alert(c);



}
var count =5;

document.getElementById("dec").onclick= function(){
count -=1;

document.getElementById("count").innerHTML =count;
    
    
    }


 

document.getElementById("add").onclick= function(){
count +=1;

document.getElementById("count").innerHTML =count;
    
    
    }


    
document.getElementById("reset").onclick= function(){
    
    count =5;
    document.getElementById("count").innerHTML =count;
        
        
        }