import { CoreProject } from "./CoreProject.js";
import { retrieveTasksFromStorage } from "../utils/retrieveTasksFromStorage.js";

class AllTasks extends CoreProject {
    constructor() {
        super();
        this.title = "All tasks";
        this.tasks = retrieveTasksFromStorage();
    }
}

export { AllTasks };