"use strict";




    const colors = ["red", 'blue', 'green', 'yellow', 'cyan'];
    let dataLog = '';
    const person = {firstName:"Peter", lastName:"Le"}


function changeName() {
    document.getElementById("who").innerHTML = `This person\'s name is ${person.firstName} ${person.lastName} `;
}


    function test() {
        colors[1] = 'purple';
        dataLog = dataLog + colors + " <br>";
        dataLog += "The array is typeof: " + typeof colors + "<br>";
        document.getElementById("test").innerHTML = dataLog;
    }

function properties(){

        let show = "The colors are: " + colors + " and the length is " + colors.length + ".<br>";

        show += "Sorting it is: " + colors.sort() + "<br>";
    document.getElementById("properties").innerHTML = show;
}

function looping(){
        let text = '<ul>';
        for (let i = 0; i< colors.length; i++){
            text += "<li>" + colors[i] + "</li>";
        }
        text += "</ul>"
    document.getElementById("looping").innerHTML = text;
}
let text1 = '';
function forEachie(){
        text1 = "Iterate through array using forEach! Pass the value of array into function.<br><ul>";
        colors.forEach(addValue);
        text1 += "</ul>";
        document.getElementById("forEachie").innerHTML = text1;
}

function addValue(value){
    text1 += "<li>" + value + "</li>";
}

let text2 = '';

function pushAdd(){
    text2 += "The current colors are: "+ colors + "<br>";
    let newColor = prompt("What color to add?");
    colors.push(newColor);
    text2 += "The new set of colors are: " + colors + "<br>";
    document.getElementById("addArray").innerHTML = text2;
}

function lengthAdd(){
    text2 += "The current colors are: "+ colors + "<br>";
    let newColor = prompt("What color to add?");
    colors[colors.length] = newColor;
    text2 += "The new set of colors are: " + colors + "<br>";
    document.getElementById("addArray").innerHTML = text2;
}

