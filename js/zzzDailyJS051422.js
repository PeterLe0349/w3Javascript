"use strict";
(function(){
    console.log("hello 05 14");

    let timerCount = 10;
    let bomber = {};

    function startFuse(){
        bomber = setInterval(function() {
            console.log(`You have ${timerCount} seconds to defuse the bomb!`);
            timerCount--;
            if (timerCount === 0) {
                alert("Baboom!");
                clearInterval(bomber);
            }
        }, 1000);
    }

    document.getElementById('fuse').addEventListener('click', startFuse);
    document.getElementById("defuse").addEventListener('click', defuse);



    function defuse(){
        console.log("Red wire cut!  BOMB defused! ");
        clearInterval(bomber);
    }







})();