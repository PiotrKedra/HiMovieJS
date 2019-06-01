


function generateDynamicTable() {

    var Httpreq = new XMLHttpRequest(); // a new request
    // Httpreq.open("GET", "http://localhost:8080/get_top10", false);
    // Httpreq.send(null);
    // var movies = JSON.parse(Httpreq.responseText)
    var movies = JSON.parse(localStorage.getItem("movies"));
    console.log(movies);

    var noOfMovies = movies.length;

    if (noOfMovies > 0) {
        // CREATE DYNAMIC TABLE AND SET ATTRIBUTES.
        var table = document.createElement("table");
        table.style.width = '50%';
        table.setAttribute('border', '1');
        table.setAttribute('cellspacing', '0');
        table.setAttribute('cellpadding', '5');
        var col = []; // pusta tabela
        for (var i = 0; i < noOfMovies; i++) {
            for (var key in movies[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
        }

        var tHead = document.createElement("thead");

        var hRow = document.createElement("tr");

        for (var i = 0; i < col.length-1; i++) {
            if(i>7 && i<12){

            }else {
                var th = document.createElement("th");
                th.innerHTML = col[i];
                hRow.appendChild(th);
                tHead.appendChild(hRow);
                table.appendChild(tHead);
            }
        }

        var tBody = document.createElement("tbody");

        for (var i = 0; i < noOfMovies; i++) {

            var bRow = document.createElement("tr"); // CREATE ROW FOR EACH RECORD .


            for (var j = 0; j < col.length-1; j++) {
                var td = document.createElement("td");

                if(j>7 && j<12){
                }
                else if(j===12) {
                    td.innerHTML = "<img class=\"card-img-top\" src=\"" + movies[i][col[j]] + "\" alt=\"Card image cap\" id=\"img1\">";
                    bRow.appendChild(td);
                }
                else {
                    td.innerHTML = movies[i][col[j]];
                    bRow.appendChild(td);
                }



            }
            tBody.appendChild(bRow)

        }
        table.appendChild(tBody);

        var divContainer = document.getElementById("movies");
        divContainer.innerHTML = "";
        divContainer.appendChild(table);

    }
}


