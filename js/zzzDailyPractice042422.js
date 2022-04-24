"use strict";
(function(){
    console.log("Hello.  Captain's log 04 24 22.")

    document.getElementById('btn').addEventListener('click', greet);
    function greet(){
        let myName = prompt("Enter username");
        document.getElementById("greeting").innerHTML = `Username: ${myName}<br>What would you like to do today, ${myName}`;
    }
    //task
    document.getElementById('taskBtn').addEventListener('click', task);
    function task(){
        let task = '';
        task = prompt("What do you want to do?");
        switch(task){
            case 'add':
                task = add(100,4);
                break;
            default:
                task = 'Nothing decided'; break;
        }
        document.getElementById("taskData").innerHTML = task;
    }

    function add(x,y){
        x =  parseInt(prompt("First number?"));
        y =  parseInt(prompt("Second number?"));
        return `The sum of ${x} and ${y} is ${x+y}`;
    }

})()
