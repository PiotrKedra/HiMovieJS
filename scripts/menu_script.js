

function check(){

    if(localStorage.getItem("token").length < 5) {
        document.getElementById("listed_movies").style.visibility = "hidden;";
    }else{}

}
