export default function initProjectsStorage() {
    if (localStorage.getItem("allProjects")) {
        return;
    } else {
        localStorage.setItem("allProjects", JSON.stringify([]));
    }
}