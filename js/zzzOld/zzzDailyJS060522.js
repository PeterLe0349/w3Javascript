"use strict";
$(document).ready(function(){
    console.log("hi 6 5");
    $('#displayMain').append(generateDisplayMain(4)).addClass('text-center').prepend(generateTitle('Welcome to 6 5'));
    $('#displayLeft').prepend(generateTitle('Login Control'));
    $('#displayRight').prepend(generateTitle('Tab Index'));



    function generateDisplayMain(n){
        let html ='';
        for(let i=0; i<n; i++){
            html += `<p>Lorem</p>`;
        }
        return html;
    }

    function generateTitle(str){
        return `<h1>${str}</h1>`;
    }




    // end jquery
});