"use strict";
$(document).ready(function(){
    console.log("hello 9th!");
    fetch((GLITCH_MOVIE_URL)).then(res => res.json()).then( movies => {
        movies.forEach( movie => {
            document.getElementById("displayMain").innerHTML += `
            <div>
            <h4>Title: ${movie.title}</h4>
            <h6>Actors: ${movie.actors}</h6>
            <p>Plot 9: ${movie.plot}</p>
</div>`;
        })
    })


    // end jquery
})    ;