"use strict";
$(document).ready(function(){
    document.getElementById('displayLeft').innerHTML = generateLeftDisplay();
    $('#displayMain').html(generateMainDisplay());
    $('#displayRight').html(generateRightDisplay());


    function generateLeftDisplay(){
        let html = '';
        html += `<ul>`;
        html += ` <li></li><li></li><li></li>`;
        html += `</ul>`;
        return html;
    }

    function generateMainDisplay(){
        let html = '';
        html += '<h1 class="text-center">Hello 02</h1>';
        return html;
    }

    function generateRightDisplay(){
        let html = '';
        let n = 10;
        for(let i = 0; i < n; i++){
            for(let j = 0; j<i; j++){
                html += `${i}`;
            }
            html += '<br>';
        }

        return html;
    }

















    // end jquery
});
