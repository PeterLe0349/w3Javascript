"use strict";
$(document).ready(function() {
    console.log("hello the 17th");
    fetch(GLITCH_MOVIE_URL).then(res => res.json()).then( movies => {
        movies.forEach(function(movie) {
            document.getElementById("displayMain").innerHTML += `
            <div>
            <h4>Movie Name: ${movie.title}</h4>
            <p>The Plot: ${movie.plot}</p>
</div>`;
        })
    })


    // end jquery
})    ;