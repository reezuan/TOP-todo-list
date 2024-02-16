import { v4 as uuidv4 } from 'uuid';
import { addItemToList } from './addItemToList.js';
import { removeItemFromList } from "./removeItemFromList.js";

class GlobalToDoList {
    constructor(title, colour, addToFavourites) {
        this.id = uuidv4();
        this.title = title;
        this.colour = colour;
        this.addToFavourites = addToFavourites;
        this.toDoItems = [];
    }

    get title() {
        return this._title;
    }

    set title(value) {
        this._title = value;
    }
}

Object.assign(GlobalToDoList.prototype, addItemToList);
Object.assign(GlobalToDoList.prototype, removeItemFromList);

export { GlobalToDoList };