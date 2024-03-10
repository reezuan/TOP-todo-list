import { v4 as uuidv4 } from "uuid";
import { addLabelToTask } from "../extensions/addLabelToTask.js";
import { setAssociatedProjectId } from "../extensions/setAssociatedProjectId.js";

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
        this.associatedProjectId = undefined;
        this.completed = false;
    }
};

Object.assign(Task.prototype, addLabelToTask);
Object.assign(Task.prototype, setAssociatedProjectId);

export { Task };