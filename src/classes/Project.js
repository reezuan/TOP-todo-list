import { v4 as uuidv4 } from "uuid";
import { addTaskToProject } from "../extensions/addTaskToProject.js";
import { removeTaskFromProject } from "../extensions/removeTaskFromProject.js";
import { renameProject } from "../extensions/renameProject.js";
import { deleteProject } from "../extensions/deleteProject.js";

class Project {
    constructor(title) {
        const id = uuidv4();

        Object.defineProperty(this, "id", {
            value: id,
            writable: false,
            enumerable: true,
            configurable: false
        });

        this.title = title;
        this.tasks = [];
    }
}

Object.assign(Project.prototype, addTaskToProject);
Object.assign(Project.prototype, removeTaskFromProject);
Object.assign(Project.prototype, renameProject);
Object.assign(Project.prototype, deleteProject);

export { Project };