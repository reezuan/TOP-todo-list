import { v4 as uuidv4 } from 'uuid';
import { deleteToDoItem } from "./deleteToDoItem.js";

class ToDoItem {
    constructor(title, description, dueDate, priority) {
        this.id = uuidv4();
        this.title = title;
        this.description = description;
        this.dueDate = new Date(dueDate);
        this.priority = priority;
    }
};

Object.assign(ToDoItem.prototype, deleteToDoItem);

export { ToDoItem };