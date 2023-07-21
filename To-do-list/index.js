const btnAdd = document.querySelector('.btn-new');
const todo = document.querySelector('.todo-list');

btnAdd.addEventListener('click', addTask);
todo.addEventListener('click', (e) => {
    e.preventDefault();
    // The place where the event takes place
    const item = e.target;

    // Supp task
    if (item.classList[1] === 'delete') {
        const task = item.parentElement;
        task.remove();
    }

    if (item.classList[1] === 'edit') {
        editTask(item);
    }
});

/**
 * Add new task
 * @param {object} event - event add task
 */
function addTask(event) {
    const tasks = document.querySelector('.tasks');
    const newTask = document.getElementById('task-new');

    event.preventDefault();
    const task = newTask.value;

    const todoLi = `
        <div class='task'>
            <input
                type='text'
                class='text'
                value='${task}'
                readonly
            />
            <button class='btn delete'>X</button>
            <button class='btn edit'>Edit</button>
        </div>
    `;

    tasks.insertAdjacentHTML('beforeend', todoLi);
    newTask.value = '';
}

/**
 * Edit Task
 * @param {object} item - button event edit
 */
function editTask(item) {
    const task = item.closest('div');
    const input = task.querySelector('input');

    if (item.innerText === 'Edit') {
        input.removeAttribute('readonly');
        input.focus();
        item.innerText = 'Save';
    } else {
        input.setAttribute('readonly', 'readonly');
        item.innerText = 'Edit';
    }
}
