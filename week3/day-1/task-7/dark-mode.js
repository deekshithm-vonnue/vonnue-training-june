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
