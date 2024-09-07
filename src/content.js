const content = document.querySelector("#content");
const showTodoDialog = document.querySelector("#addTodoDialog");

export function updateContent(project){
    content.textContent = "";   

    const contentTitle = document.createElement("div");
    contentTitle.textContent = "Project: " + project._title;

    const addTodo = document.createElement("button");
    addTodo.textContent ="Add todo"
    addTodo.addEventListener("click", (event) => {showTodoDialog.showModal()});

    const contentDescription = document.createElement("div");
    contentDescription.textContent = "Description: " + project._description;

    content.appendChild(contentTitle);
    content.appendChild(addTodo);
    content.appendChild(contentDescription);
}

