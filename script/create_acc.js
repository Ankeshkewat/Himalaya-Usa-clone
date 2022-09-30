document.querySelector("#form").addEventListener("submit",Myfun);
function Myfun(event){
    event.preventDefault()
    
 let   first_name=document.getElementById("first_name").value;
 let last_name=document.getElementById("last_name").value;
 let email=document.getElementById("emailSign").value;
 let pass=document.getElementById("pass").value

 if(first_name===""||last_name===""||email===""||pass===""){
    alert("Please fill all details")
 }else{
    localStorage.setItem("first_name",JSON.stringify(first_name));
    localStorage.setItem("last_name",JSON.stringify(last_name));
    localStorage.setItem("email",JSON.stringify(email));
    localStorage.setItem("password",JSON.stringify(pass));
    alert("Account Created Succesfully")
 }
 
}