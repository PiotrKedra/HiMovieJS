

console.log('Poczatek');

url = 'http://localhost:8080/form'


$('.btn_movie_form').click(function(){
    var input_genre = document.getElementById('category').value;
    var input_start = document.getElementById('start').value;
    var input_end = document.getElementById('end').value;
    var input_rate = document.getElementById('rate').value;
    var input_country = document.getElementById('country').value;
    var input_genre_intensity = document.getElementById('category_intensity').value;
    var input_year_intensity = document.getElementById('year_intensity').value;
    var input_rate_intensity = document.getElementById('rate_intensity').value;

    console.log(input_genre);
    console.log(input_start);
    console.log(input_end);
    console.log(input_rate);
    console.log(input_country);
    console.log(input_genre_intensity);
    console.log(input_year_intensity);
    console.log(input_rate_intensity);

    var yearst=[input_start, input_end];
    data = {
        genres: input_genre,
        years: input_start + ', ' + input_end,
        "rate": input_rate,
        "countries": input_country,
        "genre_intensity": input_genre_intensity,
        "rate_intensity": input_rate_intensity,
        "year_intensity": input_year_intensity
    }

    $.ajax({
        type: 'post',
        url: url,
        data: data,
        success: function(){
            console.log("ddd");
            //localStorage.setItem("movies", JSON.stringify(result))
            window.location = ('../templates/pair_compare.html')
        },
        error: function(error){
            console.log("errror wtf");
            console.log(error) 
            // window.location = ('test.html')
       
        }
    })
})

console.log('Koniec');