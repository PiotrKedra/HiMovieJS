$(document).ready(function(){
    console.log('start l')
    var movies = JSON.parse(localStorage.getItem('movies'));

    console.log(movies);

    var listItem = $('#movieList').html();

    dataObject.forEach(buildNewList);

    function buildNewList(item, index){
        var listItemTitle = $('.title', listItem);
        listItemTitle.html(item.title);
    }
})


