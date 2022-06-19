"use strict";
$(document).ready(function(){
$('#displayMain').append(`<p>First Post from 17th</p>`);

refreshMainDisplay();


function refreshMainDisplay(){
    fetchMovieDatabase().then(movies => {
        movies.forEach(movie => {
            let html = '';
            html += `<div>
<h4>Title: ${movie.title}</h4>
<em>Plot: ${movie.plot}</em>
</div>`;
            document.getElementById('displayMain').innerHTML += html;
        })
    });
}


function fetchMovieDatabase(){
    return fetch(GLITCH_MOVIE_URL).then(movies => movies.json());
}



    // end jquery
});