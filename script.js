function addTask() {
    const taskInput = document.getElementById('todo-input');
    const taskValue = taskInput.value.trim();
    if (taskValue === '') {
        return;
    }

    const taskList = document.getElementById('todo-list');
    const newTask = document.createElement('li');
    newTask.innerHTML = `
        <span>${taskValue}</span>
        <button onclick="removeTask(this)">Remove</button>
    `;
    taskList.appendChild(newTask);
    taskInput.value = '';
}

function removeTask(button) {
    const task = button.parentElement;
    task.remove();
}
