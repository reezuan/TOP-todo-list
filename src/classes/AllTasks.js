import { CoreProject } from "./CoreProject.js";
import { retrieveTasksFromStorage } from "../utils/retrieveTasksFromStorage.js";

class AllTasks extends CoreProject {
    constructor(title) {
        super(title);
        this.tasks = retrieveTasksFromStorage();
    }
}

export { AllTasks };