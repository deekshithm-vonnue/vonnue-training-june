function darkMode() {
  var checkBox = document.getElementById("dark");
  console.log(checkBox);
  if (checkBox.checked == true) {
    document.querySelector("html").setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    checkBox.setAttribute("aria-pressed", "true");
  } else {
    document.querySelector("html").removeAttribute("data-theme");
    localStorage.setItem("theme", "");
    checkBox.setAttribute("aria-pressed", "flase");
  }
}

window.addEventListener("load", () => {
  document
    .querySelector("html")
    .setAttribute("data-theme", localStorage.getItem("theme"));
});

function openNavbar() {
  const element = document.getElementById("nav-Bar");
  const button = document.getElementsByClassName("hamburger");
  const dialog = document.getElementsByClassName("drawer-log");
  console.log(element);
  console.log();
  element.classList.add("open");
  button[0].setAttribute("aria-expanded", "true");
  document.getElementsByTagName("body")[0].style.overflow = "hidden";
  button[0].addEventListener("keydown", function (event) {
    if (event.key == "Escape") {
      const element = document.getElementById("nav-Bar");
      element.classList.remove("open");
    }
  });
  dialog[0].showModal();
}

function closeNavbar() {
  const element = document.getElementById("nav-Bar");
  const dialog = document.getElementsByClassName("drawer-log");

  console.log(dialog);
  element.classList.remove("open");
  const button = document.getElementsByClassName("hamburger");
  button[0].setAttribute("aria-expanded", "false");
  document.getElementsByTagName("body")[0].style.overflow = "scroll";
  dialog[0].close();
}
