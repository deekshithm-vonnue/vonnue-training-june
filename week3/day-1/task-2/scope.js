var sum = 10;
let addition = 24;

var gravity = 9.8;
const pie = 3.14;

var myCar = "volvo";
let myBike = "bullet";

var user_Id = 1242;
let user_name = "deeju";
total = 5;
console.log(total);
var total;

if (true) {
  var sum = 20;
  let bike = "hello";
  const YEAR = 2026;
}

//console.log(bike) // reference error
console.log(sum);

//console.log(fifty)
let fifty = 40;

console.log(hundred);
var hundred = 100;

function outer() {
  var name = "deekshith";
  function middle() {
    let value = 10;
    console.log(name);
    function inner() {
      console.log(value);
      let userId = 2;
    }
    inner();
  }
  middle();
}

outer();

for (var i = 1; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, 100);
}
for (let i = 1; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, 100);
}
