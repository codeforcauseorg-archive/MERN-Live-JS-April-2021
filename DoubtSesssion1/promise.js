// let yes = new Promise(function(pass, fail){

//     setTimeout(pass, 3000, "passed");
//     setTimeout(fail, 2000, "failed");

// });

// function resolve(output){
// console.log("Passed and output :", output);
// }

// function failure(output){
// console.log("Failed and output : ",output);
// }

// yes.then(resolve).catch(failure)

let axios = require('axios');


let pr = axios.get("https://api.github.com/users/vasudev19126");
console.log(pr);
let pr2 = pr.then(function(res){
    console.log(res.data);
    return res.data;
})
console.log(pr2, "adkjs");

pr2.then(function(res){
    console.log("chaining");
    console.log(res.login);
}).catch(function(error){
    console.log(error);
})

console.log("chjasd");