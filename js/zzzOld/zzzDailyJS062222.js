"use strict";
$(document).ready(function(){
    console.log("hello 22");
    displayMain();

    function displayMain(){
        document.getElementById('displayMain').innerHTML = "<h1>Loading Screen</h1>";
        fetch(GLITCH_MOVIE_URL)
            .then(res => res.json()).then(movies => {
                movies.forEach(movie => {
                    $('#displayMain').append(makeAPost(movie));
                })
        });
    }

    function makeAPost(movieObj){
        let html = '';
        html += `
<div>
<h4>Title: ${movieObj.title}</h4>
<p> Plot: ${movieObj.plot}</p>
</div>                
                `;
        return html;
    }


    // end jquery
});