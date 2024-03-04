import { Task } from "./Task.js";

export default function retrieveTasksFromStorage() {
    if (localStorage.getItem("allTasks")) {
        const allTasks = JSON.parse(localStorage.getItem("allTasks"));

        allTasks.forEach(task => {
            Object.setPrototypeOf(task, Task.prototype);
            task.dueDate = new Date(task.dueDate);
        });
        
        console.log(allTasks);
        return allTasks;
    } else {
        return;
    }
}