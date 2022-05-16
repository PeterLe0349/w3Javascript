"use strict";

    console.log("hello 16");

    let pos = 0;



    function swimFishie(){
        pos = 0;
        let id = null;
        let fishie = document.getElementById("animate");
        clearInterval(id);
        id = setInterval(swim, 5);
        function swim(){
            if(pos==900){
                clearInterval(id);
            }else{
                pos++;
                fishie.style.top = pos + "px";
                fishie.style.left = pos + "px";
            }
        }

    }

