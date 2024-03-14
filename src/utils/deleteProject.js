import { retrieveProjectsFromStorage } from "../utils/retrieveProjectsFromStorage.js";

function deleteProject(projectId) {
    const allProjects = retrieveProjectsFromStorage();
    let projectCurrentIndex = allProjects.findIndex(Project => Project.id === projectId);

    if (projectCurrentIndex != -1) {
        allProjects.splice(projectCurrentIndex, 1);
    };
    
    localStorage.setItem("allProjects", JSON.stringify(allProjects));
}

export { deleteProject };