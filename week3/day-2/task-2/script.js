const todoList = document.getElementById("todolist");

todoList.addEventListener("click", (e) => {
  console.log(e.target);
  console.log(e.target.closest("li"));
  if (e.target.classList.contains("delete-button")) {
    e.target.closest("li").remove();
  }
  if (e.target.classList.contains("add-item")) {
    const newlist = document.createElement("li");
    newlist.innerHTML = `<input id="checkbox" name="checkbox" type="checkbox" /><label
            for="checkbox"
            ><span contenteditable="true">Tasks</span></label
          >
          <button class="delete-button">delete</button>
        </li>`;
    e.target.closest("ul").appendChild(newlist);
  }
});
