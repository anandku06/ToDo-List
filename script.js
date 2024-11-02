let todo = JSON.parse(localStorage.getItem("todo")) || [];

const todoInput = document.getElementsById("todoInput");

const todolist = document.getElementById("todoList");
const todoCount = document.getElementById("todoCount");
const addButton = document.querySelector(".btn");
const deleteButton = document.getElementById("deleteBtn");

document.addEventListener("DOMContentLoaded", function () {
  addButton.addEventListener("click", addTask);
  todoInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      addTask();
    }
  });
  deleteButton.addEventListener("click", deleteAllTasks);
  displayTasks();
});

function addTask() {
  const newTask = todoInput.value.trim();
  if (newTask !== "") {
    todo.push({
        text: newTask, 
        disabled: false
    });
    saveToLocalStorage()
    todoInput.value = "";
    displayTasks()
  }
}

function saveToLocalStorage(){
    localStorage.setItem("todo", JSON.stringify(todo))
}