"use strict";
$(document).ready(function(){

    // generateMainDisplay();
    //
    // function generateMainDisplay(){
    //     let html = '';
    //     html += "<p class='text-center'>First post</p>"
    //     $('#displayMain').html(html);
    // }
    //
    // function getMovieDatabase(){
    //     return fetch(GLITCH_MOVIE_URL).then(res => res.json());
    // }
    //
    // function appendMainDisplay(movieObj){
    //     let html = '';
    //     html += `<div>`;
    //     html += `<h3>Title: ${movieObj.title} </h3>`;
    //     html += `<h6>Rating: ${movieObj.rating} </h6>`;
    //     html += `</div>`;
    //     $('#displayMain').append(html);
    // }
    //
    // getMovieDatabase().then(res => res.forEach(element => appendMainDisplay(element)));

    function generateMainDisplay2(){
        let html = '';
        html += `2^4 = ${2**4}`;


        document.getElementById("displayMain").innerText += html;
    }

    function addToMainDisplay(str){
        document.getElementById("displayMain").innerText += "\n" + str;
    }

    // generateMainDisplay2();

    const sayHello = (name = "Petrus") => {
        const greeting = "\nHello " + name + "!\n ";
        return greeting;
    }

    // addToMainDisplay(sayHello("Peter"));
    // addToMainDisplay(sayHello());
    // addToMainDisplay(numArray);
    // const [a,b] = numArray;
    // addToMainDisplay(a);
    // addToMainDisplay(b);

    // addToMainDisplay(numArray);
    // const numArray2 = numArray.filter(n => n%2 === 0);
    // addToMainDisplay(numArray2);
    // const numArray3 = numArray2.map(n => n**2);
    // addToMainDisplay(numArray3.join(' '));

    addToMainDisplay(numArray.join(" "));
    const numArray4 = numArray.reduce( (finalArray, num) => {
        num += 1;
        finalArray.push(num);
        return finalArray;
    }, []  );

    addToMainDisplay(numArray4.join(" "))


    // end jquery
});