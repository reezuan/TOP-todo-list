let allProjects = [];

function saveProjectToStorage(Project) {
    console.log(allProjects);
    allProjects.push(Project);
    localStorage.setItem("allProjects", JSON.stringify(allProjects));
};

export { saveProjectToStorage };