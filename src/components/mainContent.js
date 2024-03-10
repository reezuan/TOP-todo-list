import { AddIcon } from "../assets/index.js";
import { taskCard } from "./taskCard.js";
import { createTask } from "../utils/createTask.js";
import { saveTaskToStorage } from "../utils/saveTaskToStorage.js";

function mainContent(Project) {
    if (document.querySelector("section")) {
        document.querySelector("section").remove();
    };
    
    const content = document.createElement("section");
    
    const projectTitle = document.createElement("h2");
    projectTitle.classList.add("project-title");
    projectTitle.textContent = Project.title;
    
    const taskList = document.createElement("div");

    if (Project.tasks.length !== 0) {
        Project.tasks.forEach(Task => {
            taskList.appendChild(taskCard(Task));
        });
    };

    // "Add task" button
    const addTaskButton = document.createElement("button");
    addTaskButton.classList.add("add-task");
    
    const addTaskIcon = new Image();
    addTaskIcon.src = AddIcon;
    addTaskButton.appendChild(addTaskIcon);

    const addTaskText = document.createElement("p");
    addTaskText.textContent = "Add task";
    addTaskButton.appendChild(addTaskText);

    addTaskButton.addEventListener("click", () => {
        // Remove the original "Add task" button
        addTaskButton.remove();
        
        // Form element
        const addTaskForm = document.createElement("form");
        addTaskForm.classList.add("add-task");

        // Task name
        const taskNameInput = document.createElement("input");
        taskNameInput.setAttribute("type", "text");
        taskNameInput.setAttribute("placeholder", "Task name");
        taskNameInput.setAttribute("id", "task-name");
        addTaskForm.appendChild(taskNameInput);

        // Task description
        const taskDescriptionInput = document.createElement("input");
        taskDescriptionInput.setAttribute("type", "textarea");
        taskDescriptionInput.setAttribute("placeholder", "Description");
        taskDescriptionInput.setAttribute("id", "task-description");
        addTaskForm.appendChild(taskDescriptionInput);

        // Task due date
        const taskDueDateInput = document.createElement("input");
        taskDueDateInput.setAttribute("type", "datetime-local");
        taskDueDateInput.setAttribute("id", "task-due-date");
        addTaskForm.appendChild(taskDueDateInput);

        // Container for "cancel" and "Add task" buttons
        const taskActionsContainer = document.createElement("div");
        addTaskForm.appendChild(taskActionsContainer);

        // "Cancel" button
        const cancelButton = document.createElement("button");
        cancelButton.textContent = "Cancel";
        taskActionsContainer.appendChild(cancelButton);

        cancelButton.addEventListener("click", () => {
            addTaskForm.reset();
            addTaskForm.remove();
            content.appendChild(addTaskButton);
        });

        // "Add task" button
        const createTaskButton = document.createElement("button");
        createTaskButton.textContent = "Add task";
        createTaskButton.setAttribute("type", "submit");
        taskActionsContainer.appendChild(createTaskButton);

        addTaskForm.addEventListener("submit", (event) => {
            event.preventDefault();

            const body = document.querySelector("body");
            const newTaskName = document.querySelector("#task-name").value;
            const newTaskDescription = document.querySelector("#task-description").value;
            const newTaskDueDate = document.querySelector("#task-due-date").value;
            const newTask = createTask(newTaskName, newTaskDescription, newTaskDueDate);

            if (Project.createdByUser === false) {
                saveTaskToStorage(newTask);
                const projectConstructor = Project.constructor;
                body.appendChild(mainContent(new projectConstructor()));
            } else {
                newTask.setAssociatedProjectId(Project);
                saveTaskToStorage(newTask);
                Project.addTask(newTask);
                body.appendChild(mainContent(Project));
            }
        });

        // Append form to main content
        content.appendChild(addTaskForm);
    });

    content.appendChild(projectTitle);
    content.appendChild(taskList);
    content.appendChild(addTaskButton);

    return content;
}

export { mainContent };