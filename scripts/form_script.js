

console.log('Poczatek');

url = 'http://localhost:8080/'


$('.btn_movie_form').click(function(){
    var input_category = document.getElementById('category').value;
    var input_start = document.getElementById('start').value;
    var input_end = document.getElementById('end').value;
    var input_rate = document.getElementById('rate').value;
    var input_country = document.getElementById('country').value;

    console.log(input_category);
    console.log(input_start);
    console.log(input_end);
    console.log(input_rate);
    console.log(input_country);

    var yearst=[input_start, input_end];
    data = {
        genres: input_category.toLowerCase(),
        years: input_start + ', ' + input_end,
        "rate": input_rate,
        "countries": input_country
    }

    $.ajax({
        type: 'get',
        url: url,
        data: data,
        success: function(result){
            console.log(result)
            localStorage.setItem("movies", JSON.stringify(result))
            window.location = ('../templates/list_movie.html')
        },
        error: function(error){
            console.log(error) 
            window.location = ('test.html')
       
        }
    })
})

console.log('Koniec');