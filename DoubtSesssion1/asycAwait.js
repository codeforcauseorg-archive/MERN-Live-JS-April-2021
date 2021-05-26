let axios = require('axios');



function happy(){
    console.log("happy");
}



async function res(){
    setTimeout(function(){
        console.log("2 sec complete");
    }, 2000);
    // console.log(pr);

    setTimeout(function(){
        console.log("3 sec complete");
    }, 2000);

    setTimeout(function(){
        console.log("4 sec complete");
        // happy();
    }, 2000);

    console.log("haapy");

    
}

res();

console.log(r);