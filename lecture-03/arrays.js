let arr = new Array(10);

arr[4] = 100;


console.log(arr);

console.log(arr.length);

arr.push(400);

console.log(arr);
console.log(arr.length);

let another = arr.slice()

console.log(another);


arr.push(800);
console.log(arr);
console.log(another);


