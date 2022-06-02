"use strict";
(function(){
    console.log("hello 05 14");

    let timerCount = 10;
    let bomber = {};
    let notice = document.getElementById('tickTock');

    function startFuse(){
        document.getElementById('fuse').style.visibility = "hidden";
        timerCount = 10;
        bomber = setInterval(function() {
            notice.innerText = `You have ${timerCount} seconds to defuse the bomb!`;
            timerCount--;
            if (timerCount < 0) {
                alert("Baboom!");
                clearInterval(bomber);
            }
        }, 1000);
    }

    document.getElementById('fuse').addEventListener('click', startFuse);
    document.getElementById("defuse").addEventListener('click', defuse);



    function defuse(){
        notice.innerText = "Red wire cut!  BOMB defused! ";
        clearInterval(bomber);
    }







})();