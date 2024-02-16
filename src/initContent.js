export default function initContent(Project) {
    const content = document.createElement("section");
    const taskList = document.createElement("div");
    
    const projectTitle = document.createElement("h2");
    projectTitle.classList.add("project-title");
    projectTitle.textContent = `${Project.title}`;

    taskList.appendChild(projectTitle);
    content.appendChild(taskList);

    return content;
}