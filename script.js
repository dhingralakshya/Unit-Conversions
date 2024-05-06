function temperature()
{
    var c=document.getElementById("celsius").value;
    var f=(c*9/5)+32
    document.getElementById("fahrenheit").value=f;
}
function weight()
{
    var kg=document.getElementById("kilo").value;
    var p=kg*2.205
    document.getElementById("pounds").value=p;
}
function distance()
{
    var KM=document.getElementById("km").value;
    var m=KM/1.609
    document.getElementById("miles").value=m;
}