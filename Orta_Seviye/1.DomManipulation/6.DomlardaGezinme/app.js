let value;

const todoList = document.querySelector(".list-group");
const todo = document.querySelector(".list-group-item:nth-child(2)");
const cardrow = document.querySelector(".card.row");

value= todoList;
value = todo;
value = cardrow;

// Child Nodes - Text Dahil

value = todoList.childNodes;
console.log(value);
value = todoList.childNodes[0];
console.log(value);
// Children - Element

value = todoList.children;
console.log(value);
value = todoList.children[todoList.children.length - 1];
console.log(value);
value = todoList.children[2].textContent = "Değişti";
console.log(value);


value = cardrow;
console.log(value);
value = cardrow.children;
console.log(value);
value = cardrow.children[2].children[1].textContent = "Burası da değişti";
console.log(value);

value = todoList;
console.log(value);
value = todoList.firstElementChild;
console.log(value);
value = todoList.lastElementChild;
console.log(value);
value = todoList.children.length;
console.log(value);
value = todoList.childElementCount;
console.log(value);

value = cardrow;
console.log(value);
value = cardrow.parentElement;
console.log(value);
value = cardrow.parentElement.parentElement;
console.log(value);

// Element Kardeşleri

value = todo;
console.log(value);
value = todo.previousElementSibling;
console.log(value);
value = todo.nextElementSibling;
console.log(value);
value = todo.nextElementSibling.nextElementSibling;
console.log(value);

value = todo.previousElementSibling.previousElementSibling;
console.log(value);