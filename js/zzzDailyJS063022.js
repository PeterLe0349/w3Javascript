"use strict";
$(document).ready(function(){
    console.log("hello last day of June");
    fetch(GLITCH_MOVIE_URL).then(res => res.json()).then(movies => {
        movies.forEach(movie => {
            document.getElementById("displayMain").innerHTML += `
            <div>
            <h4>Starring: ${movie.actors}</h4>
            <p>Plotline: ${movie.plot}</p>
            
</div>`;

        })

    })


    // end jquery
})    ;