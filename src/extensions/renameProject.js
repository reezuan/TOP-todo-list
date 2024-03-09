import { retrieveProjectsFromStorage } from "../utils/retrieveProjectsFromStorage.js";

const renameProject = {
    rename(newTitle) {
        let allProjects = retrieveProjectsFromStorage();
        let currentIndex = allProjects.findIndex(Project => Project.id === this.id);

        this.title = newTitle;

        if (currentIndex != -1) {
            allProjects.splice(currentIndex, 1, this);
        };
        
        localStorage.setItem("allProjects", JSON.stringify(allProjects));
    }
};

export { renameProject };