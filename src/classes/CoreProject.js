import { Project } from "./Project.js";
import { addTaskToProject } from "../extensions/addTaskToProject.js";
import { removeTaskFromProject } from "../extensions/removeTaskFromProject.js";

class CoreProject extends Project {
    constructor(title) {
        super(title);
        this.createdByUser = false;
    }
}

Object.assign(Project.prototype, addTaskToProject);
Object.assign(Project.prototype, removeTaskFromProject);

export { CoreProject };