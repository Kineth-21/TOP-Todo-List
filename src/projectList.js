import { updateContent } from "./content.js";
import Project from "./project.js";
import { displayTodo } from "./todoList.js";

const projects = [new Project("Baking", "I want to bake a cake for my friend's birthday.", new Date(2024, 12, 24), "High")
    , new Project("Guitar", "I want to learn how to play the guitar", new Date(2024, 1, 21), "Low")
    , new Project("Spanish", "I want to learn how to speak Spanish", new Date(), "Medium")
];

function addProject(project){;
    projects.push(project);
}

function removeProject(project){;
    projects.pop(project);
}

export let activeProject = null; // Global state for the active project

function setActiveProject(project) {
    activeProject = project;
}

function displayProjects(){
    const projectList = document.querySelector(".projectList");
    projectList.textContent = "";

    projects.forEach(project => {
        const projectContainer = document.createElement("div");
        projectContainer.classList.add("projectContainer");

        projectContainer.textContent = project.title;

        projectList.appendChild(projectContainer);

        function handleClick(event) {
            setActiveProject(project);
            event.preventDefault();
            updateContent(project);
            displayTodo(project);
        }

        projectContainer.removeEventListener("click", handleClick);

        projectContainer.addEventListener("click", handleClick);

        if(project._priority === "Medium"){
            projectContainer.style.backgroundColor = "#FFDB58";
        }
        else if(project._priority === "High"){
            projectContainer.style.backgroundColor = "#EE204D";
        }
    });
}



// function saveToLocalStorage() {
//     const projectsJson = projects.map(project => project.toJson());
//     localStorage.setItem("projects", JSON.stringify(projectsJson));
// }

export {addProject, removeProject, displayProjects, projects};