"use strict";

    let day = 16, month = 4;
console.log("Peter's Log 0416")
    console.log("The month is " + month + "  The day is " + day +".");

    console.log("The sum is: " + (day + month));

    if( month > day){
        console.log("Month is bigger than day");
    } else {
        console.log("Day is greater");
    }

    let choice = true;
    console.log("This is a ternary:");
    choice ? console.log("Today is a great!") : console.log("Today is so so...");
    let num = 2;
    switch(num){
        case 1:
            console.log("Switch 1")
            break;
        case 2:
            console.log("Switch 2");
            break;
        default:
            console.log("Switch - It's not 1 or 2!!!");
            break;
    }
    function myMood(){
        let feeling = prompt("How are you feeling today?");
        document.getElementById("mood").innerHTML= feeling;
    }

const myName = "Peter";
    console.log("Const name is: "+ myName);

console.log(typeof myName);