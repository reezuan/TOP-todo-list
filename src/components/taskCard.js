import { LabelIcon } from "../assets/index.js";
import { formatTaskCardDate } from "../utils/formatTaskCardDate.js";
import { getProject } from "../utils/getProject.js";

function taskCard(Task) {
    const taskCard = document.createElement("button");
    taskCard.classList.add("task-card");
    taskCard.setAttribute("id", Task.id);

    // Checkbox
    const taskCheckbox = document.createElement("button");
    taskCheckbox.classList.add("task-checkbox");
    taskCard.appendChild(taskCheckbox);

    // Task title
    const taskTitle = document.createElement("h3");
    taskTitle.classList.add("task-title");
    taskTitle.textContent = Task.title;
    taskCard.appendChild(taskTitle);

    // Task metadata (date, labels & assigned project)
    const taskInfoLabels = document.createElement("div");
    taskInfoLabels.classList.add("task-info-labels");
    taskCard.appendChild(taskInfoLabels);

    // Task due date
    const taskDueDate = document.createElement("button");
    taskDueDate.classList.add("task-due-date");
    taskDueDate.textContent = `${formatTaskCardDate(Task.dueDate)}`;
    taskInfoLabels.appendChild(taskDueDate);

    // Task labels
    const taskLabels = document.createElement("div");
    taskLabels.classList.add("task-labels");
    Task.labels.forEach(item => {
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
    taskProject.textContent = Task.associatedProjectId ? getProject(Task.associatedProjectId).title : "All tasks";
    taskInfoLabels.appendChild(taskProject);

    return taskCard;
}

export { taskCard };