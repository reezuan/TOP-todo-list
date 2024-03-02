import retrieveProjectsFromStorage from "./retrieveProjectsFromStorage.js";

export default function getProject(projectId) {
    const allProjects = retrieveProjectsFromStorage();

    console.log(allProjects.find(Project => Project.id == projectId));

    return allProjects.find(Project => Project.id == projectId);
}