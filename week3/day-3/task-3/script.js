let users = [
  { id: 1, name: "Deekshith" },
  { id: 2, name: "rida" },
  { id: 3, name: "hawas" },
  { id: 4, name: "alan" },
];
let global = 2;
//impure
function updateUser(users, id, changes) {
  users.forEach((element) => {
    if (element.id == id) {
      element.id = changes + global;
    }
  });
}
updateUser(users, 2, 5);
console.log(users);

//pure
function updateUsers(users, id, changes) {
  modified.forEach((element) => {
    if (element.id == id) {
      element.id = changes;
    }
  });
}
updateUsers(users, 4, 2);
console.log(users);
