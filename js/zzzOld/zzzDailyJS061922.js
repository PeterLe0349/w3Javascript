"use strict";
$(document).ready(function(){

    displayMain();

    function displayMain(){
        document.getElementById('displayMain').innerHTML = `<h1>Loading</h1>`;
        fetch(GLITCH_MOVIE_URL).then(res => res.json()).then( movies => {
            document.getElementById('displayMain').innerHTML = '';
            movies.forEach(movie => {
                document.getElementById('displayMain').innerHTML += generateMoviePost(movie);
            })
        })

    }

    function generateMoviePost(movie){
        let html ='';
        html += `<div>
<h4>Title: ${movie.title}</h4>
<p> Plot: ${movie.plot}</p>
</div>`;
        return html;
    }











    // end jquery
});