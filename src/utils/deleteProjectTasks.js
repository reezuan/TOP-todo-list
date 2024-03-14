import { deleteTask } from "./deleteTask.js";
import { getProject } from "./getProject.js";

function deleteProjectTasks(projectId) {
    const projectToDelete = getProject(projectId);
    const projectTasks = projectToDelete.tasks;

    projectTasks.forEach(Task => {
        deleteTask(Task.id);
    });
};

export { deleteProjectTasks };