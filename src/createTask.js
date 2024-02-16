import { Task } from "./Task.js";

function createTask(title, description, dueDate, priority) {
    const newTask = new Task(title, description, new Date(dueDate), priority);

    return newTask;
};

export { createTask };