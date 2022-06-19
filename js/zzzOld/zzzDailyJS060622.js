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
        }))
            // .then( () => {
        //     $('.myBtn').each(function(){
        //         $(this).click(function(){
        //             modal.style.display = "block";
        //         });
        //     });
        }


    function generateMovieData(movieObj){
        let html = '';
        html += `<div class="col-6">`;
        html += `Title: ${movieObj.title}<br>`;
        html += `Director: ${movieObj.director}`;
        // html += `<button class="myBtn">Open Modal</button>`;
        html += `<br><button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Launch static backdrop modal
</button><hr>`;
        html += `</div>`;
        return html;
    }

    var modal = document.getElementById("myModal");

// Get the button that opens the modal
    var btn = document.getElementsByClassName("myBtn");

// Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
//     btn.onclick = function() {
//         modal.style.display = "block";
//     }

// When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

// When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }















    // end jquery
});