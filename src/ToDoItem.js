import { v4 as uuidv4 } from 'uuid';
import { associateList } from "./associateList.js";
import { deleteToDoItem } from "./deleteToDoItem.js";

class ToDoItem {
    constructor(title, description, dueDate, priority) {
        this.id = uuidv4();
        this.title = title;
        this.description = description;
        this.dueDate = new Date(dueDate);
        this.priority = priority;
        this.associatedLists = [];
    }
};

Object.assign(ToDoItem.prototype, deleteToDoItem);
Object.assign(ToDoItem.prototype, associateList);

export { ToDoItem };