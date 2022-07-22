"use strict";
$(document).ready(function(){
    console.log("hello the 7th");
    fetch(GLITCH_MOVIE_URL).then(res => res.json()).then(movies => {
        movies.forEach(movie => {
            document.getElementById("displayMain").innerHTML += `
            <div>
            <h4>Title: ${movie.title}</h4>
            <h6>Director: ${movie.director}</h6>
            <p>Plot: ${movie.plot}</p>
            
</div>`;
        })
    })


    // end jquery
})    ;