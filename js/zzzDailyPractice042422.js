"use strict";
(function(){
    console.log("Hello.  Captain's log 04 24 22.")

    document.getElementById('btn').addEventListener('click', greet);
    function greet(){
        let myName = prompt("Enter username");
        document.getElementById("greeting").innerHTML = `Username: ${myName}<br>What would you like to do today ,${myName}`;
    }

})()
