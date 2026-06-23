const employees = [
  { name: "Hawas", dept: "Engineering", salary: 10000, yearsExp: 3 },
  { name: "Hawas-backer", dept: "Sales", salary: 20000, yearsExp: 5 },
  { name: "Deekshith", dept: "Marketing", salary: 40000, yearsExp: 7 },
  { name: "Akshay", dept: "Engineering", salary: 70000, yearsExp: 8 },
  { name: "Deeku", dept: "Sales", salary: 170000, yearsExp: 2 },
  { name: "Backer", dept: "Engineering", salary: 20000, yearsExp: 1 },
  { name: "Backer-Hawas", dept: "Sales", salary: 20000, yearsExp: 8 },
  { name: "vinod", dept: "Engineering", salary: 10000, yearsExp: 9 },
  { name: "riya", dept: "HR", salary: 15000, yearsExp: 10 },
  { name: "rida", dept: "Engineering", salary: 510000, yearsExp: 5 },
  { name: "rinsha", dept: "Engineering", salary: 230000, yearsExp: 9 },
  { name: "Hawasbacker", dept: "Sales", salary: 120000, yearsExp: 2 },
  { name: "Benny", dept: "Finance", salary: 25000, yearsExp: 1 },
  { name: "Benny-backer", dept: "Sales", salary: 120000, yearsExp: 25 },
  { name: "Hawas-back", dept: "Sales", salary: 20000, yearsExp: 7 },
  { name: "Niketh", dept: "Finance", salary: 25000, yearsExp: 2 },
  { name: "Wilson", dept: "Engineering", salary: 720000, yearsExp: 5 },
  { name: "Hawas-Benny", dept: "Engineering", salary: 120000, yearsExp: 5 },
  { name: "Gokul", dept: "Sales", salary: 120000, yearsExp: 8 },
  { name: "Hawas-backer", dept: "Sales", salary: 20000, yearsExp: 7 },
];

const topEngineering = employees
  .filter((employee) => (employee.dept = "Engineering"))
  .filter((employee) => employee.salary > 70000)
  .map((employee) => ({ name: employee.name, salary: employee.salary }))
  .sort((a, b) => b.salary - a.salary);
// console.log(employees)

//nested config
const user = {
  id: 4,
  name: "deekshith",
  age: 21,
};

const { id, name, age } = user;
console.log(name);

var a = {
  id: 1,
  name: "hawas",
  age: 21,
};

var b = {
  id: 2,
  name: "rida",
  age: 21,
};

var c = { ...a, ...b };

console.log(Object.entries(c));
console.log(Object.keys(c));
console.log(Object.values(c));

const duplicateUser = structuredClone(user);
duplicateUser.id = 5;
console.log(user);
