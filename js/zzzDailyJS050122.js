"use strict";
(function(){
    console.log("hello from 05 01 22");

    document.getElementById("apostleButton").addEventListener("click", apostle);

    function apostle(){
        let whoApostle = prompt("What do you want to ask?");
        document.getElementById("apostleText").innerHTML = `The answer to your ${whoApostle} is: Believe. Do.`;
    }

})();