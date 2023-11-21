const inputTask = document.querySelector('.input-task')
const btnTask = document.querySelector('.btn-task')

const tasks = document.querySelector('.tasks')

inputTask.addEventListener('keypress', function(e) {
    if (e.keyCode === 13) {
        if (!inputTask.value) return;
        createTask(inputTask.value);
    }
});

function cleanInput() {
    inputTask.value = '';
    inputTask.focus();
}

function createButtonPending(li) {
    const buttonPending = document.createElement('button');
    buttonPending.innerText = 'Pendente';
    buttonPending.setAttribute('class', 'pending');
    buttonPending.setAttribute('title', 'Colocar á tarefa em pendente');
    li.appendChild(buttonPending);
}


function createButtonDelete(li) {
    li.innerText += ' ';
    const buttonDelete = document.createElement('button');
    buttonDelete.innerText = 'Concluido';
    buttonDelete.setAttribute('class', 'delete');
    buttonDelete.setAttribute('title', 'Concluir está tarefa');
    li.appendChild(buttonDelete);
}

function createTask(textoInput) {
    const li = document.createElement('li');
    li.innerText = textoInput;
    tasks.appendChild(li);
    cleanInput();
    createButtonDelete(li);
    createButtonPending(li);
    saveTasks();
}

btnTask.addEventListener('click', function() {
    if (!inputTask.value) return;
    createTask(inputTask.value);
});

document.addEventListener('click', function(e) {
    const element = e.target;

    if (element.classList.contains('delete')) {
        element.parentElement.remove();
        saveTasks();
    }

    if (element.classList.contains('pending')){
        element.setAttribute('class', 'pending-hover');
    }
});

function saveTasks() {
    const liTasks = tasks.querySelectorAll('li');
    const arrayTasks = [];

    for (let task of liTasks) {
        let taskText= task.innerText;
        taskText= tarefaTexto.replace('Concluido', '').trim(); // colocar o pedente
        arrayTasks.push(tarefaTexto);
    }

    const tasksJSON = JSON.stringify(arrayTasks);
    localStorage.setItem('tasks', tasksJSON);
}

function addTasksSaves() {
    const tasks = localStorage.getItem('tasks');
    const listTasks = JSON.parse(tasks);

    for(let task of listTasks) {
        createTask(task);
    }
}
addTasksSaves();