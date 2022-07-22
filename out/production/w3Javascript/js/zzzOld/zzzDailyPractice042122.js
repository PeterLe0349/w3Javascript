"use strict";

function login(){
    let name = prompt("What is your name?");
    document.getElementById('greeting').innerHTML = "Hello " + name + '<br>';

}

function task(choice) {
    choice = prompt("What do you want to do?(multiply, time, add");
    switch(choice) {
        case 'multiply':
            multiply();
            break;
        case 'time':
            getTime();
            break;
        case 'add':
            add();
            break;
        default:
            alert("You chose to do nothing!");
            break;
    }
}

function multiply(input){
    let txt= '';
    input = parseFloat(prompt("What number do you want to see the times table?"));
    for (let i = 0; i < 11; i++) {
        txt += `${input} x ${i} = ${input*i}<br>`;
    }

    document.getElementById('task').innerHTML = txt;
}

function getTime(){
    let d = new Date();
    document.getElementById('task').innerHTML = d.toString();
}

function add(x, y){
    x = parseFloat(prompt("What is the first number?"));
    y = parseFloat(prompt("What is the second number?"));
    document.getElementById('task').innerHTML = `The sum of ${x} + ${y} = ${(x+y)}`;
}