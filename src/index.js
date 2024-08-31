import './style.css';

console.log("Hello world");
const addProject = document.querySelector("#addProject");
const dialogProject = document.querySelector("#addProjectDialog");

addProject.addEventListener("click", () =>{
    dialogProject.showModal();
});