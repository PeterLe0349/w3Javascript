"use strict";
    let txt = '', myName ='';
    console.log("Daily log practice 04 20 22");
    let person = {firstName:'', lastName:'', age:'', ethnicity:''};


    function greeting(){
        person.firstName = prompt("What is your first name?");
        person.lastName = prompt("What is your last name?");
        person.age = prompt("What is your age?");
        person.ethnicity = prompt("What is your ethnicity?");
        myName = `Good morning ${person.firstName}!`;
        txt = `Name: ${person.firstName} ${person.lastName} <br> 
Age: ${person.age}<br>
Ethnicity: ${person.ethnicity}<br>
        `
        document.getElementById('login').innerHTML = txt;
    }

    function doTask(){
        let task = prompt("What do you want to do? (available features: add, discount)");
        switch(task){
            case 'add':
                add();
                break;
            case 'discount':
                discount();
                break;
            case 'user':
                showUser();
                break;
            default:
                alert("You chose to do nothing...");
                document.getElementById("taskData").innerHTML = '...(idle)....'
                break;
        }
    }

    function showUser(){
        txt = '';
        for( let x in person){
            txt += person[x] + '  ||  ';
        }
        document.getElementById('taskData').innerHTML = "User data: " + txt;
    }

    function add(x,y){
        x = parseInt(prompt("What is the first number?"));
        y = parseInt(prompt("What is the second number"));
        document.getElementById('taskData').innerHTML = `The sum is: ${x+y}`;
    }

    function discount(total, discount){
        total = parseFloat((prompt("What is the total bill?")));
        discount = validDiscount();
        document.getElementById('taskData').innerHTML = `The total: ${total.toFixed(2)}.<br>The discount: ${discount}%.<br>The new total: ${(total-(total*(discount/100))).toFixed(2)}`;
    }

    function validDiscount(input){
        let validDiscount = false;
        let num = 0;
        input = (prompt('What is the discount percentage(0-100?)'));
        while(validDiscount==false){
            if(!isNaN(input) && (parseFloat(input) > 0) && (parseFloat(input) < 100)){
                validDiscount = true;
                num = input;
            }
            else{
                input = (prompt('Enter a valid discount percentage(0-100?)'));
            }
        }
        return num;
    }

    function isNumber(input){
        return !(isNaN(parseFloat(input)));
    }

    function what(input){
        input = false;
        document.getElementById('what').innerHTML=  typeof input;
    }

