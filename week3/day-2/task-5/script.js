const debounce = (mainFunction, delay) => {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      mainFunction(...args);
    }, delay);
  };
};

//Not found Result div
let articles = document.querySelectorAll("article");
console.log(articles);
const noResult = document.createElement("div");
noResult.setAttribute("id", "notfound");
const newContent = document.createTextNode("No results found");
noResult.appendChild(newContent);

//live search
function livesearch() {
  console.log(document.getElementById("searchbox"));
  let searchQuery = document.getElementById("searchbox").value;
  console.log(searchQuery);
  let flag = 0;
  for (let i = 0; i < articles.length; i++) {
    let text = articles[i].innerHTML;
    text = text.replace(/(<span class="highlight">|<\/span>)/gim, "");
    articles[i].innerHTML = text;
    if (
      articles[i].textContent.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      articles[i].style.display = "revert";
      const regex = new RegExp(searchQuery, "gi");
      let newText = text.replace(regex, '<span class="highlight">$&</span>');

      if (searchQuery !== "") {
        articles[i].innerHTML = newText;
        text = text.replace(/(<span class="highlight">|<\/span>)/gim, "");
      }
      flag = 1;
    } else {
      articles[i].style.display = "none";
    }
  }

  if (flag == 0) {
    document.getElementsByTagName("header")[0].appendChild(noResult);
  } else {
    noResult.remove();
  }
}
let searchInput = document.getElementById("searchbox");

searchInput.addEventListener(
  "keyup",
  debounce((e) => {
    livesearch();
  }, 300),
);

//clear buttton

const BUTTONOBJ = document.getElementById("clear");

BUTTONOBJ.addEventListener("click", (e) => {
  document.getElementById("searchbox").value = "";
  livesearch();
});
