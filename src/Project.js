import { v4 as uuidv4 } from "uuid";
import { addTaskToProject } from "./addTaskToProject.js";
import { removeTaskFromProject } from "./removeTaskFromProject.js";

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

export { Project };