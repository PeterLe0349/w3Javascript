"use strict";
$(document).ready(function(){
    $('#displayMain').append(generatePost());


    function generatePost(){
        let html = '';
        html += '<p class="text-center">First Post</p>';
        return html;
    }

    function getEntireDatabase(){
        return fetch(GLITCH_MOVIE_URL).then(res => res.json());
    }

    function displayAllData(movieDatabase){
        movieDatabase.then(data => {
            data.forEach(element =>   appendToMainDisplay(element));
        })
    }

    function appendToMainDisplay(movieObj){
         let html = '';
         html+= `<div class="col-4 movieCard overflow-auto">`;
         html+= `<h4>Title: ${movieObj.title}</h4>`;
         html+= `<p>Director: ${movieObj.director}</p>`;
         html+= `<p>Plot: ${movieObj.plot} ${movieObj.plot} ${movieObj.plot}</p>`;
         html+= `</div>`;
         document.getElementById('displayMain').innerHTML += html;
    }

    function addMovieToDatabase(movieObj){
        let options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(movieObj)
        }
        return fetch(GLITCH_MOVIE_URL, options).then(res => res.json());
    }

    let fakeMovie = {title:"Fake movie"};
    addMovieToDatabase(fakeMovie);

    displayAllData(getEntireDatabase());













    // end jquery
});