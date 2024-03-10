import { CoreProject } from "../classes/CoreProject.js";

function createCoreProject(title) {
    const newProject = new CoreProject(title);
    return newProject;
};

export { createCoreProject };