import { CoreProject } from "./CoreProject.js";
import { retrieveTasksFromStorage } from "../utils/retrieveTasksFromStorage.js";

class TasksToday extends CoreProject {
    constructor() {
        super();
        this.title = "Today";
        this.tasks = retrieveTasksFromStorage().filter(Task => {
            const dateToday = new Date();
            dateToday.setHours(0, 0, 0, 0);

            const currentTaskDueDate = Task.dueDate;
            currentTaskDueDate.setHours(0, 0, 0, 0);
            
            return dateToday.getTime() === currentTaskDueDate.getTime();
        });
    }
}

export { TasksToday };