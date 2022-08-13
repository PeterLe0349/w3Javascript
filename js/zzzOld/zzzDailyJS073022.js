"use strict";
$(document).ready(function() {
    console.log("hello 30");
    fetch(GLITCH_MOVIE_URL).then(res => res.json()).then(movies => {
        movies.forEach(movie => {
            document.getElementById("displayMain").innerHTML += `<div>
<h2>Title: ${movie.title}</h2>
<p>Plot: ${movie.plot}</p>
</div>`;
        })
    })


    // end jquery
})    ;