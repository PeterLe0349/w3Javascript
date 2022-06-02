"use strict";
$(document).ready(function(){
    let count = 1;

    function generateThreeColumns(){
        let html = '';
        html += `<div class="col-3 border border-danger" id="displayLeft">1</div>`;
        html += `<div class="col-6 text-center border border-warning" id="displayMid">2</div>`;
        html += `<div class="col-3 text-end border border-success" id="displayRight">3</div>`;
        return html;
    }

     $('#mainRow').html(generateThreeColumns());
    generateRightDisplay();
    generateLeftDisplay();
    generateMidDisplay();

    function generateLeftDisplay(){
        let html = '';
        for(let i=0; i<3; i++){
            html += `<p>#${count++} Post<br> abcdefghjiklmnopqrstuvwxy</p>`;
        }
        document.getElementById("displayLeft").innerHTML = html;
    }

    function generateRightDisplay(){
        let html = '';
        for(let i=0; i<3; i++){
            html += `<p>#${count++} Post<br> abcdefghjiklmnopqrstuvwxy</p>`;
        }
        document.getElementById("displayRight").innerHTML = html;
    }

    function generateMidDisplay(){
        let htmll = '';
        for(let i=0; i<3; i++){
            htmll += `<p>#${count++} Post<br> abcdefghjiklmnopqrstuvwxy</p>`;
        }
        $('#displayMid').html(htmll);
    }






    // jquery end
});