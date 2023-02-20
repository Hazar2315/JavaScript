//Dinamik Element Silme

const todoList = document.querySelector("ul.list.group");
const todos = document.querySelectorAll("li.list-group-item");

todos[1].remove();

// todoList.removeChild(todoList.lastElementChild);
// todoList.removeChild(todos[3]);

console.log(todos);
console.log(todoList);