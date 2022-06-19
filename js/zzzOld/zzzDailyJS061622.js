"use strict";
$(document).ready(function(){
    $('#displayMain').append(`<p>First Post</p>`);
    refreshMainDisplay();


    function refreshMainDisplay(){
        fetch(GLITCH_MOVIE_URL)
            .then( res => res.json()
            ).then( movies => {
                movies.forEach(movie => {
                    let html = ``;
                    html += `<p>
<h4>Title: ${movie.title}</h4>
<em>Plot: ${movie.plot}</em>
</p>`;
                    appendToMain(html);
                })
        })




            .catch(error => console.error(error));
    }

    function appendToMain(str){
        document.getElementById('displayMain').innerHTML += str;
    }




    // end jquery
});