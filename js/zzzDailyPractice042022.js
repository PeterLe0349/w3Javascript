"use strict";
    let txt = '', myName ='';
    console.log("Daily log practice 04 20 22");
    let str = 'asdljl  dfkljd';
    let spacey = false;
    spacey =str.includes('asdf');
    console.log("Does it have space? " + spacey);


    function greeting(){
        myName = prompt("What is your name?");
        myName = `Good morning ${myName}!`;
        txt += myName;
        document.getElementById('login').innerHTML = txt;
    }

    function doTask(){
        let task = prompt("What do you want to do? (available features: add)");
        switch(task){
            case 'add':
                add();
                break;
            default:
                alert("You chose to do nothing...");
                break;
        }
    }

    function add(x,y){
        x = parseInt(prompt("What is the first number?"));
        y = parseInt(prompt("What is the second number"));
        alert(`The sum is ${x+y}`);
    }



