import { v4 as uuidv4 } from 'uuid';
import { addLabel } from "./addLabelToTask.js";

class Task {
    constructor(title, description, dueDate) {
        const id = uuidv4();

        Object.defineProperty(this, "id", {
            value: id,
            writable: false,
            enumerable: true,
            configurable: false
        });

        this.title = title;
        this.description = description;
        this.dueDate = new Date(dueDate);
        this.labels = [];
        this.associatedProject;
        this.completed = false;
    }
};

Object.assign(Task.prototype, addLabel);

export { Task };