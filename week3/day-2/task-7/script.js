const option = {
  root: null,
  rootMargin: "0px",
  threshold: "0.1",
};

const callback = (entries, obsever) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const element = entry.target;
      console.log(element);
      element.classList.add("visible");
    } else {
      const element = entry.target.classList.remove("visible");
    }
  });
};

const observer = new IntersectionObserver(callback, option);

document.querySelectorAll(".articles").forEach((entries) => {
  observer.observe(entries);
});

const progressBar = document.getElementById("progress-bar");
const setProgressBar = () => {
  let progressWidth = (window.scrollY / document.body.scrollHeight) * 100;
  progressBar.style.width = progressWidth + "%";
  // requestAnimationFrame(setProgressBar());
};
if (progressBar) {
  window.addEventListener("scroll", setProgressBar);
}

let backTop = document.getElementsByClassName("back-top");

window.onscroll = function () {
  if (document.documentElement.scrollTop > 300) {
    backTop[0].style.display = "block";
  } else {
    backTop[0].style.display = "none";
  }
};

backTop[0].addEventListener("click", (e) => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

requestAnimationFrame(setProgressBar);
