const topObj = document.getElementById("top-container");
const middle = document.getElementById("middle-container");
const bottom = document.getElementById("bottom-container");

topObj.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("top-conatiner catched, " + "source element: " + e.srcElement.id);
});

middle.addEventListener(
  "click",
  (e) => {
    e.stopPropagation();
    console.log(
      "middle-conatiner catched, " + "source element: " + e.srcElement.id,
    );
  },
  true,
);

bottom.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log(
    "bottom-conatiner catched, " + "source element: " + e.srcElement.id,
  );
  e.stopImmediatePropagation();
});

bottom.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log(
    "2nd time - bottom-conatiner catched, " +
      "source element: " +
      e.srcElement.id,
  );
});

const buttonObj = document.getElementById("submit-button");
buttonObj.addEventListener("click", (e) => {
  e.preventDefault();
});

const anchorObj = document.getElementById("anchor-tag");
anchorObj.addEventListener("click", (e) => {
  e.preventDefault();
});
