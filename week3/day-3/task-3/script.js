let users = [
  { id: 1, name: "Deekshith" },
  { id: 2, name: "rida" },
  { id: 3, name: "hawas" },
  { id: 4, name: "alan" },
];

//impure
function updateUser(users, id, changes) {
  users.forEach((element) => {
    if (element.id == id) {
      element.id = changes;
    }
  });
}
updateUser(users, 2, 5);
console.log(users);

//pure
let modified = structuredClone(users);
function updateUsers(users, id, changes) {
  users.forEach((element) => {
    if (element.id == id) {
      element.id = changes;
    }
  });
}
updateUsers(modified, 4, 2);
console.log(users);
console.log(modified);
