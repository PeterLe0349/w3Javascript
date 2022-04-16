"use strict";
(function(){
    console.log("String Search JS");
    let str = "Please locate locate where 'locate' happens!";
    //get first index of it happening
    console.log("First place is:", str.indexOf("locate"));
    //last occ
    console.log("Last place to happen is:", str.lastIndexOf("locate"));
    //both return -1 if not found

})()