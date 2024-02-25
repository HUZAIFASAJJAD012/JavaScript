

// for loop 

//  for(let i=0;i<10;i++){

// if(i==3  )
// {
// continue;

// }
// console.log(i);
//  }
let s=window.prompt("enter symbol ")
let a=window.prompt("enter row");
let b=window.prompt("enter col");


for(let i=0;i<=a;i++){


    for(let j=0;j<=b;j++){


document.getElementById("aa").innerHTML+=s;
    
    }

    document.getElementById("aa").innerHTML+="<br>";

}