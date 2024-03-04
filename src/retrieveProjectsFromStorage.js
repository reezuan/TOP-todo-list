import { Project } from "./Project.js";

export default function retrieveProjectsFromStorage() {
    if (localStorage.getItem("allProjects")) {
        const allProjects = JSON.parse(localStorage.getItem("allProjects"));
        
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