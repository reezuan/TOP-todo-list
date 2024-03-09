import { LabelIcon, AddIcon } from "../assets/index.js";
import { formatTaskCardDate } from "../utils/formatTaskCardDate.js";
import { retrieveTasksFromStorage } from "../utils/retrieveTasksFromStorage.js";
import { createTask } from "../utils/createTask.js";

function mainContent(Project) {
    if (document.querySelector("section")) {
        document.querySelector("section").remove();
    };

    let projectName;
    let tasksToDisplay;

    if (arguments.length === 0) {
        projectName = "All tasks";
        tasksToDisplay = retrieveTasksFromStorage();
    } else {
        projectName = Project.title;
        tasksToDisplay = Project.tasks;
    };
    
    const content = document.createElement("section");
    
    const projectTitle = document.createElement("h2");
    projectTitle.classList.add("project-title");
    projectTitle.textContent = projectName;
    
    const taskList = document.createElement("div");

    if (tasksToDisplay.length !== 0) {
        tasksToDisplay.forEach(task => {
            const taskCard = document.createElement("button");
            taskCard.classList.add("task-card");

            // Checkbox
            const taskCheckbox = document.createElement("button");
            taskCheckbox.classList.add("task-checkbox");
            taskCard.appendChild(taskCheckbox);

            // Task title
            const taskTitle = document.createElement("h3");
            taskTitle.classList.add("task-title");
            taskTitle.textContent = `${task.title}`;
            taskCard.appendChild(taskTitle);

            // Task metadata (date, labels & assigned project)
            const taskInfoLabels = document.createElement("div");
            taskInfoLabels.classList.add("task-info-labels");
            taskCard.appendChild(taskInfoLabels);
            
            // Task due date
            const taskDueDate = document.createElement("button");
            taskDueDate.classList.add("task-due-date");
            taskDueDate.textContent = `${formatTaskCardDate(task.dueDate)}`;
            taskInfoLabels.appendChild(taskDueDate);

            // Task labels
            const taskLabels = document.createElement("div");
            taskLabels.classList.add("task-labels");
            task.labels.forEach(item => {
                const label = document.createElement("button");

                // Label icon
                const labelIcon = new Image();
                labelIcon.src = LabelIcon;
                label.appendChild(labelIcon);
                
                // Label text
                const labelText = document.createElement("p");
                labelText.textContent = item;
                label.appendChild(labelText);
                
                taskLabels.appendChild(label);
            });
            taskInfoLabels.appendChild(taskLabels);

            // Task assigned project
            const taskProject = document.createElement("button");
            taskProject.classList.add("task-project");
            taskProject.textContent = `${task.associatedProject ? task.associatedProject.title : "All tasks"}`;
            taskInfoLabels.appendChild(taskProject);

            taskList.appendChild(taskCard);
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

            if (projectName === "All tasks") {
                body.appendChild(mainContent());
            } else {
                newTask.setAssociatedProject(Project);
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