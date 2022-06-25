"use strict";
$(document).ready(function(){
    console.log("hello 25");
    fetch(GLITCH_MOVIE_URL).then(res => res.json()).then(movies => {
        movies.forEach(movie => {
            document.getElementById("displayMain").innerHTML += `<div>
<h4>Title: ${movie.title}</h4>
<p>Plot: ${movie.plot}</p>
</div>`;
        } )
    })



    // end jquery
});