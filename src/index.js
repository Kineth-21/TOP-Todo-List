import './style.css';
import { addProject, displayProjects } from './projectList';
import Project from './project';

const showProjectDialog = document.querySelector("#addProject");
const dialogProject = document.querySelector("#addProjectDialog");

showProjectDialog.addEventListener("click", () =>{
    dialogProject.showModal();
});

displayProjects();

const submitProject = document.querySelector("#submitProject");
submitProject.addEventListener("click", (event)=>{
    event.preventDefault();
    
    const title = document.querySelector("#projectTitle").value;
    console.log(title);
    const description = document.querySelector("#projectDescription").value;
    console.log(description);

    const dueDate = document.querySelector("#dueDate").value;
    console.log(dueDate);
    
    const formattedDate = new Date(dueDate);
    const priority = document.querySelector("#priority").value;
    console.log(priority);

    const project = new Project(title, description, formattedDate, priority);

    addProject(project);
    dialogProject.close();
    displayProjects();
});