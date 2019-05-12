window.onload = load;

url = 'http://localhost:8080/get_pair'

url_post = 'http://localhost:8080/send_pair'

get_data;

function load()
{


    $.get(url, function(data, status){

        console.log(data)

        get_data=data;

        if(data.key==null){
            window.location = ('../templates/list_movie.html');
        }
        document.getElementById("title1").innerHTML = data.value.key.title;
        document.getElementById("title2").innerHTML = data.value.value.title;

        document.getElementById("description1").innerHTML = data.value.key.description;
        document.getElementById("description2").innerHTML = data.value.value.description;

        document.getElementById("img1").src = data.value.key.movie_img_url;
        document.getElementById("img2").src = data.value.value.movie_img_url;
    })

}

function sendMovie1(){

    console.log(get_data.key);
    console.log(get_data.value.key.title);

    data1 = {
        "selected_movie": get_data.value.key.id,
        "not_wanted_movie": get_data.value.value.id,
        "intensity": document.getElementById("intensity").value,
        "criteria": get_data.key
    }

    $.ajax({
        type: 'post',
        url: url_post,
        data: data1,
        success: function(){
            console.log("succes");
            //localStorage.setItem("movies", JSON.stringify(result))
            window.location = ('../templates/pair_compare.html')
        },
        error: function(error){
            console.log("errror wtf");
            console.log(error) 
            // window.location = ('test.html')
       
        }
    })

    
}

function sendMovie2(){

    console.log(get_data.key);
    console.log(get_data.value.value.title);

    data2 = {
        "selected_movie": get_data.value.value.id,
        "not_wanted_movie": get_data.value.key.id,
        "intensity": 5,
        "criteria": get_data.key
    }

    $.ajax({
        type: 'post',
        url: url_post,
        data: data2,
        success: function(){
            console.log("succes");
            //localStorage.setItem("movies", JSON.stringify(result))
            window.location = ('../templates/pair_compare.html')
        },
        error: function(error){
            console.log("errror wtf");
            console.log(error) 
            // window.location = ('test.html')
       
        }
    })
}