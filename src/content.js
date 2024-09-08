import Todo from "./todo";
import { displayTodo } from "./todoList";
import { formatDueDate, areDatesEqual, daysUntilDue, isDueDateBeforeToday } from "./dateMethods";
import { activeProject } from "./projectList";

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

    const contentDueDate = document.createElement("div");
    contentDueDate.textContent = "Due Date: " + formatDueDate(project._dueDate);
    
    const dueDate = new Date(project._dueDate);
    dueDate.setHours(0, 0, 0, 0);
    
    const overdue = document.createElement("div");

    if(isDueDateBeforeToday(dueDate)){
        overdue.textContent = "THIS PROJECT IS OVERDUE!";
        overdue.style.color= "red";
    }
    else if(areDatesEqual(dueDate)){
        overdue.textContent = "THIS PROJECT IS DUE TODAY!";
        overdue.style.color= "red";
    }
    else{
        overdue.textContent = "There is still " + daysUntilDue(dueDate) + " days till project is due.";
    }
    
    content.appendChild(contentTitle);
    content.appendChild(contentDescription);
    content.appendChild(contentDueDate);
    content.appendChild(overdue);
    content.append(addTodo);
    

    // Remove previous event listener to avoid multiple bindings
    const submitTodo = document.querySelector("#submitTodo");
    submitTodo.removeEventListener("click", handleSubmitTodo);
    submitTodo.addEventListener("click", handleSubmitTodo);

    

    displayTodo(project); // Initial display
}

function handleSubmitTodo(event) {
        event.preventDefault();
        const task = document.querySelector("#todoTask").value;
        const description = document.querySelector("#todoDescription").value;

        // const toBeAddedTodo = new Todo(task, description);
        // project.addTodo(toBeAddedTodo);
        // showTodoDialog.close();
        // console.log(project._tasks);
        // displayTodo(project); // Ensure the display is updated
        if (activeProject) {
            activeProject.addTodo(new Todo(task, description));  // Add todo to the active project
            // updateContent(activeProject);  // Update content to reflect new todo
            displayTodo(activeProject);
            showTodoDialog.close();
        }
    }