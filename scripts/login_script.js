

function loginValidation() {
    var path = "http://localhost:8080/login";
    var xhr = new XMLHttpRequest();
    var tokenElement = document.getElementById('token')

    var user = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    account = {
        "username": user,
        "password": password
    }

        xhr.open('POST', path, true);
        xhr.setRequestHeader('Content-Type','application/json; charset=UTF-8');
        xhr.addEventListener('load',function(){
            var responseObject = JSON.parse(this.response);
            console.log(responseObject);
            if(responseObject.token) {
                localStorage.setItem("token", responseObject.token);
                document.location.href = "menu_page.html";
            }else{
                document.getElementById("comunicate").innerHTML = "Złe dane logowania";
            }
        });
        var sendObject = JSON.stringify({username: user, password: password});

        console.log('going to send', sendObject);
        xhr.send(sendObject);

}

//
//     $.ajax({
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         },
//         dataType: 'json',
//         method: 'POST',
//         url: path,
//         data: JSON.stringify(account),
//         // error: function (error) {
//         //     console.log("errror w dupe");
//         //     console.log(error.getResponseHeader("Authorization:"));
//         //     document.getElementById("communicate").innerHTML = "Błedne dane logowania";
//         // }
//
//     }).complete(function())
// }


// success: function(result){
//     console.log(result);
//     setTimeout(function() {
//         document.location.href = "movie_form.html";
//     }, 3000);
//     document.getElementById("communicate").innerHTML = "Logowanie udane! Trwa przekierowanie";
// },