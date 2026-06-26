let imgObj = document.getElementsByClassName("gallery-image");
let overlay = document.getElementsByClassName("overlay");
let overImg = document.getElementsByClassName("overlay-img");
let dialog = document.getElementsByTagName("dialog");
let body = document.querySelector("body");
console.log(dialog);
var currentImg = null;
Array.from(imgObj).forEach((element) => {
  element.addEventListener("click", () => {
    overlay[0].style.display = "flex";
    overImg[0].src = element.getAttribute("src");
    currentImg = element;
    body.classList.add("hidden");
    dialog[0].showModal();
  });
});

let prev = document.getElementById("prev-button");
let next = document.getElementById("next-button");
function prevImage() {
  console.log();
  if (currentImg.closest("figure").previousElementSibling.tagName == "FIGURE") {
    let prevElement =
      currentImg.closest("figure").previousElementSibling.children[0];

    overlay[0].style.display = "flex";
    overImg[0].src = prevElement.getAttribute("src");
    currentImg = prevElement;
  }
}

function nextImage() {
  console.log(currentImg.closest("figure").nextElementSibling);
  if (currentImg.closest("figure").nextElementSibling != null) {
    let nextElement =
      currentImg.closest("figure").nextElementSibling.children[0];
    overlay[0].style.display = "flex";
    overImg[0].src = nextElement.getAttribute("src");
    currentImg = nextElement;
  }
}

prev.addEventListener("click", (e) => {
  prevImage();
});

next.addEventListener("click", (e) => {
  nextImage();
});

document.addEventListener("keydown", (e) => {
  if (e.keyCode == 37) {
    prevImage();
  }
});
document.addEventListener("keydown", (e) => {
  if (e.keyCode == 39) {
    nextImage();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.keyCode == 27) {
    overlay[0].style.display = "none";
    dialog[0].close();
    body.classList.remove("hidden");
  }
});

let pageX;
function handleStart(e) {
  e.preventDefault();
  pageX = e.changedTouches[0].pageX;
  console.log(pageX);
}

function handleEnd(e) {
  pageX = e.changedTouches[0].pageX - pageX;
  if (pageX < 0) {
    prevImage();
  } else {
    nextImage();
  }
}
overImg[0].addEventListener("touchstart", handleStart);

overImg[0].addEventListener("touchend", handleEnd);
