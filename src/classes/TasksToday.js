import { CoreProject } from "./CoreProject.js";
import { retrieveTasksFromStorage } from "../utils/retrieveTasksFromStorage.js";

class TasksToday extends CoreProject {
    constructor(title) {
        super(title);
        this.tasks = retrieveTasksFromStorage().filter(Task => {
            let dateToday = new Date();
            dateToday.setHours(0, 0, 0, 0);

            let currentTaskDueDate = Task.dueDate;
            currentTaskDueDate.setHours(0, 0, 0, 0);
            
            return dateToday.getTime() === currentTaskDueDate.getTime();
        });
    }
}

export { TasksToday };