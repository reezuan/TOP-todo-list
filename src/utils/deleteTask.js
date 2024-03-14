import { retrieveTasksFromStorage } from "./retrieveTasksFromStorage.js";

function deleteTask(taskId) {
    const allTasks = retrieveTasksFromStorage();
    let taskCurrentIndex = allTasks.findIndex(Task => Task.id === taskId);

    if (taskCurrentIndex != -1) {
        allTasks.splice(taskCurrentIndex, 1);
    };

    localStorage.setItem("allTasks", JSON.stringify(allTasks));
};

export { deleteTask };