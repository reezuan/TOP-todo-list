import { retrieveTasksFromStorage } from "./retrieveTasksFromStorage.js";

function updateTaskInStorage(Task) {
    const allTasks = retrieveTasksFromStorage();
    let currentIndex = allTasks.findIndex(object => object.id === Task.id);

    if (currentIndex != -1) {
        allTasks.splice(currentIndex, 1, Task);
    };
    
    localStorage.setItem("allTasks", JSON.stringify(allTasks));
}

export { updateTaskInStorage };