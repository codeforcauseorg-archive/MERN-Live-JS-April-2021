let fruits = new Map();

fruits.set("apple", "a sweet red fruit");
fruits.set("mango", "king of fruits");
fruits.set("grapes", "angoor khatte hai");


// console.log();

for (const pair of fruits.entries()) {
    let [a, b] = pair;
    console.log(a, b);
}