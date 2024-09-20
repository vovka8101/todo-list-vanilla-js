/** @type {HTMLButtonElement} */
const newTodoBtn = document.getElementById("btn-toggle-add-todo");

/** @type {HTMLFormElement} */
const addTodoForm = document.getElementById("form-add-todo");

const todoList = document.getElementById("todo-list");

function toggleAddTodo() {
  addTodoForm.classList.toggle("hidden");

  if (addTodoForm.classList.contains("hidden")) {
    newTodoBtn.innerText = "Додати справу";
  } else {
    newTodoBtn.innerText = "Відмінна";
  }
}

function reduceTodoItem() {
  switch (e.target.dataset.action) {
    case 'remove':
      e.target.closest(".todo-item").remove();
      break;
    case 'edit':
      console.log("edit");
      break;
    case 'complete':
      e.target.closest(".todo-item").classList.toggle("completed");
      break;
    default:
      break;
  }
}

function addNewTodo(event) {
  event.preventDefault();

  const todoData = {};

  Array.from(this.elements).forEach(element => {
    if (element.name) {
      todoData[element.name] = element.value;
    }
  });

  console.log(todoData);
}

newTodoBtn.addEventListener("click", toggleAddTodo);

todoList.addEventListener("click", reduceTodoItem);

addTodoForm.addEventListener("submit", addNewTodo);
