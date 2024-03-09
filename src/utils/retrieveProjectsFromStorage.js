import { Project } from "../classes/Project.js";

function retrieveProjectsFromStorage() {
    if (localStorage.getItem("allProjects")) {
        const allProjects = JSON.parse(localStorage.getItem("allProjects"));
        console.log(allProjects);
        
        allProjects.forEach(project => {
            Object.setPrototypeOf(project, Project.prototype);

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