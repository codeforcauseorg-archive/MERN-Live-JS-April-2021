function sayHi(){
    console.log("First line");
    return () => console.log("Hello Anuj");
}

setTimeout(sayHi(), 3000);
console.log("Wohoooo");