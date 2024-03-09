import { retrieveProjectsFromStorage } from "../utils/retrieveProjectsFromStorage.js";

const deleteProject = {
    delete() {
        let allProjects = retrieveProjectsFromStorage();
        let currentIndex = allProjects.findIndex(Project => Project.id === this.id);

        if (currentIndex != -1) {
            allProjects.splice(currentIndex, 1);
        };
        
        localStorage.setItem("allProjects", JSON.stringify(allProjects));
    }
};

export { deleteProject };