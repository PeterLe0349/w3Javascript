"use strict";
$(document).ready(function(){
    document.getElementById('leftDisplay').innerHTML = leftDisplay();
    $('#rightDisplay').html(rightDisplay());
    $('#mainDisplay').append(`<h1 class="text-center">Main Computation</h1>`);
    $('#mainDisplay').append(midDisplay());


    function leftDisplay(){
        let html = '';
        let sum = 0;
        for(let i = 0; i < 10; i++){
            html += `The #${i} added to sum: ${sum} is ${i+sum}. <br>`;
            sum += i;
        }
        return html;
    }

    function rightDisplay(){
        let html = '';
        let stack = '';
        let countdown = 10;
        while(countdown > 0){
            stack = countdown.toString().repeat(countdown);
            html += stack + '<br>';
            countdown--;
        }
        return html;

    }

    function midDisplay(){
        let html = '';

        for(let i = 0; i < 20; i++){
            let ran = Math.floor(Math.random()*10+1);
            html += `Trial #${i+1} - The random number is >>>  ${ran} <br>`;
        }
        return html;
    }










    // end jquery
});