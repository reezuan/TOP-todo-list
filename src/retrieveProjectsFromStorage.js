import { Project } from "./Project.js";

export default function retrieveProjectsFromStorage() {
    if (localStorage.getItem("allProjects")) {
        const allProjects = JSON.parse(localStorage.getItem("allProjects"));
        
        allProjects.forEach(project => {
            Object.setPrototypeOf(project, Project.prototype);
        });
        
        return allProjects;
    } else {
        return;
    }
}