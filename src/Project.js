import { v4 as uuidv4 } from "uuid";
import { addTaskToProject } from "./addTaskToProject.js";
import { removeTaskFromProject } from "./removeTaskFromProject.js";

class Project {
    constructor(title, colour, addToFavourites) {
        this.id = uuidv4();
        this.title = title;
        this.colour = colour;
        this.addToFavourites = addToFavourites;
        this.tasks = [];
    }

    get title() {
        return this._title;
    }

    set title(value) {
        this._title = value;
    }
}

Object.assign(Project.prototype, addTaskToProject);
Object.assign(Project.prototype, removeTaskFromProject);

export { Project };