export default function retrieveToDoItems() {
    if (!localStorage.getItem("allToDoItems")) {
        return JSON.parse(localStorage.getItem("allToDoItems"));
    } else {
        return;
    }
}