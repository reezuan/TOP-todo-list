export default function saveProjectToStorage(Project) {
    let allProjects;
    
    if (localStorage.getItem("allProjects")) {
        allProjects = JSON.parse(localStorage.getItem("allProjects"));
    } else {
        allProjects = [];
    }

    allProjects.push(Project);
    localStorage.setItem("allProjects", JSON.stringify(allProjects));
};