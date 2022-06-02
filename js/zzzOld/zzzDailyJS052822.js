"use strict";
$(document).ready(function(){
    function generateLeftDisplay(){
        let html = '';
        html += `<div class="grid-item" id="displayLeft">`;
        html += `<h3>Shopping List</h3>`;
        html += `<ul>`;
        html += `<li>Golden Delicious Apples</li>`;
        html += `<li>Celery</li>`;
        html += `<li>Carrots</li>`;
        html += `</ul>`;
        html += `</div>`;
        document.getElementById("grid-container").innerHTML += html;
    }

    function generateMidDisplay(){
        let html = '';
        html += `<div class="grid-item" id="displayMid">`;
        html += `<h1>Actions</h1>`;
        html += `<ul>`;
        html += `<li>Study</li>`;
        html += `<li>Practice</li>`;
        html += `<li>Ponder</li>`;
        html += `</ul>`;
        html += `</div>`;
        document.getElementById("grid-container").innerHTML += html;
    }

    function generateRightDisplay(){
        let html = '';
        html += `<div class="grid-item" id="displayRight">`;
        html += `<h3>Relax</h3>`;
        html += `<ol>`;
        html += `<li>Calm down</li>`;
        html += `<li>Breath</li>`;
        html += `<li>Strecth</li>`;
        html += `</ol>`;
        html += `</div>`;
        $('#grid-container').append(html);
    }

    generateLeftDisplay();
    generateMidDisplay();
    generateRightDisplay();






    // end jquery
});
    