const inputTask = document.querySelector('.input-task')
const btnTask = document.querySelector('.btn-task')
const tasks = document.querySelector('.tasks')
let animated = false;

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
    
    if (li.classList.contains('isAnimating')){
        buttonPending.setAttribute('class', 'pending-hover');
    }
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

function createTask(textoInput, animated=false) {
    const li = document.createElement('li');
    li.innerText = textoInput;
    tasks.appendChild(li);
    if (animated){
        li.setAttribute('class', 'isAnimating');
    }
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
        element.parentElement.setAttribute('class', 'isAnimating');
        element.setAttribute('class', 'pending-hover');
        saveTasks();
    }
});

function saveTasks() {
    const liTasks = tasks.querySelectorAll('li');
    const arrayTasks = [];

    for (let task of liTasks) {
        let taskText= task.innerText;
        let taskArray = [];

        taskText= taskText.replace('ConcluidoPendente', '').trim();
        taskArray.push(taskText)

        if (task.classList.contains('isAnimating')){
            taskArray.push(true);
        }else{taskArray.push(false);}

        arrayTasks.push(taskArray);
    }

    const tasksJSON = JSON.stringify(arrayTasks);
    localStorage.setItem('tasks', tasksJSON);
}

function addTasksSaves() {
    const tasks = localStorage.getItem('tasks');
    const listTasks = JSON.parse(tasks);

    for(let task of listTasks) {
        createTask(task[0],task[1]);
    }
}
addTasksSaves();