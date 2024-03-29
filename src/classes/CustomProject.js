import { Project } from "./Project.js";
import { addTaskToProject } from "../extensions/addTaskToProject.js";
import { removeTaskFromProject } from "../extensions/removeTaskFromProject.js";
import { renameProject } from "../extensions/renameProject.js";

class CustomProject extends Project {
    constructor(title) {
        super();
        this.title = title;
        this.createdByUser = true;
    }
}

Object.assign(Project.prototype, addTaskToProject);
Object.assign(Project.prototype, removeTaskFromProject);
Object.assign(Project.prototype, renameProject);

export { CustomProject };