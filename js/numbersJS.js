"use strict";
(function(){
    console.log("Numbers JS");
    //numbers using scientific notation
    let x = 123e5;
    let y = 123e-5;
    //JS numbers are always 64 bit floats, can't assign like other languages short long floating etc
    console.log("Scientifc notation of numbers: ", x, " and ", y);
    //integers are accurate up to 15 digits
    //float point arithmetic might not be accurate, solve by multiply and divide
    console.log("Floating point arithmetic might not be acdurate");

})()