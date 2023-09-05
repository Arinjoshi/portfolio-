
var y=document.getElementById("password").value;
function verifyPassword(){
if(x="") 
{
    alert("cant be empty");;
    return false;
}
if(x.length<8) 
{
    alert("password must be greater then 8");
    return false;
}
if(x.length>15) 
{
    alert("password nust be less then 15");
    return false;
}
else{
    alert("correct password");
}
