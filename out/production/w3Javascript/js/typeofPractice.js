"use strict";
//(function(){
    //console.log("HELLO typeof practice");


    // if(input > 5){
    //     console.log("Yep it's bigger");
    // }else {
    //     console.log("Nope");
    // }





        let input = 'abc';
        function what(input){
            if(typeof input !== 'number'){
                console.log("it's not a number");
            } else {
                console.log("it's a number!");
            }

        }
        console.log(parseFloat('aasdf123dfdf'));
        console.log(parseFloat('1232aasdf123dfdf'));
        console.log(parseFloat(true));
        console.log(parseFloat(NaN));
        console.log(parseFloat(Infinity));
        console.log(parseFloat('123.123'));




















    // function whatIsIt(input){
    //     return typeof input;
    // }

//     console.log(isNaN('3423'));
//     console.log(isNaN('3423asdf'));
//     console.log(isNaN(parseFloat('3423asdf')));
//     console.log(isNaN(undefined));
//     console.log(isNaN(null));
//     console.log(isNaN(true));
//     console.log(parseFloat(false));
//     console.log(parseFloat('123ads'));
//     console.log(parseFloat('asdf123ads'));
//     console.log(parseFloat(true));
//     let inp = true ;
//     if(typeof inp === 'boolean'){
//         console.log("Same value and type");
//     }else{
//         console.log("weird stuff");
//     }

//})();