"use strict";

console.log("array iteration in console test");

const num = [10, 4, 3];
let txt = '';

function reduceTest(value){
    const num4 = num.reduce(addIt, 100);
    txt = num4.toString();
    document.getElementById('test').innerHTML = txt;
}

function addIt(total, value){
    return total - value;
}

function filterTest(value){
    const num3 = num.filter(biggerThanTwenty);
    txt = num3.join("<br>");
    document.getElementById('test').innerHTML = txt;
}

function biggerThanTwenty(value){
    return (value > 20);
}

function mapTest(value){
    const num2 = num.map(timesThree);
    txt = num2.toString();
    document.getElementById('test').innerHTML = txt;
}

function timesThree(value){
    return value*3;
}

function forEachTest(){
    txt = '';
    num.forEach(myFunction);
    document.getElementById('test').innerHTML = txt;
}

function myFunction (value, index, array){
    txt += `The number is: ${value} <br>`;
}