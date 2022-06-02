"use strict";
$(document).ready(function(){
    console.log("hello 25");
    let num = 1;
    $('#mainHeader').html($('#mainHeader').html()+ makeHeader());
    makeParagraph(1);
    makeParagraph(2);
    makeParagraph(3);
    makeParagraph(4);


    function makeParagraph(index) {
        num++;
        $(`.para:nth-of-type(${index})`).html(`<span >P#${num} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci amet consectetur ipsum magni, nesciunt nobis officia, porro ratione reprehenderit, sed voluptate? Accusamus illum impedit perspiciatis temporibus. A, illo, molestiae.</span>`);
    }





    function makeHeader() {
        let newString = `
<h1 class="text-center">Today: ${new Date()}</h1>
<article class="text-center fw-bolder mb-5">Breaking news!! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad animi, aperiam at atque blanditiis deserunt eaque error eveniet explicabo illo illum impedit labore laboriosam, placeat quis rerum sint sit, veniam.</article> `;
        return newString;
    }







   // end jquery
});