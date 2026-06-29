const fs = require("fs");
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

function parseCSV(CSV) {
  let parsedcsv = [];

  let lines = CSV.split(/\n/);
  let headline = lines[0].split(/,/);
  for (let i = 1; i < lines.length; i++) {
    let data = lines[i].split(/,/);
    let obj = {};
    for (let j = 0; j < headline.length; j++) {
      obj[headline[j]] = data[j];
    }
    parsedcsv.push(obj);
  }
  return parsedcsv;
}

function validateRows(parsedcsv) {
  csv = structuredClone(parsedcsv);
  csv.forEach((obj) => {
    if (obj["age"] >= 18) {
      obj["valid"] = true;
    } else {
      obj["valid"] = false;
    }
  });
  return csv;
}

function transformRows(validatedCsv) {
  csv = structuredClone(validatedCsv);
  csv.forEach((obj) => {
    if (typeof obj["rollno"] !== "Number" || typeof obj["age"] !== "Number") {
      obj["rollno"] = Number(obj["rollno"]);
      obj["age"] = Number(obj["age"]);
    }
  });
  return csv;
}

function filterInvalid(transformCsv) {
  csv = structuredClone(transformCsv);
  const filtered = csv.filter((obj) => obj.valid);
  return filtered;
}

function formatOuput(filterCsv) {
  csv = structuredClone(filterCsv);
  csv.forEach((obj) => {
    delete obj.valid;
  });
  return csv;
}

fs.readFile("input.txt", (err, data) => {
  if (err) throw err;
  let csv = data.toString();
  console.log("before parsing");
  console.log(data.toString());
  let parsedcsv = parseCSV(csv);
  let validatedcsv = validateRows(parsedcsv);
  let transformcsv = transformRows(validatedcsv);
  let filtereddata = filterInvalid(transformcsv);
  let output = formatOuput(filtereddata);
  console.log("output");
  console.log(output);
});

//deepFreeze
function deepFreeze(obj) {
  if (obj && typeof obj === "object") {
    const propNames = Reflect.ownKeys(obj);

    propNames.forEach((name) => {
      let value = obj[name];
      if ((value && typeof value === "object") || typeof value === "function") {
        deepFreeze(value);
      }
    });
  }
  return Object.freeze(obj);
}

const employee = {
  name: "deekshith",
  designation: "developer",
  address: {
    city: "kannur",
    district: "kannur",
  },
};

deepFreeze(employee);
console.log(employee);
employee.name = "rida";
employee.address.district = "wayand";
console.log(employee);
