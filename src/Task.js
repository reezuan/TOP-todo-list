import { v4 as uuidv4 } from 'uuid';
import { addLabel } from "./addLabel.js";
import { deleteTask } from "./deleteTask.js";

class Task {
    constructor(title, description, dueDate, priority) {
        const id = uuidv4();

        Object.defineProperty(this, "_id", {
            value: id,
            writable: false,
            enumerable: true,
            configurable: false
        });

        this._title = title;
        this._description = description;
        this.dueDate = new Date(dueDate);
        this._priority = priority;
        this.labels = [];
        this.associatedProject;
        this.completed = false;
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

    get description() {
        return this._description;
    }

    set description(newDescription) {
        this._description = newDescription;
    }

    get priority() {
        return this._priority;
    }

    set priority(newPriority) {
        this._priority = newPriority;
    }
};

Object.assign(Task.prototype, deleteTask);
Object.assign(Task.prototype, addLabel);

export { Task };