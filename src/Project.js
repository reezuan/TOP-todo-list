import { v4 as uuidv4 } from "uuid";
import { addTaskToProject } from "./addTaskToProject.js";
import { removeTaskFromProject } from "./removeTaskFromProject.js";

class Project {
    constructor(title, colour, addToFavourites) {
        const id = uuidv4();

        Object.defineProperty(this, "_id", {
            value: id,
            writable: false,
            enumerable: true,
            configurable: false
        });

        this._title = title;
        this._colour = colour;
        this.addToFavourites = addToFavourites;
        this.tasks = [];
    }

    get id() {
        return this._id;
    }

    get title() {
        return this._title;
    }

    set title(newTitle) {
        this._title = newTitle;
    }

    get colour() {
        return this._colour;
    }

    set colour(newColour) {
        this._colour = newColour;
    }
}

Object.assign(Project.prototype, addTaskToProject);
Object.assign(Project.prototype, removeTaskFromProject);

export { Project };