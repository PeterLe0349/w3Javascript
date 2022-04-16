"use strict";

function myMood(){
    let feeling = prompt("How are you feeling today?");
    document.getElementById("mood").innerHTML= feeling;
}

function doSomething(){
    let doit = prompt("What do you want to do?");
    switch(doit){
        case "add":
            let x = prompt("What's the first number?");
            let y = prompt("What's the second number?");
            let sum = parseFloat(x)+parseFloat(y);
            alert("The sum is: "+ sum);
            break;
        case "celsius":
            let celsius = prompt("What's the fahrenheit?");
            celsius = (5/9) * (celsius-32);
            alert("The fahrenheit to celsius is: "+ celsius.toFixed(2));
            document.getElementById("temperature").innerHTML = celsius.toFixed(2);
            break;
        default:
            alert("You chose an impossible thing!");
            break;
    }
}

//Making a car object
const car = {make:"Kia", model:"Rio", color:"black", year:2022, describe: function(){return this.color + " " + this.make + " " + this.model + " " + this.year;}};

function makeCar(){
    car.make = prompt("What's the car's make?");
    car.model = prompt("What's the car's model?");
    car.color = prompt("What's the car's color?");
    car.year = prompt("What's the car's year?");
    document.getElementById("make").innerHTML = car.make;
    document.getElementById("model").innerHTML = car.model;
    document.getElementById("year").innerHTML = car.year;
    document.getElementById("color").innerHTML = car.color;
    document.getElementById("description").innerHTML = car.describe();
}
