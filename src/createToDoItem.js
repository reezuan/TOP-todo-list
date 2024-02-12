import { ToDoItem } from "./ToDoItem.js";

function createToDoItem(title, description, dueDate, priority) {
    const newToDoItem = new ToDoItem(title, description, new Date(dueDate), priority);

    return newToDoItem;
};

export { createToDoItem };