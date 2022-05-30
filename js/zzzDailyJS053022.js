"use strict";
$(document).ready(function(){
   $('#displayMain').html("<h1>Hello Main Jquery</h1>" + getProd());
   document.getElementById('displayLeft').innerHTML = '<strong>Hello Leftie</strong>' + getSum(9);
   document.getElementById('displayRight').innerHTML = '<i>Hello Rightie</i>' + getDif(9);

   function getSum(amount){
       let html = '<br>';
       let sum = 0;
       for(let i = 0; i< 10; i++){
           html += `${i} + ${sum} = ${i+sum} <br>`;
           sum += i;
       }
       return html;
   }

    function getDif(amount){
        let html = '<br>';
        let sum = 100;
        for(let i = 0; i< 10; i++){
            html += `${sum} - ${i}  = ${sum-i} <br>`;
            sum -= i;
        }
        return html;
    }

    function getProd(amount){
        let html = '<br>';
        let sum = 1;
        for(let i = 1; i< 10; i++){
            html += `${sum} * ${i}  = ${sum*i} <br>`;
            sum *= i;
        }
        return html;
    }

});