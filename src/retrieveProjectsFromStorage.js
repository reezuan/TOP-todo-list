export default function retrieveProjectsFromStorage() {
    if (localStorage.getItem("allProjects")) {
        return JSON.parse(localStorage.getItem("allProjects"));
    } else {
        return;
    }
}