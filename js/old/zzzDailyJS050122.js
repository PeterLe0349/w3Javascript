"use strict";
(function(){
    const maxTaskNumber = 6;
    console.log("hello from 05 01 22");

    document.getElementById("apostleButton").addEventListener("click", apostle);

    function apostle(){
        let whoApostle = prompt("What do you want to ask?");
        document.getElementById("apostleText").innerHTML = `The answer to your ${whoApostle} is: Believe. Do.`;
    }

    document.getElementById("btnTask").addEventListener('click', pickTask);

    function pickTask(){
        let taskNumber = validNumber(prompt(`What task do you want to do?(1-${maxTaskNumber})`));
        document.getElementById('textTask').innerHTML = taskNumber.toString();
        doTask(taskNumber);
    }

    function validNumber(input){
        let valid = false;
        while(valid === false){
            if(!isNaN(parseInt(input)) && parseInt(input) >= 1  && parseInt(input) <=6){
                valid = true;
                return parseInt(input)
            } else {
                input = parseInt(prompt(`Enter a valid number between 1 and ${maxTaskNumber}:`));
            }
        }

    }

    function doTask(num){
        switch(num){
            case 1:
                document.getElementById('textTask').innerHTML = `Add task result: ${add()}`;
                break;
            default:
                document.getElementById('taskResults').innerHTML = "Sabbath Day."
                break;
        }
    }

    function add(x,y){
        x = parseInt(prompt("Add task.  Enter first number:"));
        y = parseInt(prompt("Add task.  Enter second number:"));
        return x+y;

    }

})();