import { Project } from "./Project.js";
import saveProjectToStorage from "./saveProjectToStorage.js";

function createProject(title) {
    const newProject = new Project(title);
    saveProjectToStorage(newProject);

    return newProject;
};

export { createProject };