"use strict";
$(document).ready(function(){
    $('#stringBtn').click(function(e){
        e.preventDefault();
        $('#stringArray').html(JSON.stringify(stringArray));

    });

    $('#numBtn').click(function(e){
        $('#numberArray').html('[' + makeRandomNumArray(10,1000).toString() + ']');
    });

    $('#objectBtn').click(function(e){
       $('#objectGen').html(JSON.stringify(toolObjects));
    });










    // end jquery
});

