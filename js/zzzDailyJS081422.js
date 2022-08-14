"use strict";
$(document).ready( () => {
    console.log("hello 14th");
    fetch(GLITCH_MOVIE_URL).then(res => res.json()).then(movies => {
        movies.forEach(movie => {
            document.getElementById("displayMain").innerHTML += `
            <div>
            <h1>Title: ${movie.plot}</h1>
            <p>${movie.plot}</p>
         
            
</div>`;
            for(let i = 0; i < 9; i++){
                document.getElementById("displayMain").innerHTML += i + " ";
            }
        })
    })


    // end jquery
})