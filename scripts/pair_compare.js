window.onload = load;

url = 'http://localhost:8080/get_pair'

url_post = 'http://localhost:8080/compare_result'

i = 0;

json = []

sendData = []

function displayMovie(firstMovie, secondMovie){
    document.getElementById("title1").innerHTML = firstMovie.title;
    document.getElementById("title2").innerHTML = secondMovie.title;

    if(firstMovie.description.length<10){
        document.getElementById("description1").innerHTML = "Brak opisu";
    }else {
        document.getElementById("description1").innerHTML = firstMovie.description;
    }
    if(secondMovie.description.length<10){
        document.getElementById("description2").innerHTML = "Brak opisu";
    }else {
        document.getElementById("description2").innerHTML = secondMovie.description;
    }

    if(firstMovie.movie_img_url.length<10){
        document.getElementById("img1desc").innerHTML = "Brak zdjęcia";
    }else {
        document.getElementById("img1").src = firstMovie.movie_img_url;
    }

    if(secondMovie.movie_img_url.length<10){
        document.getElementById("img2desc").innerHTML = "Brak zdjęcia";
    }else {
        document.getElementById("img2").src = secondMovie.movie_img_url;
    }

}

function load()
{
    
    json = JSON.parse(localStorage.getItem("movies"));

    console.log(json);
    displayMovie(json[i].firstMovie, json[i].secondMovie);


}

function sendMovie1(){
    
    movie = JSON.parse(localStorage.getItem("movies"));
    pair = {
        "mainCriteria": getMainCriteria(),
        "pairCompareIntensity": document.getElementById("intensity").value, //todo
        "selected": movie[i].first,
        "notSelected": movie[i].second
    }

    sendData.push(pair);


    i = i+1;

    if (i>= json.length){
        sendD();
        //window.location = ('../templates/list_movie.html');
    }else{
        displayMovie(json[i].firstMovie, json[i].secondMovie);
    }
}

function sendMovie2(){
    
    movie = JSON.parse(localStorage.getItem("movies"));
    pair = {
        "mainCriteria": getMainCriteria(),
        "pairCompareIntensity": document.getElementById("intensity").value,
        "selected": movie[i].second,
        "notSelected": movie[i].first
    }

    sendData.push(pair);

    i = i+1;

    if (i>= json.length){
        sendD();
        //window.location = ('../templates/list_movie.html');
    }else{
        displayMovie(json[i].firstMovie, json[i].secondMovie);
    }
}

function getMainCriteria(){
    if(json[i].first[0]=="_"){
        return 'YEAR';
    }else{
        return 'GENRE';
    }
}

function sendD() {

    intensity_wrapper = {
        "compareIntensities": sendData,
        "genreIntensity": localStorage.getItem("genre_intensity"),
        "yearIntensity": localStorage.getItem("year_intensity"),
        "rateIntensity": localStorage.getItem("rate_intensity")
    }

    console.log(intensity_wrapper);


    $.ajax({
        headers: { 
            'Accept': 'application/json',
            'Content-Type': 'application/json' 
        },
        dataType: 'json',
        method: 'POST',
        url: 'http://localhost:8080/compare_result',
        data: JSON.stringify(intensity_wrapper),
        success: function(movies){
            console.log(movies);
            localStorage.setItem("movies", JSON.stringify(movies));
            window.location =  ('../templates/list_movie.html')

        },
        error: function(error){
            console.log("some error xd")
            console.log(error);
        }
    });
}