class Shape {
  inform = function () {
    console.log("This is a generic Shape");
  };
}

class Circle extends Shape {
  inform = function () {
    console.log("This is a Circle Shape");
  };
}

class Square extends Shape {
  inform = function () {
    console.log("This is a Square Shape");
  };
}

class ShapeFactory {
  static create = function (shape?: "square" | "circle"): Shape {
    if (shape) {
      if (shape === "circle") {
        return new Circle();
      } else if (shape === "square") {
        return new Square();
      }
    }
    return new Shape();
  };
}

let s1 = ShapeFactory.create();
s1.inform();

let s2 = ShapeFactory.create("circle");
s2.inform();

let s3 = ShapeFactory.create("square");
s3.inform();
