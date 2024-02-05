//your JS code here. If required.

let btn = document.getElementById("btn");

btn.addEventListener("click",(e)=>{
    let fname = document.getElementById("firstname").value;
    let lname= document.getElementById("lastname").value;
    let phno = document.getElementById("phonenumber").value;
    let email = document.getElementById("email").value;
    
    alert("First Name: "fname+" Last Name: "+lname+" Phone Numaber: "+phno+" Email ID: "+email)
});
