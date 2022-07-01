"use strict";
$(document).ready(function(){
    console.log("hi 24");
    fetch(GLITCH_MOVIE_URL)
        .then(res => res.json())
        .then(movies => {
            movies.forEach(movie => {
                document.getElementById('displayMain').innerHTML += `<h3>Title: ${movie.title}</h3>`;
            })
        })


    // end jquery
});