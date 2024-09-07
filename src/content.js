import Todo from "./todo";
import { displayTodo } from "./todoList";

const content = document.querySelector("#content");
const showTodoDialog = document.querySelector("#addTodoDialog");

export function updateContent(project) {
    content.textContent = "";   

    const contentTitle = document.createElement("div");
    contentTitle.textContent = "Project: " + project._title;

    const addTodo = document.createElement("button");
    addTodo.classList.add("addTodo");
    addTodo.textContent = "Add todo";
    addTodo.addEventListener("click", () => {
        showTodoDialog.showModal();
    });

    const contentDescription = document.createElement("div");
    contentDescription.textContent = "Description: " + project._description;

    content.appendChild(contentTitle);
    content.appendChild(contentDescription);
    content.append(addTodo);

    // Remove previous event listener to avoid multiple bindings
    const submitTodo = document.querySelector("#submitTodo");
    submitTodo.removeEventListener("click", handleSubmitTodo);
    submitTodo.addEventListener("click", handleSubmitTodo);

    function handleSubmitTodo(event) {
        event.preventDefault();
        const task = document.querySelector("#todoTask").value;
        const description = document.querySelector("#todoDescription").value;

        const toBeAddedTodo = new Todo(task, description);
        project.addTodo(toBeAddedTodo);
        showTodoDialog.close();
        console.log(project._tasks);
        displayTodo(project); // Ensure the display is updated
    }

    displayTodo(project); // Initial display
}
