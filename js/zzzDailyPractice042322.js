"use strict";
(function(){
    console.log("Hello Peter, log 04 23 22");


    document.getElementById("dataArea").addEventListener("click", changeData);
    document.getElementById("btn").addEventListener("click", testArea);

function changeData(){
    document.getElementById("dataArea").innerHTML = "AAARGHH! I told you not to click!!!!! ~_~";
}

function testArea(){
    document.getElementById("testArea").innerHTML ="test data changed!";
}









}())