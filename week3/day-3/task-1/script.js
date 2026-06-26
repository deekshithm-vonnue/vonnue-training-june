class ShapeBase {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  describe() {
    return [this.name, this.color];
  }

  static compare(a, b) {
    if (a.getArea() > b.getArea()) {
      return a;
    } else {
      return b;
    }
  }
}

let obj = new ShapeBase("rect", "red");
console.log(obj.describe());

class Circle extends ShapeBase {
  constructor(name, color, radicus) {
    super(name, color);

    this.radicus = radicus;
  }
  getArea() {
    return Math.PI * this.radicus ** 2;
  }

  getPerimeter() {
    return 2 * Math.PI * this.radicus;
  }
  describe() {
    return `This is circle with radicus ${this.r}`;
  }
}

class Rectangle extends ShapeBase {
  constructor(name, color, w, h) {
    super(name, color);

    this.w = w;
    this.h = h;
  }
  getArea() {
    return this.w * this.h;
  }
  getPerimeter() {
    return 2 * this.w + 2 * this.h;
  }
  describe() {
    return `This is rectangle with width ${this.b} and height ${this.h}`;
  }
}

class Triangle extends ShapeBase {
  constructor(name, color, base, height) {
    super(name, color);
    this.base = base;
    this.height = height;
  }
  getArea() {
    return (this.base * this.height) / 2;
  }

  describe() {
    return `This is Triangle with base ${this.base} and height ${this.height}`;
  }
}

class ShapeCollection {
  constructor() {
    this.collection = [];
  }
  add(shape) {
    this.collection.push(shape);
  }
  removeById(id) {
    this.collection.splice(id, id);
  }
  getByType(type) {
    let matching = [];
    this.collection.forEach((shape) => {
      if (shape instanceof type) {
        matching.push(shape);
      }
    });
    return matching;
  }

  sortByArea() {
    this.collection.sort((a, b) => {
      return a.getArea() - b.getArea();
    });
  }

  getTotalArea() {
    let total = 0;
    this.collection.forEach((shape) => {
      total += shape.getArea();
    });
  }
  getCollection() {
    return this.collection;
  }
}

let triangle = new Triangle("deeku", "red", 5, 7);
let square = new Rectangle("deu", "red", 5, 7);
let shapes = new ShapeCollection();
shapes.add(triangle);
shapes.add(square);
console.log(shapes.getByType(Triangle));
shapes.sortByArea();
shapes.getCollection().forEach((collect) => {
  console.log(collect);
});

console.log(Object.getPrototypeOf(square));
console.log(Circle.name);
