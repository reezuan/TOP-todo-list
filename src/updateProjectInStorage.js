import retrieveProjectsFromStorage from "./retrieveProjectsFromStorage.js";

export default function updateProjectInStorage(Project) {
    const allProjects = retrieveProjectsFromStorage();
    let currentIndex = allProjects.findIndex(object => object.id === Project.id);

    if (currentIndex != -1) {
        allProjects.splice(currentIndex, 1, Project);
    };
    
    localStorage.setItem("allProjects", JSON.stringify(allProjects));
}