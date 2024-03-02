import formatDate from "./formatTaskCardDate.js";
import LabelIcon from "./assets/label.png";
import retrieveTasksFromStorage from "./retrieveTasksFromStorage.js";

export default function initContent(Project) {
    let projectName;
    let tasksToDisplay;

    if (arguments.length === 0) {
        projectName = "All tasks";
        tasksToDisplay = retrieveTasksFromStorage();
    } else {
        projectName = Project.title;
        tasksToDisplay = Project.tasks;
    }
    
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
            taskDueDate.textContent = `${formatDate(task.dueDate)}`;
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
            taskProject.textContent = projectName;
            taskInfoLabels.appendChild(taskProject);

            taskList.appendChild(taskCard);
        });
    };

    content.appendChild(projectTitle);
    content.appendChild(taskList);

    return content;
}