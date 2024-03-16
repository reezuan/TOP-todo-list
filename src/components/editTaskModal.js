import { AllTasks } from "../classes/AllTasks.js";
import { TasksThisWeek } from "../classes/TasksThisWeek.js";
import { TasksToday } from "../classes/TasksToday.js";
import { mainContent } from "./mainContent.js";
import { getTask } from "../utils/getTask.js";
import { toDateTimeLocal } from "../utils/toDateTimeLocal.js";
import { closeModal } from "../utils/closeModal.js";
import { updateTaskInStorage } from "../utils/updateTaskInStorage.js";
import { getProject } from "../utils/getProject.js";

function editTaskModal(taskId) {
    const Task = getTask(taskId);
    
    // Get the currently viewed project
    const activeProjectId = document.querySelector("section").getAttribute("data-project-id");

    const modal = document.createElement("div");
    modal.setAttribute("id", "edit-task-modal");
    modal.classList.add("modal");

    // Form title
    const formHeader = document.createElement("h2");
    formHeader.textContent = "Edit task";
    modal.appendChild(formHeader);

    // Form
    const form = document.createElement("form");
    modal.appendChild(form);

    // Task title
    const titleFormField = document.createElement("div");
    titleFormField.classList.add("form-field");
    form.appendChild(titleFormField);

    const titleLabel = document.createElement("label");
    titleLabel.setAttribute("for", "task-title");
    titleLabel.textContent = "Title";
    titleFormField.appendChild(titleLabel);

    const titleInput = document.createElement("input");
    titleInput.setAttribute("id", "task-title");
    titleInput.setAttribute("name", "task-title");
    titleInput.setAttribute("type", "text");
    titleInput.setAttribute("value", Task.title);
    titleFormField.appendChild(titleInput);

    // Task description
    const descriptionFormField = document.createElement("div");
    descriptionFormField.classList.add("form-field");
    form.appendChild(descriptionFormField);

    const descriptionLabel = document.createElement("label");
    descriptionLabel.setAttribute("for", "task-description");
    descriptionLabel.textContent = "Description";
    descriptionFormField.appendChild(descriptionLabel);

    const descriptionInput = document.createElement("textarea");
    descriptionInput.setAttribute("id", "task-description");
    descriptionInput.setAttribute("name", "task-description");
    descriptionInput.setAttribute("rows", "5");
    descriptionInput.innerHTML = Task.description;
    descriptionFormField.appendChild(descriptionInput);

    // Task due date
    const dueDateFormField = document.createElement("div");
    dueDateFormField.classList.add("form-field");
    form.appendChild(dueDateFormField);

    const dueDateLabel = document.createElement("label");
    dueDateLabel.setAttribute("for", "task-due-date");
    dueDateLabel.textContent = "Due date";
    dueDateFormField.appendChild(dueDateLabel);

    const dueDateInput = document.createElement("input");
    dueDateInput.setAttribute("id", "task-due-date");
    dueDateInput.setAttribute("name", "task-due-date");
    dueDateInput.setAttribute("type", "datetime-local");
    dueDateInput.setAttribute("value", toDateTimeLocal(Task.dueDate));
    dueDateFormField.appendChild(dueDateInput);

    // Cancel/save buttons
    const buttonsContainer = document.createElement("div");
    buttonsContainer.classList.add("button-container");
    form.appendChild(buttonsContainer);

    const cancelButton = document.createElement("button");
    cancelButton.setAttribute("type", "button");
    cancelButton.textContent = "Cancel";
    buttonsContainer.appendChild(cancelButton);

    cancelButton.addEventListener("click", () => {
        closeModal(form.closest(".modal"));
        form.reset();
        form.closest(".modal").remove();
    });

    const saveButton = document.createElement("button");
    saveButton.setAttribute("type", "submit");
    saveButton.textContent = "Save";
    buttonsContainer.appendChild(saveButton);

    saveButton.addEventListener("click", (event) => {
        event.preventDefault();

        const body = document.querySelector("body");

        Task.title = document.querySelector("#task-title").value;
        Task.description = document.querySelector("#task-description").value;
        Task.dueDate = document.querySelector("#task-due-date").value;

        closeModal(form.closest(".modal"));
        form.reset();
        form.closest(".modal").remove();

        updateTaskInStorage(Task);

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
};

export { editTaskModal };