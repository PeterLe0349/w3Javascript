"use strict";
$(document).ready( () => {
    console.log("hello 13th");
    fetch(GLITCH_MOVIE_URL).then(res => res.json()).then(movies => {

        movies.forEach(movie => {
    document.getElementById("displayMain").innerHTML += `
    <div>
    <h1>title: ${movie.title}</h1>
    <p>${movie.plot}</p>
</div>`

        })


    })


    // end jquery
})    ;