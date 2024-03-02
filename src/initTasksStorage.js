export default function initTasksStorage() {
    if (localStorage.getItem("allTasks")) {
        return;
    } else {
        localStorage.setItem("allTasks", JSON.stringify([]));
    }
}