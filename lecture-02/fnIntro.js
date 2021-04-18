
// function fname(first, second, third){
//     // statements
//     console.log("Say hello", first, second, third);
// }


// let another = fname;

// console.log(another);

// another();

let hey = function(params){
    console.log("Hello");
}

let arr = [];
{
    let count = 10;
    while(count > 0){
        let fn = function(){
            let think = String(count);
            console.log(think);
        }
        arr.push(fn);
        count -= 1;
    }
}

console.log(arr);

// console.log(arr[0] === arr[9]);

arr[0]();
arr[9]();





