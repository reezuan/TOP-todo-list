import { CustomProject } from "../classes/CustomProject.js";

function retrieveProjectsFromStorage() {
    if (localStorage.getItem("allProjects")) {
        const allProjects = JSON.parse(localStorage.getItem("allProjects"));
        
        allProjects.forEach(project => {
            Object.setPrototypeOf(project, CustomProject.prototype);

            project.tasks.forEach(task => {
                task.dueDate = new Date(task.dueDate);
            });
        });
        
        return allProjects;
    } else {
        return;
    }
}

export { retrieveProjectsFromStorage };