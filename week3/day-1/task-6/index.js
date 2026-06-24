function changeColor(newColor) {
  const elem = document.getElementById(navigation);
  elem.style.color = "red";
}

const obj = document.getElementsByClassName("headline");
console.log(obj);

const tagObj = document.getElementsByTagName("a");
console.log(tagObj);

const queryObj = document.querySelector("#skills");
console.log(queryObj);

const matches = document.querySelectorAll("p");
console.log(matches);

//DOM traversal
const goalsParent = document.getElementById("goals").parentElement;
console.log(goalsParent);
const goalsFistChild = document.getElementById("goals").firstElementChild;
console.log(goalsFistChild);

const goalsLastChild = document.getElementById("goals").lastElementChild;
console.log(goalsLastChild);

const goalsNextsibling = document.getElementById("goals").nextElementSibling;
console.log(goalsNextsibling);

function addCard(title, body, imageURL) {
  const newCard = document.createElement("div");
  const newTitle = document.createElement("h2");
  const newBody = document.createElement("p");
  const newImg = document.createElement("img");
  newCard.id = "card" + document.getElementById("container").childElementCount;
  newTitle.textContent = title;
  newCard.appendChild(newTitle);
  newBody.textContent = body;
  newCard.appendChild(newBody);
  newImg.src = imageURL;
  newCard.appendChild(newImg);
  const parent = document.getElementById("container");
  console.log(parent);
  parent.appendChild(newCard);
}

addCard(
  "The hero",
  "the world is good",
  "https://picsum.photos/seed/picsum/200/300",
);

function remove(id) {
  const element = document.getElementById(id);
  element.remove();
}
//remove("card0");

function clearAllCards() {
  const element = document.getElementById("container");
  element.textContent = "";
}
clearAllCards();
addCard(
  "The hero",
  "the world is good",
  "https://picsum.photos/seed/picsum/200/300",
);
