let email=JSON.parse(localStorage.getItem("email"));

document.querySelector("form").addEventListener("submit",Reset_pass)

function Reset_pass(event){
    event.preventDefault();
    let em=document.getElementById("emailSign").value;
    let pass=document.getElementById("pass").value;
    if(email===em){
        localStorage.setItem("password",JSON.stringify(pass))
        alert("Changes Succesfully")
    }else{
        alert("Please enter correct email")
    }
}