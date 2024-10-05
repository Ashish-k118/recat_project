document.getElementById("btn1").addEventListener("click", myStart);
document.getElementById("btn2").addEventListener("click", myStop);
document.getElementById("btn3").addEventListener("click", myClear);

var myInt;

function myCount()
{
    let myval=number(document.getElementById("ans").innerHTML);
    myval++;
    document.getAnimations("ans").innerHTML=myval;
}

function myStart()
{
    myInt=setInterval(myCount, 1000);
}

function myStop()
{
    clearInterval(myInt);
}

function myClear()
{
    document.getElementById("ans").innerHTML=0;
}