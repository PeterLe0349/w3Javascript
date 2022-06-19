"use strict";
$(document).ready(function(){

    // generateMainDisplay();

    function generateMainDisplay(){
        let html = '';
        getFullDatabase().then( jsonRes => jsonRes.forEach( element => {

                $('#displayMain').append(generateMovieData(element));
            }))  //first then
            .catch(error => console.error(error)); //catch first then
    }

    function getFullDatabase(){
        return fetch(GLITCH_MOVIE_URL).then( res => res.json());
    }

    function generateMovieData(movieObj){
        let html = '';
        html += `<div>`;
        html += `<h5>Title: ${movieObj.title}</h5><br>`;
        html += `<strong>Director: ${movieObj.director} </strong><br>`;
        html += `<em>Plot: ${movieObj.plot}</em>`;
        html += `</div><hr>`; //close end div
        return html;
    }

    function patchMovie(movieObj, id){
        let url = `${GLITCH_MOVIE_URL}/${id}`;
        let options = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'},
            body: JSON.stringify(movieObj)
        }
        return fetch(url, options);
    }
    //
    //     let quickPatchObj = {rating: '10.0', title: 'Final Fanta', genre: 'Anime'};
    // patchMovie(quickPatchObj, 8).then(res => console.log("successful patch"))

    function deleteMovie(id){
        let url = `${GLITCH_MOVIE_URL}/${id}`;
        let options = {
            method: 'DELETE'
        }
        return fetch(url, options);
    }

    // deleteMovie(11).catch(error => console.error(error));


    $('#carouselExampleControls').carousel();












    // end jquery
});






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

// function generateMainDisplay2(){
//     let html = '';
//     html += `2^4 = ${2**4}`;
//
//
//     document.getElementById("displayMain").innerText += html;
// }
//
// function addToMainDisplay(str){
//     document.getElementById("displayMain").innerText += "\n" + str;
// }

// generateMainDisplay2();

// const sayHello = (name = "Petrus") => {
//     const greeting = "\nHello " + name + "!\n ";
//     return greeting;
// }

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

// addToMainDisplay(numArray.join(" "));
// const numArray4 = numArray.reduce( (finalArray, num) => {
//     num += 1;
//     finalArray.push(num);
//     return finalArray;
// }, []  );
//
// addToMainDisplay(numArray4.join(" "))

// if (true) {
//     let x = 5;
// }
// console.log(typeof x);
// function sayHello2(name) {
//     return 'Hello, ' + name + '!';
// }
// // const sayHello = name => { 'Hello, ' + name + '!' };
// const sayHello = (name) => `Hello, ${name}!`;
// const sayHello3 = (name) => { 'Hello, ' + name + '!' }
// console.log(sayHello('Peter'));
// console.log(sayHello2('Peter'));
// console.log(sayHello3('Peter'));

// let numbers = [1, 2, 3, 4, 5];
// numbers.map(n => n * 3);
// console.log(numbers);

//
// const isDivisibleBy3 = n => n % 3 === 0;
//
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//
// console.log(numbers.filter(isDivisibleBy3));
// console.log(numbers);

