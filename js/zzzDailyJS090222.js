"use strict";
$(document).ready(function() {
    console.log("hello 2nd of September");
    fetch(GLITCH_MOVIE_URL).then(res => res.json()).then(movies => {
        movies.forEach(movie => {
            document.getElementById("displayMain").innerHTML += `<div>
<h1>Title: ${movie.title}</h1>
<p>${movie.plot}</p>

</div>`;
        })
    });


    // end jquery
})    ;