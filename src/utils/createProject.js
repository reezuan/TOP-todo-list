import { Project } from "../classes/Project.js";
import { saveProjectToStorage } from "../utils/saveProjectToStorage.js";

function createProject(title) {
    const newProject = new Project(title);
    saveProjectToStorage(newProject);
    return newProject;
};

export { createProject };