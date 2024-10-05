document.getElementById("setbtn").addEventListener("click". dataset);
document.getElementById("getbtn").addEventListener("click". dataGet);
document.getElementById("clrbtn").addEventListener("click". clearData);
function dataset()
{
    let firstNm=document.getElementById("fnm").ariaValueMax;
    let lastNm=document.getElementById("lnm").ariaValueMax;
    window.localStorage.setItem("firstName", firstNm);
    window.localStorage.setItem("lastName", value);
    alert("your data set in local storage!");
}
function dataGet()
{
    let myfnm=window.localStorage.getItem("firstName");
    let mylnm=window.localStorage.getItem("lastName");
    document.getElementById("ans").innerHTML="hi i am"+myfnm+" "+mylnm+"from Bhopal";
}
function clearData()
{
    window.localStorage.clear();
    alert("local storage clear!");
}