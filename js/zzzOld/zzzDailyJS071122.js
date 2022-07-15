"use strict";
$(document).ready(function(){
    console.log("hello 11");
    fetch(GLITCH_MOVIE_URL).then(res => res.json()).then(movies => {
        movies.forEach(movie => {
            document.getElementById("displayMain").innerHTML += `
            <div>
            <h3>Title: ${movie.title}</h3>
            <h4>Director: ${movie.director}</h4>
            <p>Plot: ${movie.plot}</p>
</div>`;
        })
    })


    // end jquery
})    ;