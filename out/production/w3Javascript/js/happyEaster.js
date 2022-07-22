"use strict";



    alert("Happy Easter!  Jesus Christ has resurrected!");
    let day = 17;
    const month = "April";
    let year = 2022;
    const dat = ("Today is Easter.  It's the "+ day+  " of "+ month+  ", " + year);
    console.log(dat);
    document.getElementById("dat").innerHTML = dat;

    function greet(){
        let myName = prompt("What's your name?")
        document.getElementById("greet").innerHTML = "Hello, " + myName;
    }

    function divide(x, y){
        x = prompt("What's the dividend?");
        y = prompt("What's the divisor?");
        document.getElementById("divide").innerHTML= `"The ${x} is divided by ${y}.  The answer is ${(x/y).toFixed(3)}`;
    }

    function food(){
        let food = prompt("What do you like to eat")
        switch (food){
            case "pizza":
                alert("Me too. I love pizza!");
                break;
            default:
                alert("Ugh. Gross!");
                break;
        }
    }
