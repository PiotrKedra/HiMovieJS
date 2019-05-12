function generateDynamicTable(){

    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET","http://localhost:8080/pablito",false);
    Httpreq.send(null);
    var movies = JSON.parse(Httpreq.responseText)




    var noOfMovies = movies.length;

    if(noOfMovies>0){
        // CREATE DYNAMIC TABLE AND SET ATTRIBUTES.
        var table = document.createElement("table");
        table.style.width = '50%';
        table.setAttribute('border', '1');
        table.setAttribute('cellspacing', '0');
        table.setAttribute('cellpadding', '5');
        var col = []; // pusta tabela
        for( var i=0;i< noOfMovies; i++){
            for (var key in movies[i]){
                if (col.indexOf(key)=== -1){
                    col.push(key);
                }
            }
        }

        var tHead = document.createElement("thead");

        var hRow = document.createElement("tr");

        for( var i=0; i< col.length; i++){
            var th = document.createElement("th");
            th.innerHTML = col[i];
            hRow.appendChild(th);
        }
        tHead.appendChild(hRow);
        table.appendChild(tHead);


        var tBody = document.createElement("tbody");

        for (var i = 0; i < noOfMovies; i++) {

            var bRow = document.createElement("tr"); // CREATE ROW FOR EACH RECORD .


            for (var j = 0; j < col.length; j++) {
                var td = document.createElement("td");
                td.innerHTML = movies[i][col[j]];
                bRow.appendChild(td);
            }
            tBody.appendChild(bRow)

        }
        table.appendChild(tBody);

        var divContainer = document.getElementById("movies");
        divContainer.innerHTML = "";
        divContainer.appendChild(table);

    }
}


