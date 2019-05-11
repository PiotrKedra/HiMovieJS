// const Http = new XMLHttpRequest();
// const url='https://jsonplaceholder.typicode.com/posts';

// Http.open("GET", url);
// Http.send();

// Http.onreadystatechange=(e)=>{
//     console.log(Http.responseText)
// }

$(document).ready(function(){
    
})

const url='https://jsonplaceholder.typicode.com/posts';

$('.btn').click(function(){
    $.ajax({
        url: url,
        type: "GET",
        success: function(result){
            console.log(result)
        },
        error: function(error){
            console.log('Error ${error}')
        }
    })
})

$('.btn2').click(function(){
    $.get(url, function(data, status){
        console.log(data)
    })
})

data = {
    ziom: 'mate',
    age: 1
}

$('.btn3').click(function(){
    $.post(url, data, function(data, status){
        console.log(`${data} and status is ${status}`)
    })
})

$.post(url, data, function(data, status){
    console.log(data)
})



