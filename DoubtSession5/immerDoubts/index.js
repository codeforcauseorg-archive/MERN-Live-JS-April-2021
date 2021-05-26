

let array = [[2, 4, 5, 6], [2,3, 7, 6 , 8], [3, 5, 6, 8]];


let arr2 = [...array];

for (let index = 0; index < array.length; index++) {
    arr2[index] = [...array[index]];
}

console.log(array[0]===arr2[0]);