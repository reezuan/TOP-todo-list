import updateProjectInStorage from "./updateProjectInStorage.js";

const addTaskToProject = {
    addTask(Task) {
        this.tasks.push(Task);
        updateProjectInStorage(this);
    }
};

export { addTaskToProject };