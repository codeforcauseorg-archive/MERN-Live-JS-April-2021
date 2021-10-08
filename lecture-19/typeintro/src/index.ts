// let a : number = 10;

// function hello(a: any, b?: any) {
//   console.log(a, b);
// }

// hello("anuj");

// type Point = {
//   x: number;
//   y: number;
// };

// let item: Point = {
//   x: 67,
//   y: 56,
// };

// const user = {
//   name: "Daniel",
//   age: 26,
//   location: "hh"
// };

// user.location;

// function flipCoin() {
//     // Meant to be Math.random()
//     return Math.random < 0.5;
//   }

// function hello(a: any, b?: any): void {
//   console.log(a, b);
// }

// let a = hello("he");
// console.log(a);

// let item: { x: number; y: number } = { x: 10, y: 10 };

// type caller = number | boolean;

// let something: caller = true;

function first() {
  console.log("first(): factory evaluated");
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("first(): called");
  };
}

function second() {
  console.log("second(): factory evaluated");
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("second(): called");
  };
}

class ExampleClass {
  @first()
  @second()
  method() {}
}

let ex = new ExampleClass();

// ex.method();
