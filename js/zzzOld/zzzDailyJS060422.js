"use strict";
$(document).ready(function(){
    // alert('hi 4');
    let mainDisplay = document.getElementById('mainDisplay');
    $('#displayMain').append(`<p>hello jun 4</p>`).append(`<p>hello jun 4.2</p>`).append(`<p>hello jun 4.3</p>`);
    document.getElementById('displayMain').setAttribute('class','text-center');
    const myPromise = fetch(`https://sequoia-fuchsia-woolen.glitch.me/movies`);
    // myPromise.then( promise => promise.json().then( resolve => console.log(resolve)));

    function generateMainDisplayInformation(n){
        let html ='';
        for(let i = 0; i < n; i++){
            for(let j = 0; j < i; j++){
                html += `${i}`;
            }
            html += `<br>`;
        }

        document.getElementById('displayMain').innerHTML += html;
    }

    generateMainDisplayInformation(10);
    let paraz = document.createElement("li");
    paraz.append("hello");
    console.log(paraz);
    // document.getElementById('mainDisplay').appendChild(para);

    // Create a p element:
    const para = document.createElement("p");

// Create a text node:
    const node = document.createTextNode("This is a paragraph.");

// Append text node to the p element:
    para.appendChild(node);
    console.log(para);

// Append the p element to the body:
    document.getElementById('displayMain').append(paraz);





    // end jquery
});
    