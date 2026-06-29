let orders = [
  { id: 1, items: ["apple", "orange", "grape"] },
  {
    id: 2,
    items: ["orange", "grape", "pappaya"],
  },
  {
    id: 3,
    items: ["mango", "grape", "waterlemon"],
  },
  {
    id: 1,
    items: ["mango", "grape", "waterlemon"],
  },
];

//Flatmap
function retriveItem(id) {
  let flatten = orders
    .flatMap((obj) => {
      if (obj.id === id) {
        return obj.items;
      }
    })
    .filter((element) => element !== undefined);

  console.log(flatten);
}

let parent_id = 1;
//retriveItem(parent_id);

const flat = orders.flatMap((obj)=>[obj.id , obj.items])
console.log(flat)