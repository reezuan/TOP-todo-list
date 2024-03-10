import { CoreProject } from "./CoreProject.js";
import { retrieveTasksFromStorage } from "../utils/retrieveTasksFromStorage.js";

class TasksThisWeek extends CoreProject {
    constructor(title) {
        super(title);
        this.tasks = retrieveTasksFromStorage().filter(Task => {
            // Get current date & time
            const now = new Date();
            
            // Calculate start of week (Monday)
            const startOfWeek = new Date(now);
            startOfWeek.setDate(now.getDate() - (now.getDay() || 7) + 1);
            startOfWeek.setHours(0, 0, 0, 0); // Set to start of the day

            // Calculate end of week (Sunday)
            const endOfWeek = new Date(now);
            endOfWeek.setDate(now.getDate() - (now.getDay() || 7) + 7);
            endOfWeek.setHours(23, 59, 59, 999); // Set to end of the day

            const currentTaskDueDate = Task.dueDate;
            
            return currentTaskDueDate >= startOfWeek && currentTaskDueDate <= endOfWeek;
        });
    }
}

export { TasksThisWeek };