window.onload = load;

url = 'http://localhost:8080/get_pair'

url_post = 'http://localhost:8080/compare_result'

i = 0;

json = []

sendData = []

function displayMovie(firstMovie, secondMovie){
    document.getElementById("title1").innerHTML = firstMovie.title;
    document.getElementById("title2").innerHTML = secondMovie.title;

    document.getElementById("description1").innerHTML = firstMovie.description;
    document.getElementById("description2").innerHTML = secondMovie.description;

    document.getElementById("img1").src = firstMovie.movie_img_url;
    document.getElementById("img2").src = secondMovie.movie_img_url;
}

function load()
{
    
    json = JSON.parse(localStorage.getItem("movies"));
    console.log(json);

    console.log(json[i].firstMovie);
    console.log(json[i].secondMovie);
    

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

    console.log(sendData);

    i = i+1;

    if (i>= json.length){
        console.log(sendData);
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
        "pairCompareIntensity": document.getElementById("intensity").value, //todo
        "selected": movie[i].second,
        "notSelected": movie[i].first
    }

    sendData.push(pair);

    console.log(sendData);

    i = i+1;

    if (i>= json.length){
        console.log(sendData);
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


    $.ajax({
        headers: { 
            'Accept': 'application/json',
            'Content-Type': 'application/json' 
        },
        dataType: 'json',
        method: 'POST',
        url: 'http://localhost:8080/compare_result',
        data: JSON.stringify({"compareIntensities": sendData}),
        success: function(movies){
            console.log(movies);
        },
        error: function(error){
            console.log("some error xd")
            console.log(error);
        }
    });
}