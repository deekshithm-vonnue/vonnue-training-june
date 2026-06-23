//function declaration

function greet(name, greeting = "Hello") {
  console.log(`${name}, ${greeting}`);
}
greet("Hawas", "hellooo");
//function expression

const greets = function (name, greeting = "Hello") {
  console.log(`${name}, ${greeting}`);
};
greets("Abin");

//arrow function

const greetings = (name, greeting = "Hello") => {
  console.log(`${name}, ${greeting}`);
};

greetings("Rida", "Hey");

//object method
const obj = {
  greeting(name, greeting = "Hello") {
    console.log(`${name}, ${greeting}`);
  },
};
obj.greeting("Deekshith");

//calculator object
const calculator = {
  add(x, y) {
    return x + y;
  },

  subtract(x, y) {
    return x - y;
  },
  multiple(x, y) {
    return x * y;
  },
  divide(x, y) {
    if (y == 0) {
      return "division not possible with zero";
    }
    return x / y;
  },
};

console.log(calculator.add(2, 3));
console.log(calculator.subtract(5, 4));
console.log(calculator.multiple(23, 2));
console.log(calculator.divide(4, 0));
console.log(calculator.divide(4, 2));

//Multpier Function
function createMultplier(factor) {
  return function (n) {
    return n * factor;
  };
}

console.log(createMultplier(3)(7));

// Demonstrate arguments object and rest parameters
function myFunction(x, y, z) {
  console.log(arguments[0]);
  console.log(arguments[1]);
  console.log(arguments[2]);
}

myFunction(1, 2, 3);
function addition(...params) {
  let total = 0;
  for (const param of params) {
    total += param;
  }
  return total;
}
console.log(`total :${addition(4, 5, 6, 7, 1, 2, 3)}`);

//why arrow function cannot be used
function myFun(x, y) {
  console.log(arguments);
}
myFun(1, 2);

const fun = (x, y) => {
  console.log(arguments);
};
// fun(1, 2);
