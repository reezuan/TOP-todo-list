import { Task } from "./Task.js";
import saveTaskToStorage from "./saveTaskToStorage.js";

function createTask(title, description, dueDate) {
    const newTask = new Task(title, description, dueDate);
    saveTaskToStorage(newTask);
    return newTask;
};

export { createTask };