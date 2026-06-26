let accordian = document.getElementsByClassName("accordian");

function onClick() {
  Array.from(accordian).forEach((element, index) => {
    element.addEventListener("click", () => {
      console.log(index);
      var panel = element.nextElementSibling;
      closeAll(panel);
      if (panel.style.display == "block") {
        panel.style.display = "none";

        element.ariaExpanded = "false";
      } else {
        panel.style.display = "block";
        element.ariaExpanded = "true";
      }
    });
  });
}
onClick();
function closeAll(panels) {
  Array.from(accordian).forEach((element) => {
    if (panels != element.nextElementSibling) {
      var panel = element.nextElementSibling;
      panel.style.display = "none";
      element.ariaExpanded = "false";
    }
  });
}
Array.from(accordian).forEach((element, index) => {
  element.addEventListener("keydown", (e) => {
    console.log(e.keyCode);
    let nextind = 0;
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        console.log(index);
        nextind = (index + 1) % accordian.length;
        accordian[nextind].focus();
        break;
      case "ArrowUp":
        e.preventDefault();
        if (index == 0) nextind = accordian.length - 1;
        else nextind = index - 1;
        accordian[nextind].focus();
        break;
      case "Home":
        e.preventDefault();
        accordian[0].focus();

      case "End":
        e.preventDefault();
        accordian[accordian.length - 1].focus();

      case "Enter":
        var panel = element.nextElementSibling;
        closeAll(panel);
        if (panel.style.display == "block") {
          panel.style.display = "none";

          element.ariaExpanded = "false";
        } else {
          panel.style.display = "block";
          element.ariaExpanded = "true";
        }
      case "Space":
        var panel = element.nextElementSibling;
        closeAll(panel);
        if (panel.style.display == "block") {
          panel.style.display = "none";

          element.ariaExpanded = "false";
        } else {
          panel.style.display = "block";
          element.ariaExpanded = "true";
        }
    }
  });
});

Array.from(accordian).forEach((element, index) => {
  element.addEventListener("click", () => {
    sessionStorage.setItem("index", index);
    sessionStorage.setItem(
      "autosave",
      element.nextElementSibling.style.display,
    );
  });
});

if (sessionStorage.getItem("index")) {
  let index = sessionStorage.getItem("index");
  let open = accordian[index].nextElementSibling;
  open.style.display = sessionStorage.getItem("autosave");
}
