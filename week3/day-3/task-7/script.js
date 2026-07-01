const columns = document.querySelectorAll(".task-columns");

function addDragEvents(task) {
  task.addEventListener("dragstart", (event) => {
    task.id = "dragged-task";
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("task", task.id);
  });

  task.addEventListener("dragend", () => {
    task.removeAttribute("id");
    saveState();
  });
}

document.querySelectorAll(".task").forEach(addDragEvents);

columns.forEach((column) => {
  column.addEventListener("dragover", (event) => {
    event.preventDefault();
  });
});

columns.forEach((column) => {
  column.addEventListener("drop", (event) => {
    event.preventDefault();

    const draggedTask = document.getElementById("dragged-task");
    column.querySelector(".tasks").appendChild(draggedTask);

    column.classList.remove("dragged-enter");
    saveState();
  });
});

columns.forEach((column) => {
  column.addEventListener("dragenter", () => {
    column.classList.add("dragged-enter");
  });
});

columns.forEach((column) => {
  column.addEventListener("dragleave", () => {
    column.classList.remove("dragged-enter");
  });
});

function createList(content) {
  const task = document.createElement("li");
  task.className = "task";
  task.draggable = true;
  task.innerHTML = `
    ${content}
    <button onclick="deleted(event)">𝌕</button>
  `;
  task.tabIndex = 0;
  addDragEvents(task);
  return task;
}

document.querySelectorAll(".add").forEach((button) => {
  button.addEventListener("click", () => {
    const column = button.closest(".task-columns");
    const input = column.querySelector("input");

    if (input.value.trim() === "") return;

    column.querySelector(".tasks").appendChild(createList(input.value));

    input.value = "";
    saveState();
  });
});

function deleted(event) {
  event.target.closest(".task").remove();
  saveState();
}

function saveState() {
  const state = Array.from(columns).map((column) =>
    Array.from(column.querySelectorAll(".task")).map((task) =>
      task.childNodes[0].textContent.trim(),
    ),
  );

  localStorage.setItem("state", JSON.stringify(state));
}

function loadState() {
  const saved = localStorage.getItem("state");
  if (!saved) return;

  const state = JSON.parse(saved);

  columns.forEach((column, index) => {
    const list = column.querySelector(".tasks");
    list.innerHTML = "";

    state[index].forEach((content) => {
      list.appendChild(createList(content));
    });
  });
}

loadState();


let selectedTask = null;
let currentColumn = 0;

document.addEventListener("keydown", (event) => {
  if (!document.activeElement.classList.contains("task")) return;
  const task = document.activeElement;
  if (event.code === "Space") {
    event.preventDefault();
    if (selectedTask === null) {
      selectedTask = task;
      currentColumn = Array.from(columns).indexOf(
        task.closest(".task-columns"),
      );
      task.classList.add("selected");
      columns[currentColumn].classList.add("dragged-enter");
      return;
    }
    columns[currentColumn].querySelector(".tasks").appendChild(selectedTask);

    columns[currentColumn].classList.remove("dragged-enter");
    selectedTask.classList.remove("selected");

    selectedTask.focus();

    selectedTask = null;
    saveState();
    return;
  }
  if (event.code === "ArrowRight") {
    event.preventDefault();
    columns[currentColumn].classList.remove("dragged-enter");
    currentColumn = (currentColumn + 1) % columns.length;
    columns[currentColumn].classList.add("dragged-enter");
  }

  if (event.code === "ArrowLeft") {
    event.preventDefault();
    columns[currentColumn].classList.remove("dragged-enter");
    currentColumn = (currentColumn - 1 + columns.length) % columns.length;
    columns[currentColumn].classList.add("dragged-enter");
  }
});
