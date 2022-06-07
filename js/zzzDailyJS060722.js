"use strict";
$(document).ready(function(){
    console.log("06 07");
    generateMainDisplay();

    function generateMainDisplay(){
        // let html= '';
        // html += `<p class="text-center">Main Post</p>`;
        // $('#displayMain').append(html);
        refreshMainDisplay();
    }

    function getMoviePromiseJson(){
        return fetch(GLITCH_MOVIE_URL)
            .then(movies => {
                document.getElementById('displayMain').innerHTML = "Loading Database";
                return movies.json();
            }
        )
            .catch(error => console.error(error));
    }

    function refreshMainDisplay(){
        getMoviePromiseJson().then(movies => {
            document.getElementById('displayMain').innerHTML = "";
            // console.log(movies);
            movies.forEach (movie => {
                // console.log(movie);
                document.getElementById('displayMain').innerHTML += displayMovieData(movie);
                $('button').click(function(e){
                    e.preventDefault();
                    let ID = $(this).attr('data-id');
                    console.log(ID);
                    console.log(getMovieObject(ID).then(movie => console.log(movie)));
                });

             });
            });
    }

    function displayMovieData(movieObj){
        let html = '';
        html += `<div>`;
        html += `<h4>Title: ${movieObj.title}</h4>`;
        html += `<h5>Rating: ${movieObj.rating}</h5>`;
        html += `<h6>ID: ${movieObj.id}</h6>`;
        html += `<button type="button" data-id="${movieObj.id}">Edit</button>`;
        html += `</div><hr>`;
        return html;
    }

    function getMovieObject(ID){
        return fetch(`${GLITCH_MOVIE_URL}/${ID}`).then(data => data.json());
    }











    // end jquery
});