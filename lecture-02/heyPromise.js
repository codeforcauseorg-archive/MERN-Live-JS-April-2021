let age = 20;

let yes = new Promise(function(pass, fail){

        setTimeout(pass, 3000, "passed");
        setTimeout(fail, 2000, "failed");
 
});

function resolve(output){
    console.log("Passed and output :", output);
}

function failure(output){
    console.log("Failed and output : ",output);
}


yes.then(resolve).catch(failure);

console.log("Hurray");
