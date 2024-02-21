import { Task } from "./Task.js";
import { saveTaskToStorage } from "./saveTaskToStorage.js";

function createTask(title, description, dueDate, priority) {
    const newTask = new Task(title, description, new Date(dueDate), priority);
    saveTaskToStorage(newTask);

    return newTask;
};

export { createTask };