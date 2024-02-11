import { addToDoItem } from "./addToDoItem.js";

class ToDoList {
    constructor(title) {
        this.title = title;
        this.toDoItems = [];
    }

    get title() {
        return this._title;
    }

    set title(value) {
        this._title = value;
    }
}

Object.assign(ToDoList.prototype, addToDoItem);

export { ToDoList };