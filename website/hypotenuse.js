let a;
let b;
let c;

/*
a=window.prompt("Enter side A");
a=Number(a);

b=window.prompt("Enter side B");
b=Number(b);

c=Math.pow(a,2) + Math.pow(b,2);
c=Math.sqrt(c,2);

console.log("Side C :" ,c);
*/
document.getElementById("submitbutton").onclick=function(){

    a=document.getElementById("atextbox").value;
    a=Number(a);
    b=document.getElementById("btextbox").value;
    b=Number(b);
    c=Math.pow(a,2) + Math.pow(b,2);
    c=Math.sqrt(c,2);
   document.getElementById("cLabel").innerHTML="Side C :"+c;

}
