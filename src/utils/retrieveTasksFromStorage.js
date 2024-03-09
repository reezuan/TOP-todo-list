import { Task } from "../classes/Task.js";

function retrieveTasksFromStorage() {
    if (localStorage.getItem("allTasks")) {
        const allTasks = JSON.parse(localStorage.getItem("allTasks"));

        allTasks.forEach(task => {
            Object.setPrototypeOf(task, Task.prototype);
            task.dueDate = new Date(task.dueDate);
        });
        
        return allTasks;
    } else {
        return;
    }
}

export { retrieveTasksFromStorage };