// method = POST
path = "http://localhost:8080/users/sign-up";

// body =  {
//     "username": "nazwa",
//     "password": "haslo"
// }

function formValidation(){

    var user = document.getElementById("registration_user").value;
    var password = document.getElementById("registration_pwd").value;
    var password2 = document.getElementById("registration_pwd2").value;




    if(password === password2 && isNaN(user[0]) && user.length>5 && password.length>6){


        // userJSON = JSON.parse(document.getElementById("registration_user").value);
        // passwordJSON = JSON.parse(document.getElementById("registration_pwd").value);
        account = {
            "username": user,
            "password": password
        }
        $.ajax({
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            dataType: 'json',
            method: 'POST',
            url: path,
            data: JSON.stringify(account),
            success: function(result){
                console.log(result);
                setTimeout(function() {
                    document.location.href = "login_page.html";
                }, 3000);
                document.getElementById("pwd").innerHTML = "Rejestracja udana! Przekierowanie do logowania";
            },
            error: function(error) {
                console.log("errror w dupe");
                console.log(error)
                console.log(account[0].username);
                document.getElementById("pwd").innerHTML = "Błąd ze strony serwera. Przepraszamy!";
            }
        })


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