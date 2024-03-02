import retrieveProjectsFromStorage from "./retrieveProjectsFromStorage.js";

export default function getProject(projectId) {
    const allProjects = retrieveProjectsFromStorage();
    return allProjects.find(Project => Project.id == projectId);
}