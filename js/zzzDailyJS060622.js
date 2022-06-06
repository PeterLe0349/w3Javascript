"use strict";
$(document).ready(function(){
    $('#displayMain').html(`<p>testing</p>`);
    generateDisplayMain();


    function generateDisplayMain(){
        let html = '';
        html += `<p>first post</p>`
        fetch(`https://sequoia-fuchsia-woolen.glitch.me/movies`).then( promise => promise.json().then( movies => {
            console.log(movies);
            movies.forEach(movie => {
                $('#displayMain').append(generateMovieData(movie));
            });
        }));
    }

    function generateMovieData(movieObj){
        let html = '';
        html += `Title: ${movieObj.title}<br>`;
        html += `Director: ${movieObj.director}<hr>`;
        return html;
    }















    // end jquery
});