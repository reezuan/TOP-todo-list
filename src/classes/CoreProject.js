import { Project } from "./Project.js";

class CoreProject extends Project {
    constructor() {
        super();
        this.createdByUser = false;
    }
}

export { CoreProject };