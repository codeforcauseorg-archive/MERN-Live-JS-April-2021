function first(){
    console.log("Do this first");
    console.log("Do that first");
    second();
}

function second(){
    console.log("Do this second");
    console.log("Do that second");
    third();
    
}

function third(){
    console.log("Do this third");
    console.log("Do that third");    
}

first();