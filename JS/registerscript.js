function readValues(){
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var mobile=document.getElementById("mobile").value;
    var password=document.getElementById("password").value;
    var confPassword=document.getElementById("confPassword").value;

    if(confPassword==password){
        console.log(name);
        console.log(email);
        console.log(mobile);
        console.log(password);
        console.log(confPassword);
    }else{
        alert("Password and confirm password doesnt match");
    }
    
}