document.querySelector("form").addEventListener("submit",Login);

let email=JSON.parse(localStorage.getItem("email"));
let password=JSON.parse(localStorage.getItem("password"));


function Login(event){
event.preventDefault();
let em=document.getElementById("emailSign").value;
let pass=document.getElementById("password").value;
if(email===em && password===pass){
    alert("Login Success")
}else{
    alert("Wrong Password or Wrong Email")
}
}