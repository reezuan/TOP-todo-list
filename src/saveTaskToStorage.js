export default function saveTaskToStorage(Task) {
    let allTasks;
    
    if (localStorage.getItem("allTasks")) {
        allTasks = JSON.parse(localStorage.getItem("allTasks"));
    } else {
        allTasks = [];
    }

    allTasks.push(Task);
    localStorage.setItem("allTasks", JSON.stringify(allTasks));
};