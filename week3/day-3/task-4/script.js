// let orders = [
//   { id: 1, items: ["apple", "orange", "grape"] },
//   {
//     id: 2,
//     items: ["orange", "grape", "pappaya"],
//   },
//   {
//     id: 3,
//     items: ["mango", "grape", "waterlemon"],
//   },
//   {
//     id: 1,
//     items: ["mango", "grape", "waterlemon"],
//   },
// ];

// //Flatmap
// function retriveItem(id) {
//   let flatten = orders
//     .flatMap((obj) => {
//       if (obj.id === id) {
//         return obj.items;
//       }
//     })
//     .filter((element) => element !== undefined);

//   console.log(flatten);
// }

// let parent_id = 1;
// retriveItem(parent_id);

// let log = [
//   { id: 1, entry: "error" },
//   { id: 2, entry: "error" },
//   { id: 3, entry: "paid" },
// ];

// const foundlast = log.findLast((element) => element.entry == "error");
// console.log(foundlast);
// const foundlastindex = log.findLastIndex((element) => element.entry == "error");
// console.log(foundlastindex);

// //build chunk function
// const chunksize = 2;

// function chunk(arr, size) {
//   let chunkarray = [];
//   for (let i = 0; i < arr.length; i += chunksize) {
//     let chunk = arr.slice(i, i + chunksize);
//     chunkarray.push(chunk);
//   }
//   return chunkarray;
// }
// const array = [1, 2, 3, 4, 5, 5, 6, 7, 8, 8];
// const chunkarray = chunk(array, chunksize);
// console.log(chunkarray);

// //zip
// const zip = (...arr) =>
//   Array(Math.max(...arr.map((a) => a.length)))
//     .fill()
//     .map((_, i) => arr.map((a) => a[i]));
// console.log(zip([2, 3, 5], [12, 5, 6], [2, 5, 6, 7]));

//groupby
const inventory = [
  { name: "asparagus", type: "vegetables", quantity: 5 },
  { name: "bananas", type: "fruit", quantity: 0 },
  { name: "goat", type: "meat", quantity: 23 },
  { name: "cherries", type: "fruit", quantity: 5 },
  { name: "fish", type: "meat", quantity: 22 },
];
function typeCheck(obj) {
  return obj.type;
}
function groupBy(arr, keyFn) {
  let newObject = {};
  arr.forEach((element) => {
    let type = keyFn(element);
    if (!newObject[type]) newObject[type] = [];
    newObject[type].push(element);
  });
  return newObject;
}
console.log(groupBy(inventory, typeCheck));


const calender = Array.from({ length: 12 }, (_, i) => {
  let month = new Date(2026, i).toLocaleString("default", { month: "long" });
  let daysinmonth = new Date(2026, i+1, 0).getDate();
  let days = Array.from({ length: daysinmonth }, (_, i) => i + 1);
  let obj = {};
  obj[month] = days;
  return obj;
});
console.log(calender);
