"use strict";
$(document).ready(function(){
    // $('#displayMain').append(`<p>First Post</p>`);
    postEntireDatabase();


    function getPromise(){
        return fetch(GLITCH_MOVIE_URL).then(res => res.json());
    }

    function postEntireDatabase(){
        getPromise().then( movies => {
            console.log(movies.length);
            movies.forEach(function(movie){
                appendToMain(generateMovieData(movie));
        })})}


    function generateMovieData(movieObj){
        let html = '';
        html += `<div>
<h5>Title: ${movieObj.title}</h5>
<p>Plot: ${movieObj.plot}</p>

</div>`;
        return html;
    }

    function appendToMain(str){
        $('#displayMain').append(str);
    }
















    // end jquery
});