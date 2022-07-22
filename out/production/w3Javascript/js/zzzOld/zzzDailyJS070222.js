"use strict";
$(document).ready(function(){
    console.log("hello 2 of July");
    fetch(GLITCH_MOVIE_URL).then(res => res.json()).then(movies => {
        movies.forEach(movie => {
            document.getElementById("displayMain").innerHTML += `
            <div>
            <h4>Title: ${movie.title}</h4>
            <h5>Starring: ${movie.actors}</h5>
            <p>Plot: ${movie.plot}</p>
            
</div>`;
        })

    })


    // end jquery
})    ;