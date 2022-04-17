"use strict";

console.log("sort arrays in console");

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const points = [40, 100, 1, 5, 25, 10, 234, 23, 2, -5];
let text = "";

function sortArray(){
    text = `The original array is: ${fruits}. <br>`;
    text += `After it is sorted: ${fruits.sort()} <br>`;
    document.getElementById("demo").innerHTML = text;
}

function reverseArray(){
    text = `The original array is: ${fruits}. <br>`;
    text += `After it is reversed: ${fruits.reverse()} <br>`;
    document.getElementById("demo").innerHTML = text;
}

function sortNumbers(){
    text = `The original number array is: ${points}. <br>`;
    text += `After it is sorted by numbers: ${points.sort(function(a,b){return a - b})}<br>`;
    document.getElementById("demo").innerHTML = text;
}

function sortRandom(){
    text = `The original number array is: ${points}. <br>`;
    text += `After it is randomly sorted: ${points.sort(function(a,b){return 0.5 - Math.random()})}<br>`;
    document.getElementById("demo").innerHTML = text;
}

function findHigh(){
    text = `The original number array is: ${points}. <br>`;
    text += `The highest number is ${Math.max.apply(null, points)}. `;
    text += `The lowest number is ${Math.min.apply(null, points)}. `;
    document.getElementById("demo").innerHTML = text;
}