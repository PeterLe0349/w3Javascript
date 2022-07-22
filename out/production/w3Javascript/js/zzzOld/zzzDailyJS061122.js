"use strict";
$(document).ready(function(){
// document.getElementById('displayMain').innerHTML += `<p class=" display-1"> First Post</p>`;
refreshScreen();

function getFullDatabase(){
    return fetch(GLITCH_MOVIE_URL).then(res => res.json());
}

function refreshScreen(){
    document.getElementById('displayMain').innerHTML = '';
    getFullDatabase().then(movies => movies.forEach(function(movie){
            // console.log(movie.title);
            addToMainDisplay(movie);
        })
    ).then(() => {
        $('.deleteClass').each(function(){
            // console.log($(this).attr('data-id'));
            $(this).click(function(){
                deleteMovie($(this).attr('data-id'));
            })

        });
    });

}



function addToMainDisplay(movieObj){
    let html = '';
    html += `<div class="border border-dark p-3 mb-3">
<h4>Title: ${movieObj.title}</h4>
<p>${movieObj.plot}</p>
<button type="button" class="deleteClass" data-id="${movieObj.id}">Delete</button>
</div>`;
    $('#displayMain').append(html);
}

function deleteMovie(num){
    let url =`${GLITCH_MOVIE_URL}/${num}`;
    let options = {
        method: 'DELETE'
    }
    return fetch(url, options).then(result => {
        refreshScreen();
        return result.json();
    });
}










    // end jquery
});