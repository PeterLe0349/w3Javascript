"use strict";
(function(){
    console.log("String Search JS");
    let str = "Please locate locate where 'locate' happens!";
    //get first index of it happening
    console.log("First place is:", str.indexOf("locate"));
    //last occ
    console.log("Last place to happen is:", str.lastIndexOf("locate"));
    //both return -1 if not found, can also use second parameter for starting point
    //search is similar but does not allow second parameter, it can search for powerful expressions
    console.log("Search for locate is: ", str.search("locate"));
    //match searches and returns as array use flag global
    console.log("match returns are: ", str.match(/cate/g));
    //includes returns a boolean if found, can 2nd par for start point
    console.log("Includes boolean for x is: ", str.includes("wsdfhere"));
    //check for start string return a BOOLEAN
    console.log("Does the string start with x: ", str.startsWith("Plad"));
    //check if it ends with return boolean
    console.log("Does the string end with x: ", str.endsWith("!"));


})()