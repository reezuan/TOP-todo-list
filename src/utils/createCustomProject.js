import { CustomProject } from "../classes/CustomProject.js";

function createCustomProject(title) {
    const newProject = new CustomProject(title);
    return newProject;
};

export { createCustomProject };