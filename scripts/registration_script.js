method = POST
path = "localhost:8080/users/sign-up"
consumes = application/json
body =  {
    "username": "nazwa",
    "password": "haslo"
}

function formValidation(){

    var user = document.getElementById("registration_user").value;
    var password = document.getElementById("registration_pwd").value;
    var password2 = document.getElementById("registration_pwd2").value;




    if(password === password2 && isNaN(user[0]) && user.length>5 && password.length>6){
        document.getElementById("pwd").innerHTML = "Rejestracja udana! Przekierowanie do logowania";

        userJSON = JSON.parse(document.getElementById("registration_user").value);
        passwordJSON = JSON.parse(document.getElementById("registration_pwd").value);
        pair = {
            "username": userJSON,
            "password": passwordJSON
        }
        sendData.push(pair);

        setTimeout(function() {
            document.location.href = "login_page.html";
        }, 3000);
    }

    if(password.length<7){
        document.getElementById("pwd").innerHTML = "Hasło musi mieć minimum 7 znaków";
    }

    if(password != password2){
        document.getElementById("pwd").innerHTML = "Hasła się różnią";
    }

    if(user.length < 6){
        document.getElementById("user").innerHTML = "Użytkownik musi mieć minimum 6 znaków";
    }
}