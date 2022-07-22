"use strict";
$(document).ready(function(){

    fetch(GLITCH_MOVIE_URL).then(res => res.json()).then(movies => {
        movies.forEach(movie => addPost(movie));
    });



    function addPost(movieobj){
        let html = '';
        html += `
<h4>Title: ${movieobj.title}</h4>
        <p> Another Post- ${movieobj.plot}</p>`;
        $('#displayMain').append(html);

    }


    // end jquery
});