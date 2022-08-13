"use strict";
$(document).ready(function(){
    document.getElementById("displayMain").innerHTML += "test";
    fetch("https://randomuser.me/api/").then(res => res.json()).then(user =>{
        console.log(user);
        let url = user.results[0].picture.large;
        console.log(user.results[0].picture.large);
        document.getElementById("avatarPic").src=url;
    });








    // end jquery
})    ;