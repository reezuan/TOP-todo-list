import { Task } from "../classes/Task.js";

function createTask(title, description, dueDate) {
    const newTask = new Task(title, description, dueDate);
    return newTask;
};

export { createTask };