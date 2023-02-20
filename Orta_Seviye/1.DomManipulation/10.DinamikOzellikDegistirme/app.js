const todoInput = document.getElementById("todo");
let element;


element = todoInput;
element = todoInput.classList;

// todoInput.classList.add("newClass");
// todoInput.classList.add("newClass2");
// todoInput.classList.remove("form-control");
 

element = todoInput;
element = todoInput.placeholder;
element = todoInput.getAttribute("placeholder");
todoInput.setAttribute("placeholder","mal");//atama yapmaya ayrar
element = todoInput;
todoInput.setAttribute("title","Input");
element = todoInput;

todoInput.removeAttribute("name");//silme islemi yapar

element = todoInput;
// element = todoInput.hasAttribute("name");

console.log(element);
