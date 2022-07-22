"use strict";
$(document).ready(function(){

    // console.log(alphabet.replace('xyz',3));
    let numArr = makeRandomNumArray(10, 100);
    console.log(numArr);
    let sum = 0;
    for(let num of numArr){

        console.log(`The current sum of adding ${sum} + ${num} is : ${sum+num}`);
        sum += num;
    }

    console.log("Double the array version is");
    console.log(numArr.toString());
    const arr2 = [];
    for(let i = 0; i < numArr.length; i++){
        arr2.push(numArr[i]*2);
    }
    console.log(arr2.toString());


    // console.log("HELLO");
    // console.log(toolObjects[2].title);
    // for loop
    // for(let numie of numArray){
    //     console.log(`The number is #${numie}`);
    // }

    // console.log(`The length of the string is ${alphabet.length}`);
    // document.getElementById('midColumn').innerHTML


});