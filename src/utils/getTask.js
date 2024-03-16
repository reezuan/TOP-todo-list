import { retrieveTasksFromStorage } from "./retrieveTasksFromStorage.js";

function getTask(taskId) {
    const allTasks = retrieveTasksFromStorage();
    return allTasks.find(Task => Task.id === taskId);
}

export { getTask };