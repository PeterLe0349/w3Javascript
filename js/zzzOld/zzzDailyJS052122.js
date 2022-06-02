"use strict";
console.log("hello 21");
let click = -1;
const myCarouselElement = document.querySelector('#carouselExampleIndicators');
const carousel = new bootstrap.Carousel(myCarouselElement, {
    interval: 300,
    wrap: true
});
document.querySelector('#logSubBtn').addEventListener('click', function(e) {
    e.preventDefault();
    click *= -1;
    console.log(click);
    if(click === -1){
        carousel.pause = true;
    }else if(click === 1){
        carousel.cycle();
    }
    });
