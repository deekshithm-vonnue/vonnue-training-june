function gradeToLetter(score) {
  if (score > 90) {
    return "A";
  } else if (score > 80) {
    return "B";
  } else if (score > 70) {
    return "C";
  } else if (score > 60) {
    return "D";
  } else {
    return "F";
  }
}
console.log("if-else");
console.log(gradeToLetter(91));

function gradeToLetter_switch(score) {
  let grade;
  switch (true) {
    case score > 90:
      grade = "A";
      break;
    case score > 80:
      grade = "B";
      break;
    case score > 70:
      grade = "C";
      break;
    case score > 60:
      grade = "D";
      break;
    default:
      return "F";
  }
  return grade;
}
console.log("switch");
console.log(gradeToLetterSwitch(89));

function gradeToLetterTernary(score) {
  return score > 90
    ? "A"
    : score > 80
      ? "B"
      : score > 70
        ? "C"
        : score > 60
          ? "D"
          : "F";
}
console.log("ternary");
console.log(gradeToLetterTernary(65));

function gradeToLetterLookup(score) {
  var lookup = {
    90: "A",
    80: "B",
    70: "C",
    60: "D",
    50: "F",
  };
  let grade = String(Math.floor(score / 10) * 10);
  return lookup[grade];
}
console.log("lookup");
console.log(gradeToLetterLookup(89));

console.log("1M calls");
console.time();
for (let i = 0; i < 1000000; i++) {
  gradeToLetter(65);
}
console.timeEnd();

console.time();
for (let i = 0; i < 1000000; i++) {
  gradeToLetterSwitch(85);
}
console.timeEnd();

console.time();
for (let i = 0; i < 1000000; i++) {
  gradeToLetterTernary(75);
}
console.timeEnd();

console.time();
for (let i = 0; i < 1000000; i++) {
  gradeToLetterLookup(98);
}
console.timeEnd();

let items = [3, 4, 5, 6, 6];
function processQueueWhile(items) {
  let processing = 0;
  while (processing < items.length) {
    console.log(`processing: ${items[processing]}`);
    processing++;
  }
}
console.log("while");
processQueueWhile(items);

function processQueueDoWhile(items) {
  let processing = 0;
  do {
    console.log(`processing: ${items[processing]}`);
    processing++;
  } while (processing < items.length);
}
console.log("do_while");
processQueueDoWhile(items);
console.log("for");
function processQueue(items) {
  for (let item of items) {
    console.log(`processing: ${item}`);
  }
}
processQueue(items);

let users = {
  deekshith: {
    email: "deekshith@gmail.com",
    role: "admin",
  },
  deeku: {
    email: "deekku",
    role: "admin",
  },
  rida: {
    email: "rida@j.com",
    role: "worker",
  },
};

function validateUser(user) {
  if (
    user in users &&
    users[user].email &&
    users[user].email.includes("@") &&
    users[user].role == "admin"
  ) {
    console.log("validated");
  } else {
    console.log("invalid");
  }
}
validateUser("deekshith");
