const content = document.querySelector("#content");

export function updateContent(project){
    content.textContent = "";   

    const contentTitle = document.createElement("div");
    contentTitle.textContent = "Project: " + project._title;

    const contentDescription = document.createElement("div");
    contentDescription.textContent = "Description: " + project._description;

    content.appendChild(contentTitle);
    content.appendChild(contentDescription);
}

