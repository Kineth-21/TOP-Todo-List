import { updateContent } from "./content.js";
import Project from "./project.js";

const projects = [new Project("hello", "testing", new Date(), "Low")
    , new Project("hellofafafasfsssssssssssssssssssssssssssssafsa", "testing", new Date(), "Low")
    , new Project("hello", "testing", new Date(), "Low")
];

function addProject(project){;
    projects.push(project);
}

function displayProjects(){
    const projectList = document.querySelector(".projectList");
    projectList.textContent = "";

    projects.forEach(project => {
        const projectContainer = document.createElement("div");
        projectContainer.classList.add("projectContainer");

        projectContainer.textContent = project.title;

        projectList.appendChild(projectContainer);

        projectContainer.addEventListener("click", () => updateContent(project))
    });
}

// function saveToLocalStorage() {
//     const projectsJson = projects.map(project => project.toJson());
//     localStorage.setItem("projects", JSON.stringify(projectsJson));
// }

export {addProject, displayProjects, projects};