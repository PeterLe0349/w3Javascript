"use strict";
$(document).ready(function(){
    fetch(GLITCH_MOVIE_URL).then( res => res.json()).then(movies => movies.forEach(movie => {
        $('#displayMain').append(`
        <h4>${movie.title}</h4>`);
    }))










    // end jquery
});