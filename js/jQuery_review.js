"use strict";
$(document).ready(function(){
    const person = {
        name: "Peter",
        age: 130,
        city: "Dallas"
    };
    let data =  $('#midColumn').html() + `<p><h1>Another added para</h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid amet aperiam, facilis id ipsam iste laborum magni modi mollitia quisquam quos totam vero voluptas! Commodi ea modi possimus voluptatum! Fuga?</p>`;
    // $('#midColumn').html(data);
    // console.log(JSON.stringify(person));
    //
    // let myData = fetch('../data/inventory.json');
    // myData.then(response =>
    // console.log(response));

    let myData2 = fetch('../data/inventory.json').then( response => {
        response.json().then( users => {
            users.forEach( user => {
                // do something with each user object...
                console.log(user);
            });
        });
    });


});