import { v4 as uuidv4 } from "uuid";

class Project {
    constructor() {
        const id = uuidv4();

        Object.defineProperty(this, "id", {
            value: id,
            writable: false,
            enumerable: true,
            configurable: false
        });

        this.tasks = [];
    }
}

export { Project };