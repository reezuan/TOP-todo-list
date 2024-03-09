import { Project } from "../classes/Project.js";

function createProject(title) {
    const newProject = new Project(title);
    return newProject;
};

export { createProject };