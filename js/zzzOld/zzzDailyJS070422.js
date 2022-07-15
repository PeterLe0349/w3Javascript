"use strict";
$(document).ready(function(){
    console.log("happy 4th of july!");
    fetch((GLITCH_MOVIE_URL)).then(res => res.json()).then(movies => {
        movies.forEach(movie => {
            document.getElementById('displayMain').innerHTML += `
            <div>
            <h3>Title: ${movie.title}</h3>
            <h6>Director: ${movie.director}</h6>
            <p>Plot: ${movie.plot}</p>
            
</div>`;


        })
    })


    // end jquery
})    ;