import Project from "./project.js";

const projects = [new Project("hello", "testing", new Date(), "Low")
    , new Project("hello", "testing", new Date(), "Low")
    , new Project("hello", "testing", new Date(), "Low")
];

function addProject(project){;
    projects.push(project);
    console.log("OIIII");
}

function displayProjects(){
    const content = document.querySelector("#content");
    content.innerHTML = "";

    if(projects.length === 0){
        content.textContent = "Currently empty...";
        return;
    }

    projects.forEach(project => {
        const projectContainer = document.createElement("div");
        projectContainer.classList.add("projectContainer");

        const projectTitle = document.createElement("div");
        projectTitle.textContent = "Title: " + project.title;

        const projectDesc = document.createElement("div");
        projectDesc.textContent = "Description: " + project.description;

        projectContainer.appendChild(projectTitle);
        projectContainer.appendChild(projectDesc);

        content.appendChild(projectContainer);
    });
}

// function saveToLocalStorage() {
//     const projectsJson = projects.map(project => project.toJson());
//     localStorage.setItem("projects", JSON.stringify(projectsJson));
// }

export {addProject, displayProjects};