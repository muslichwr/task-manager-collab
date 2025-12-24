// Task Manager App
function loadTasks() {
    fetch('tasks.json')
        .then(res => res.json())
        .then(data => console.log(data));
}
loadTasks();