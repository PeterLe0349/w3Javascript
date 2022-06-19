"use strict";
$(document).ready(() => {

    function generatePost(){
        let html ='';
        html += `<p>Hello</p>`;
        return html;

    }

    function appendToMainDisplay(str){
        $('#displayMain').append(str);
    }

    appendToMainDisplay(generatePost());








}); //end jquery