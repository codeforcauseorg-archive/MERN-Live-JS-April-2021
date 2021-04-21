let first = [10, 20]
let second = [100, 200]

let acc = [first, second]

let copy = acc.slice();

acc[0].push(90);

console.log(acc);
console.log(copy);

console.log(acc[0] === copy[0]);


arr.find