const newTodoBtn = document.querySelector(".btn-new-todo");
const form = document.querySelector(".form");
const todoCategory = document.getElementById("todo-categories");
const todoName = document.getElementById("todo-input-name");
const todoText = document.getElementById("todo-input-text");
const addTodoBtn = document.getElementById("btn-add-todo");
const todoList = document.querySelector(".todo-list");

function addNewTodo() {
  form.classList.toggle("hidden");

  if (form.classList.contains("hidden")) {
    newTodoBtn.innerText = "Додати справу";
  } else {
    newTodoBtn.innerText = "Відмінна";
  }
}

newTodoBtn.addEventListener("click", addNewTodo);

todoList.addEventListener("click", function(e) {
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
});

addTodoBtn.addEventListener("click", function() {
  if (!todoName.value || !todoText.value) return;
  
  console.log("add")
  const todoItem = document.createElement("li");
  todoItem.setAttribute("class", "todo-item");

  todoItem.innerHTML = `
    <div class="todo-item-head">
      <div class="todo-category">${todoCategory.value}</div>
      <div class="todo-head-buttons">
        <button data-action="edit" class="btn-edit">edit</button>
        <button data-action="remove" class="btn-remove">remove</button>
      </div>
    </div>
    <div class="todo-item-body">
      <h3 class="todo-item-name">${todoName.value}</h3>
      <p class="todo-item-content">${todoText.value}</p>
      <button data-action="complete" class="btn-complete primary-btn">Завершити</button>
    </div>`;
  
  todoList.append(todoItem);

  todoName.value = "";
  todoText.value = "";
  addNewTodo();
});