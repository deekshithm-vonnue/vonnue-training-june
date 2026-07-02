function defaultBinding() {
  console.log(this);
}
defaultBinding();

//binding
// "use strict";
function defaultBindingStrict() {
  console.log(this);
}
defaultBindingStrict();

//implict
var books = {
  title: "first book",
  printTitle: function () {
    console.log(this.title);
  },
};
books.printTitle();

//explicit
const name = {
  firstName: "Deekshith",
  lastName: "M",
};

let printFullName = function (city, state) {
  console.log(
    this.firstName + " " + this.lastName + " " + "from " + city + " " + state,
  );
};

printFullName.call(name, "chalad", "kannur");

printFullName.apply(name, ["sultan", "wayand"]);

let printing = printFullName.bind(name, "chalad", "kannur");
printing();
("use strict");
class Employee {
  constructor(name) {
    this.name = name;
  }
  getName() {
    console.log(this.name);
  }
}

//classfield
let employee = new Employee("deekshiht");
let employeename = employee.getName;
employeename();

class Employee {
  constructor(name) {
    this.name = name;
  }
  getName = () => {
    console.log(this.name);
  };
}
let employee = new Employee("deekshith");
let employeename = employee.getName;
employeename();

//binding
class Employee {
  getName() {
    console.log(this.name);
  }
}
const names = {
  name: "deekshith",
};
let employee = new Employee();
let employeename = employee.getName.bind(names);
employeename();

//arrow function
class Employee {
  constructor(name) {
    this.name = name;
    this.getName = () => {
      console.log(this.name);
    };
  }
}
let employee = new Employee("deekshith");
let employeename = employee.getName;
employeename();

//BindingAll;
const modules = {
  x: 45,
  getX() {
    return this.x;
  },
};

const unbinded = modules.getX;
console.log(unbinded());

const binded = modules.bind;

const Obj = {
  x: 45,
  y: 24,
  getX: function () {
    return this.x;
  },
  getY: function () {
    return this.y;
  },
};
function bind(obj) {
  Object.keys(obj).forEach((key) => {
    if (typeof obj[key] === "function") {
      obj[key] = obj[key].bind(obj);
    }
  });
}
let getting = Obj.getX;
console.log(getting());
bind(Obj);
let gets = Obj.getX;
console.log(gets());

//arrow timeout
class SetTime {
  name = "Deekshith";

  getName() {
    console.log(`${this.name}`);
  }
  arrowName = () => {
    console.log(this.name);
  };
}
let time = new SetTime();
const foo = time.getName;
const goo = time.arrowName;
setTimeout(goo(), 300);
setTimeout(foo(), 300);
