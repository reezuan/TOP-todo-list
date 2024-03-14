import { retrieveProjectsFromStorage } from "../utils/retrieveProjectsFromStorage.js";

function getProject(projectId) {
    const allProjects = retrieveProjectsFromStorage();
    return allProjects.find(Project => Project.id === projectId);
}

export { getProject };