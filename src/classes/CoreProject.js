import { Project } from "./Project.js";

class CoreProject extends Project {
    constructor(title) {
        super(title);
        this.createdByUser = false;
    }
}

export { CoreProject };