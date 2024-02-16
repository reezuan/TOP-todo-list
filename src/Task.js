import { v4 as uuidv4 } from 'uuid';
import { addLabel } from "./addLabel.js";
import { deleteTask } from "./deleteTask.js";

class Task {
    constructor(title, description, dueDate, priority) {
        this.id = uuidv4();
        this.title = title;
        this.description = description;
        this.dueDate = new Date(dueDate);
        this.priority = priority;
        this.labels = [];
    }
};

Object.assign(Task.prototype, deleteTask);
Object.assign(Task.prototype, addLabel);

export { Task };