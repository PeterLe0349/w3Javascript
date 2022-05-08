"use strict";
(
function() {
    console.log("hola Pedro");
    //MAKE two variables, one for string and one for number, one for boolean
    let str = "a string ";
    let numero = 9;
    let boolie = true;
    let boolie2= "true";

    //make a function that tells what type of input it is

    function whatAmI(input){
        return typeof input;
    }

    // console.log(whatAmI(str));
    // console.log(whatAmI(numero));
    // console.log(whatAmI(boolie));
    // console.log(whatAmI(boolie2));

    //make square function for the number input

    function square(input){
        return input*input;
    }

    // console.log(square(numero));

    //funcion that concats to a string
    function addToString(){
        return  str + prompt("give me another string");
    }


    // console.log(addToString("plus another string"));
    // console.log(addToString());

    //function that uses IF / ELSE from the boolean input
    function trueOrFalse(input){
        if(input === true){
            return "The sky is bue";
        } else if (input === false) {
            return "The sky is pink";
        }
    }

    //function to verify data type - numbers
    // 123
    // '123'  '435a23434dsfs' 'asdfds34324'
    // number / numeric string
    //check if it's a numeric string
    function isNumber(input){
        if(!isNaN(parseFloat(input))){
            return true;
        }else {
            return false;
        }
    }

    function addTwoNumbers(x,y){
        if(isNumber(x)  &&  isNumber(y)){
            return parseFloat(x) + parseFloat(y);
        }else
            return false;
    }

    // console.log(addTwoNumbers(3, 5));
    // console.log(addTwoNumbers(true, false));
    // console.log(addTwoNumbers('3adf', '32adsfd'));
    // console.log(addTwoNumbers('3adf', 'asdfsdf32adsfd'));

    //[23432,2342343,2343243,234324]
    //function that tells you if the the entire array is all data type of numbers
    const array1 = [1,3,4];
    const array2 = [true, false, 23432, 'false'];
    const array3 = ['12312asdfads', '3243','2343'];

   // isTheArrayAllNumberElements(arry1)

    function isTheArrayAllNumberElements(arry){
        //for loop
        for(let i= 0; i < arry.length; i++){
            if(isNumber(arry[i]) == false){
                return false;
            }

        }
        return true;

        //foreach loop
        //forof loop

    }

    console.log(isTheArrayAllNumberElements(array1));
    console.log(isTheArrayAllNumberElements(array2));
    console.log(isTheArrayAllNumberElements(array3));


//make a function that adds an input to the end of the array
    function addToTheEndofArray(input){ //add to the beginning instead of push  > unshift >
        array1.push(input);
    }

    function removeLastElementOfArray(){
        array1.pop();  // remove from the beginning instead of pop i would shift
    }

  addToTheEndofArray(234);
  addToTheEndofArray(2343);
  addToTheEndofArray(23434);
  addToTheEndofArray(2342);
  addToTheEndofArray('234324');



    console.log(array1);


    removeLastElementOfArray();
    removeLastElementOfArray();
    console.log(array1);


    // console.log(trueOrFalse(true));
    // console.log(trueOrFalse(false));
    // console.log(trueOrFalse(boolie));
    // console.log(trueOrFalse(boolie2));

    //function that tells you how long the string is

    function howLongIsTheString(input){
        return input.length;
    }
    //
    // console.log(howLongIsTheString(""));
    const arrayOfNumbers = [2,234,3];

    //function return the length of the array
    function howLongIsTheArray(peter){
        return peter.length;
    }

    // console.log(howLongIsTheArray(['lkjlkjkl;saf',undefined, NaN, 34234, false, [3432,23432,234]]));

    // console.log(arrayOfNumbers);

    // const arrayOfJunk = ['junk', 2];
    // console.log(arrayOfJunk);

//
    let num = 1;
    let numArray = [121232,1232];
    const superNumber = {value:5, negPos:'positive',integer:true, favorite:false};
    const superNumber2 = {value:-42, negPos:'negative',integer:true};



    console.log(superNumber2);

    //function that takes in an object and makes it my favorit number > true
    function makeFavorite(obj){
        obj.favorite = true;
        superNumber.favorite = true;
    }

    function makeChangeNumber(obj, num){
        obj.value = num;
    }



    console.log(superNumber2);
    makeFavorite(superNumber2);
    makeChangeNumber(superNumber2, 23432);
    console.log(superNumber2);

    //function Tell me about your number -  value, negpos
    function shortNumber(obj){

        return {value:obj.value, negPos:obj.negPos};
    }

    console.log("pow" + superNumber['integer']);

    //END OF IIFE
})              ();




