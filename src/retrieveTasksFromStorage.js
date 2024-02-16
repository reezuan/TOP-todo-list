export default function retrieveTasksFromStorage() {
    if (!localStorage.getItem("allTasks")) {
        return JSON.parse(localStorage.getItem("allTasks"));
    } else {
        return;
    }
}