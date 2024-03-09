import { updateProjectInStorage } from "../utils/updateProjectInStorage.js";

const addTaskToProject = {
    addTask(Task) {
        this.tasks.push(Task);
        updateProjectInStorage(this);
    }
};

export { addTaskToProject };