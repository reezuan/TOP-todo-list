import { Project } from "./Project.js";
import saveProjectToStorage from "./saveProjectToStorage.js";

function createProject(title, colour, addToFavourites) {
    const newProject = new Project(title, colour, addToFavourites);
    saveProjectToStorage(newProject);

    return newProject;
};

export { createProject };