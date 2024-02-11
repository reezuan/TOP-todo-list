import { GlobalToDoList } from "./GlobalToDoList.js";
import { addItemToList } from "./addItemToList.js";
import { removeItemFromList } from "./removeItemFromList.js";

class ToDoList extends GlobalToDoList {
    constructor(title) {
        super(title);
    }
};

Object.assign(ToDoList.prototype, addItemToList);
Object.assign(ToDoList.prototype, removeItemFromList);

export { ToDoList };