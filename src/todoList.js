export function displayTodo(project){
    const todoContents = document.querySelector("#todoContent");
    todoContents.textContent = "";

    if (!project || !Array.isArray(project._tasks)) {
        todoContents.textContent = "Currently empty...";
        return;
    }

    project._tasks.forEach((todo, index) => {
        const todoContainer = document.createElement("div");
        todoContainer.classList.add("todoContainer");

        const todoTask = document.createElement("div");
        todoTask.classList.add("todoTask");
        todoTask.textContent = todo._task;;

        const todoDescription = document.createElement("div");
        todoDescription.classList.add("todoDescription")
        todoDescription.textContent = todo._description;

        const doneTask = document.createElement("button");
        doneTask.classList.add("completeTaskBtn");
        doneTask.textContent = "Clear Todo";

        doneTask.addEventListener("click", () =>{
            project._tasks.splice(index, 1);
            displayTodo(project);
        });

        todoContainer.appendChild(todoTask);
        todoContainer.appendChild(todoDescription);
        todoContainer.appendChild(doneTask);

        todoContents.appendChild(todoContainer);
    });
}