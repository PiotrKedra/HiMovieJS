
var  movies_seen;

function generateDynamicTable() {
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization' : 'Bearer ' + localStorage.getItem("token")
        },
        dataType: 'json',
        method: 'GET',
        url: 'http://localhost:8080/auth',
        async: false,
        //data: JSON.stringify(intensity_wrapper),
        success: function(movies){
            console.log(movies);
            movies_seen =  movies;
            console.log(movies_seen);
        },
        error: function(error){
            console.log("some error xd")
            console.log(error);
        }
    });
    // for(var i=0; i<10000;i++){
    //     j = 10;
    // }
    var Httpreq = new XMLHttpRequest(); // a new request

    // Httpreq.open("GET", "http://localhost:8080/get_top10", false);
    // Httpreq.send(null);
    // var movies = JSON.parse(Httpreq.responseText)

    console.log(JSON.stringify(movies_seen));
    var noOfMovies = movies_seen.length;

    if (noOfMovies > 0) {
        // CREATE DYNAMIC TABLE AND SET ATTRIBUTES.
        var table = document.createElement("table");
        table.border ="border:1px white;";
        var col = []; // pusta tabela
        for (var i = 0; i < noOfMovies; i++) {
            for (var key in movies_seen[i]) {
                if (col.indexOf(key) === -1) {
                        col.push(key);
                    }
                }
            }
        console.log(col);
        var tHead = document.createElement("thead");

        var hRow = document.createElement("tr");
        var names = ["","Tytuł","Gatunek","Opis","Rok","Długość","Obsada"];
        for (var i = 0; i < names.length; i++) {
                var th = document.createElement("th");
                th.innerHTML = names[i];
                hRow.appendChild(th);
                tHead.appendChild(hRow);
                table.appendChild(tHead);

        }

        var tBody = document.createElement("tbody");

        for (var i = 0; i < noOfMovies; i++) {

            var bRow = document.createElement("tr"); // CREATE ROW FOR EACH RECORD .


            for (var j = 0; j < names.length; j++) {
                var td = document.createElement("td");


                if (j === 0) {
                    if (movies_seen[i][col[12]].length < 10) {
                        td.innerHTML = "Brak zdjęcia";
                        bRow.appendChild(td);
                    } else {
                        td.innerHTML = "<img class=\"card-img-top\" src=\"" + movies_seen[i][col[12]] + "\" alt=\"Card image cap\" id=\"img1\">";
                        bRow.appendChild(td);
                    }
                } else if (j === 1) {
                    if (movies_seen[i][col[1]] === "null") {
                        td.innerHTML = "Brak informacji";
                        bRow.appendChild(td);
                    } else {
                        td.innerHTML = movies_seen[i][col[1]];
                        bRow.appendChild(td);
                    }
                } else if(j===2){
                    var noOfGenres = movies_seen[i][col[8]].length;
                    var genres= "";
                    for(var k =0 ; k<noOfGenres;k++ ){
                        genres+=movies_seen[i][col[8]][k].name + "<br>";
                    }
                    if(noOfGenres===0){
                        td.innerHTML = "Brak informacji";
                        bRow.appendChild(td);
                    }else {
                        td.innerHTML = genres;
                        bRow.appendChild(td);
                    }
                } else if (j === 3) {
                    if (movies_seen[i][col[7]].length < 10) {
                        td.className = "opis";
                        td.innerHTML = "Brak informacji";
                        bRow.appendChild(td);
                    } else {
                        td.innerHTML = movies_seen[i][col[7]];
                        bRow.appendChild(td);
                    }
                } else if (j === 4) {
                    if (movies_seen[i][col[3]] === "null") {
                        td.innerHTML = "Brak informacji";
                        bRow.appendChild(td);
                    } else {
                        td.innerHTML = movies_seen[i][col[3]];
                        bRow.appendChild(td);
                    }
                }else if(j===5){
                    if (movies_seen[i][col[4]] === 0) {
                        td.innerHTML = "Brak informacji";
                        bRow.appendChild(td);
                    } else {
                        td.innerHTML = movies_seen[i][col[4]]+ " min";
                        bRow.appendChild(td);
                    }
                }else if(j===6){
                    var noOfActors = movies_seen[i][col[11]].length;
                    var actors= "";
                    for(var k =0 ; k<noOfActors;k++ ){
                        actors+=movies_seen[i][col[11]][k].name + "<br>";
                    }
                    if(noOfActors===0){
                        td.innerHTML = "Brak informacji";
                        bRow.appendChild(td);
                        
                    }else {
                        td.innerHTML = actors;
                        bRow.appendChild(td);

                    }
                    }

            }
            bRow.appendChild(td);
            console.log(bRow);
            tBody.appendChild(bRow)

        }
        table.appendChild(tBody);

        var divContainer = document.getElementById("movies_seen");
        divContainer.innerHTML = "";
        divContainer.appendChild(table);

    }
}

function sendInfo(){

}


