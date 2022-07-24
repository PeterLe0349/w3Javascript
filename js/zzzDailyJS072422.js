"use strict";
$(document).ready(function(){
    console.log("hello 24th");
    fetch(GLITCH_MOVIE_URL).then(res =>  res.json()).then(movies => {
        movies.forEach(movie => {
            document.getElementById("displayMain").innerHTML += `<div>
<h1>Title: ${movie.title}</h1>
<p>Plot: ${movie.plot}</p>
</div>`


        })

    });

    // end jquery
})    ;