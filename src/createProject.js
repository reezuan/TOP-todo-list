import { Project } from "./Project.js";
import saveProjectToStorage from "./saveProjectToStorage.js";

function createProject(title) {
    const newProject = new Project(title);
    console.log(newProject);
    saveProjectToStorage(newProject);

    return newProject;
};

export { createProject };