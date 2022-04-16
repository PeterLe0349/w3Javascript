"use strict";
(function(){
console.log("Hello STRING JS");

//slice return part of a string - can do Positive and negative indices
    // use negative to start from end *** END PART NOT INCLUDED
    const str = "Peter, David, John, Linda, Peter";
    const str2 = "Pedro, Pierre, Petr, Piotr";
    let part = str.slice(7,12);
    console.log(part);
    let endPart = str.slice(-6);
    console.log(endPart);

    //get a substring
    part = str.substring(0,5);
    console.log(part);
    part = str.substring(6);
    console.log(part);

    //substr does index and then length
    //let part2 = str.substr(3,3);
    //console.log(part2);

    //replace - only does first matdh and returns new string
    let sub = str.replace("Peter", "Petrus");
    //CASE sensitive ignore use flag /i
    console.log(sub);
    sub = str.replace("peter", "Petrus");
    console.log(sub);
    sub = str.replace(/peter/i, "Petrus");
    console.log(sub);
    //USE /g to get all instances
    sub = str.replace(/Peter/g, "Petrus");
    console.log(sub);

    //upper and lower CASE
    let big = str.toUpperCase();
    console.log(big);
    let small = str.toLowerCase();
    console.log(small);

    //concat two strings - can use + or ,
    let comb = str.concat(", ", str2);
    console.log(comb);
    //trim remove spaces on sides
    let spaces = "       3       Peter      3  ";
    console.log(spaces);
    console.log(spaces.trim());

    //Padding at start or end, works on only ONE char
    let padd = "L";
    let padded = padd.padStart(13,"x");
    document.getElementById("demo").innerHTML = padd.padStart(13,"p");
    console.log(padd);
    console.log(padded);
    console.log(padd.padEnd(13,"r"));

    //EXTRACTING string chars
    let cha = "Peter Pedro";
    console.log("The char at x is: ", cha.charAt(0));
    //get the UNICODE of char
    console.log("The unicode at char index x is : ", cha.charCodeAt(2));
    //property access - like an array but is READ ONLY
    console.log("The property access at string[x] is: ", cha[0]);

    //splitting string into array, if "" is used it'll break into characters, no sep is entire string at 0
    const strArray = str.split(",");
    console.log("Array at index x is:", strArray[2]);
    for(let i = 0; i <strArray.length; i++){
        console.log(strArray[i]);
    }
    // const strArray2 = str.split("");
    // for(let i=0; i<strArray2.length; i++){
    //     console.log(strArray2[i]);
    // }
    


})()