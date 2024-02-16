export default function retrieveLists() {
    if (!localStorage.getItem("allLists")) {
        return JSON.parse(localStorage.getItem("allLists"));
    } else {
        return;
    }
}