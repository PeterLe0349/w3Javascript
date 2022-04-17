"use strict";
(function(){
    console.log("Hello String Templaes JS");
    //can use back ticks to define a string
    //ticks allow quotes inside
    let str = `this is a string 'String'`;
    console.log(str);
    //ticks allow multi line strings
    let strTickMulti =
    `one
    two
    `
    console.log(strTickMulti);

    //template literals allow variables and expressions inside strings
    // `  ${...}`  use ticks and squiggly brackets, Doesn't work in Internet explorer
    let firstName = "Peter";
    let lastName = "Le";
    let fullName = `${firstName} ${lastName}`;
    console.log(fullName);
    //can use expressions inside
    let price = 20;
    let VAT = .3
    let total = `Total: ${price*(1+VAT).toFixed(3)}`;
    console.log(total);
    //TEMPLATES literals allow variables in strings
    let header = "Templates Literals";
    let fruits = ["apples", "peaches", "guavas"];
    let html = `<h2>${header}</h2><ul>`;
    for(const x of fruits){
        html += `<li>${x}</li>`
    }
    html += `</ul>`;
    document.getElementById("demo").innerHTML = html;


})()