import { getTask } from "../utils/getTask.js";
import { closeModal } from "../utils/closeModal.js";
import { deleteTask } from "../utils/deleteTask.js";
import { getProject } from "../utils/getProject.js";
import { updateProjectInStorage } from "../utils/updateProjectInStorage.js";
import { mainContent } from "./mainContent.js";
import { AllTasks } from "../classes/AllTasks.js";
import { TasksToday } from "../classes/TasksToday.js";
import { TasksThisWeek } from "../classes/TasksThisWeek.js";

function deleteTaskModal(taskId) {
    const Task = getTask(taskId);

    // Get the currently viewed project
    const activeProjectId = document.querySelector("section").getAttribute("data-project-id");

    // Modal
    const modal = document.createElement("div");
    modal.setAttribute("id", "delete-task-modal");
    modal.classList.add("modal");

    // Modal text
    const modalText = document.createElement("p");
    modalText.innerHTML = `Are you sure you want to delete <b>${Task.title}</b>?`;
    modal.appendChild(modalText);

    // "Cancel" button
    const cancelButton = document.createElement("button");
    cancelButton.textContent = "Cancel";
    modal.appendChild(cancelButton);

    cancelButton.addEventListener("click", () => {
        closeModal(cancelButton.closest(".modal"));
        cancelButton.closest(".modal").remove();
    });

    // "Delete" button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    modal.appendChild(deleteButton);

    deleteButton.addEventListener("click", () => {
        const body = document.querySelector("body");
        
        closeModal(deleteButton.closest(".modal"));
        deleteButton.closest(".modal").remove();

        deleteTask(taskId);

        if (Task.associatedProjectId) {
            const Project = getProject(Task.associatedProjectId);
            let index = Project.tasks.findIndex(object => object.id === Task.id);
            
            if (index != -1) {
                Project.tasks.splice(index, 1);
            };
            
            updateProjectInStorage(Project);
        };

        if (getProject(activeProjectId)) {
            const activeProject = getProject(activeProjectId);
            body.appendChild(mainContent(activeProject));
        } else {
            // Not the best way to do it, I know. But I've been working
            // on this project for too long & just want to move on.
            
            switch (document.querySelector(".project-title").textContent) {
                case "All tasks":
                    body.appendChild(mainContent(new AllTasks()));
                    break;
                case "Today":
                    body.appendChild(mainContent(new TasksToday()));
                    break;
                case "This week":
                    body.appendChild(mainContent(new TasksThisWeek()));
                    break;
            };
        };
    });

    return modal;
}

export { deleteTaskModal };