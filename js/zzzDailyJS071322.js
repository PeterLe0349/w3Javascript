"use strict";
$(document).ready(function(){
    console.log("hello 13th");
    fetch(GLITCH_MOVIE_URL).then(res => res.json()).then(movies => {
        movies.forEach(movie => {
            document.getElementById("displayMain").innerHTML += `
            <div>
            <h3>Title: ${movie.title}</h3>
            <h4>Plot: ${movie.plot}</h4>
</div>`;
        })
    })


    // end jquery
})    ;