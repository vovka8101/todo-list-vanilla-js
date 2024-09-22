/** @type {HTMLButtonElement} */
const newTodoBtn = document.getElementById("btn-toggle-add-todo");

/** @type {HTMLFormElement} */
const addTodoForm = document.getElementById("form-add-todo");
/** @type {HTMLFormElement} */
const searchTodoForm = document.getElementById("form-search-todo");

const todoList = document.getElementById("todo-list");

function toggleAddTodo() {
  addTodoForm.classList.toggle("hidden");

  if (addTodoForm.classList.contains("hidden")) {
    newTodoBtn.innerText = "Додати справу";
  } else {
    newTodoBtn.innerText = "Відмінна";
  }
}

/**
 * @param {MouseEvent} e
*/
function reduceTodoItem(e) {
  /** @type {HTMLButtonElement} */
  const btnTarget = e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;

  switch (btnTarget.dataset.action) {
    case 'remove':
      btnTarget.closest(".todo-item").remove();
      break;
    case 'edit':
      console.log("edit");
      break;
    case 'complete':
      btnTarget.closest(".todo-item").classList.toggle("completed");
      break;
    default:
      break;
  }
}

/**
 * @param {Event} e
 * @this {HTMLFormElement}
*/
function addNewTodo(e) {
  e.preventDefault();

  const todoData = {};

  Array.from(this.elements).forEach(el => {
    if (el.name) {
      todoData[el.name] = el.value;
    }
  });
}

/**
 * @param {Event} e
 * @this {HTMLFormElement}
*/
function searchTodo(e) {
  e.preventDefault();

  const searchData = {
    filters: []
  };

  Array.from(this.elements).forEach(el => {
    if (el.name) {
      searchData[el.name] = el.value;
    } else if (el.type === 'checkbox' && el.checked) {
      searchData.filters.push(el.value);
    }
  });
}

newTodoBtn.addEventListener("click", toggleAddTodo);

todoList.addEventListener("click", reduceTodoItem);

addTodoForm.addEventListener("submit", addNewTodo);

searchTodoForm.addEventListener("submit", searchTodo);
