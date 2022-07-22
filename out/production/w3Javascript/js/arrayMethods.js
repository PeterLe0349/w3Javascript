"use strict";
console.log("Array Methods JS console check");
const colors = ['red', 'green', 'purple'];
let text = '';

function showColors(){
    text = 'toString method clunks all the array elements together<br>';
    text += colors.toString();
    document.getElementById("colors").innerHTML = text;
}

function toJoin(){
    text = 'join method lets you combine array elements with something <br>';
    text += colors.join(" xXx ");
    document.getElementById("colors").innerHTML = text;
}

function toPop(){
    text = "Pop removes last element in array and returns the popped element <br>";
    let popped = colors.pop();
    text += `The popped was ${popped} <br>`;
    text += "Final version: " + colors.join(" ");
    document.getElementById("colors").innerHTML = text;
}

function toPush(){
    text = 'the push method adds element to end of array, push RETURNS LENGTH of array <br>';
    colors.push(prompt("What color do you want to add?"));
    text += "Final version: " + colors.join(" ");
    document.getElementById("colors").innerHTML = text;
}

function toShift(){
    text = 'the shift method removes the first element, RETURNS SHIFTED value <br>';
    colors.shift();
    text += "Final version: " + colors.join(" ");
    document.getElementById("colors").innerHTML = text;
}

function toUnShift(){
    text = 'the unshift method adds before the first element, RETURNS new Length<br>';
    colors.unshift(prompt("What do you want to add in the front?"));
    text += "Final version: " + colors.join(" ");
    document.getElementById("colors").innerHTML = text;
}