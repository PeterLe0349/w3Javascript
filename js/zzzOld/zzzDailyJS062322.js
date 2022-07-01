"use strict";
$(document).ready(function(){
    refreshMovies();


    function refreshMovies(){
        document.getElementById('displayMain').innerHTML = `<h1>Loading screen</h1>`;
        fetch(GLITCH_MOVIE_URL)
            .then(res => {
            document.getElementById('displayMain').innerHTML = `<h1>Loading screen Part 2</h1>`;
            return res.json()
        }).then( movies => {
            document.getElementById('displayMain').innerHTML = '';
            movies.forEach(movie => {
                document.getElementById('displayMain').innerHTML += makePost(movie);
            })
        })
            .catch(error => console.error(error));

    }

    function makePost(movieobj){
        let html = '';
        html += `
        <div>
        <h3>Title: ${movieobj.title}</h3>
        <p>Plot: ${movieobj.plot}</p>
</div>
        `;
        return html;
    }






    // end jquery
});