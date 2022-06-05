"use strict";
$(document).ready(function(){
    // alert('hi 4');
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




    // end jquery
});
    