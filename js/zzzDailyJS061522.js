"use strict";
$(document).ready(function(){
    console.log("hello 15");
    $('#displayMain').append(`<p>First Post</p>`);
    appendMovieData(getMovieData());

    function getMovieData(){
        return fetch(GLITCH_MOVIE_URL).then( res => res.json());
    }

    function appendMovieData(promise){
        promise.then(movies => {
            movies.forEach(function(movie){
                let html = '';
                html += `<div>
<h1>Title: ${movie.title}</h1>
</div>`;
                $('#displayMain').append(html);
            })
        })
    }

    // end jquery
});
    