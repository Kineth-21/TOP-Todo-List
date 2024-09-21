import { updateContent } from "./content.js";
import Project from "./project.js";
import { displayTodo } from "./todoList.js";

// const projects = [new Project("Baking", "I want to bake a cake for my friend's birthday.", new Date(2024, 12, 24), "High")
//     , new Project("Guitar", "I want to learn how to play the guitar", new Date(2024, 1, 21), "Low")
//     , new Project("Spanish", "I want to learn how to speak Spanish", new Date(), "Medium")
// ];

const projects = [];

function addProject(project){;
    projects.push(project);
    saveToLocalStorage();
    displayProjects();
}

function removeProject(index){;
    projects.splice(index, 1)
    saveToLocalStorage();
    displayProjects();
}

export let activeProject = null; // Global state for the active project

function setActiveProject(project) {
    activeProject = project;
}

function displayProjects() {
    const projectList = document.querySelector(".projectList");
    projectList.textContent = "";

    projects.forEach((project, index) => {
        const projectContainer = document.createElement("div");
        projectContainer.classList.add("projectContainer");

        projectContainer.textContent = project.title;

        projectList.appendChild(projectContainer);

        // Create the SVG for the remove button
        const removeProjectBtn = document.createElement("svg");
        removeProjectBtn.classList.add("removeProjectBtn");
        
        removeProjectBtn.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF">
                <path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
            </svg>
        `;

        // Add click event listener to the SVG
        removeProjectBtn.addEventListener("click", (event) => {
            event.stopPropagation();
            removeProject(index);  // Remove the project at the current index
            displayProjects();     // Refresh the project list after removal
        });

        projectContainer.appendChild(removeProjectBtn);

        function handleClick(event) {
            setActiveProject(project);
            event.preventDefault();
            updateContent(project);
            displayTodo(project);
            displayProjects();
        }

        projectContainer.removeEventListener("click", handleClick);
        projectContainer.addEventListener("click", handleClick);

        if (project._priority === "Medium") {
            projectContainer.style.backgroundColor = "#FFDB58";
        } else if (project._priority === "High") {
            projectContainer.style.backgroundColor = "#EE204D";
        }
    });
}

// Save projects to localStorage
function saveToLocalStorage() {
    const projectsJson = projects.map(project => project.toJson());
    localStorage.setItem('projects', JSON.stringify(projectsJson));
}

// Load projects from localStorage
function loadFromLocalStorage() {
    const projectsJson = localStorage.getItem('projects');
    if (projectsJson) {
        const projectArray = JSON.parse(projectsJson);
        projectArray.forEach(projectData => {
            projects.push(Project.fromJSON(projectData));  // Restore projects from JSON
        });
    }
}

export { addProject, removeProject, displayProjects, saveToLocalStorage, loadFromLocalStorage, projects };
