"use strict";
(function(){
    console.log("Hello Peter, log 04 23 22");
    const nums = [3, 34, 234, 543, 23, 23, -800];
    const colors = ['red', 'blue', 'white', 'green', 'purple'];
    let me = {firstName:'Peter', lastName:'Le',race:'asian',isVegan:false};


    document.getElementById("dataArea").addEventListener("click", changeData);
    document.getElementById("btn").addEventListener("click", testArea);
    document.getElementById('me').addEventListener('click', showMe);
    document.getElementById('loopData').addEventListener('click', loopie);
    document.getElementById('stringChange').addEventListener('click', stringChangie);

    function stringChangie(){
        let txt = '';
        txt += colors;
        colors.push('cyan');
        colors.unshift('aqua');
        txt += '<br>'+colors;
        colors.pop();
        colors.pop();
        colors.pop();
        colors.pop();
        txt += '<br>'+colors;



        document.getElementById('stringChange').innerHTML = txt;
    }

function showMe(){
    document.getElementById('me').innerHTML= me.firstName + ' ' + me.lastName + '. Race: ' + me.race;
}

function changeData(){
    document.getElementById("dataArea").innerHTML = "AAARGHH! I told you not to click!!!!! ~_~";
}

function testArea(){
    document.getElementById("testArea").innerHTML ="test data changed!";
}

function loopie(){

    let result = 0;
   for(let i in nums){
       result += nums[i];
   }
    document.getElementById('loopData').innerHTML = result.toString();

}








}())