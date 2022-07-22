"use strict";
(function(){
    console.log("console log for daily practice 04 27 22");
    document.getElementById('greetingBtn').addEventListener('click', greeting);

    function greeting(){
        let myName = prompt("What's your name?");
        document.getElementById('greeting').innerHTML = `Hello, ${myName}! <br><h6> Today's Date is: ${new Date().toString()}</h6>`;
    }


})();