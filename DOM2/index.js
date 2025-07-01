const tasks = [
    {
        id: '1138465078061',
        completed: false,
        text: 'Посмотреть новый урок по JavaScript',
    },
    {
        id: '1138465078062',
        completed: false,
        text: 'Выполнить тест после урока',
    },
    {
        id: '1138465078063',
        completed: false,
        text: 'Выполнить ДЗ после урока',
    },
];

function createNewElement (tag, classes = '') {
    const element = document.createElement(tag);
    element.className = classes;

    return element;
};

const createItem = (options) => {
    const item = createNewElement('div', 'task-item');
    item.dataset.taskId = options.id;

    const itemContainer = createNewElement('div', 'task-item__main-container');
    const itemContent = createNewElement('div', 'task-item__main-content');

    const form = createNewElement('form', 'checkbox-form');
    const input = createNewElement('input', 'checkbox-form__checkbox');
    input.type = 'checkbox';
    input.id = options.id;
    input.checked = options.completed;

    const label = createNewElement('label');
    label.htmlFor = options.id;
    
    const span = createNewElement('span', 'task-item__text');
    span.textContent = options.text;

    form.append(input);
    form.append(label);
    itemContent.append(form);
    itemContent.append(span);

    const button = createNewElement('button', 'task-item__delete-button default-button delete-button');
    button.textContent = 'Удалить';

    itemContainer.append(itemContent);
    itemContainer.append(button);
    item.append(itemContainer);

    return item;
};

const getElements = (el) => el.map((task) => createItem(task));

const elements = getElements(tasks);

const tasksList = document.querySelector('.tasks-list');
tasksList.append(...elements);

// --------------------------------------------------
// Задание #1 - 3
// --------------------------------------------------

const modalElement = createNewElement('div', 'modal-overlay modal-overlay_hidden');
const modalWrap = createNewElement('div', 'delete-modal');
const modalHeader = createNewElement('h3', 'delete-modal__question');
modalHeader.textContent = 'Вы действительно хотите удалить эту задачу?';
const modalGroupButtons = createNewElement('div', 'delete-modal__buttons');
const modalRejectButton = createNewElement('button', 'delete-modal__button delete-modal__cancel-button');
modalRejectButton.textContent = 'Отмена';
const modalApproveButton = createNewElement('button', 'delete-modal__button delete-modal__confirm-button');
modalApproveButton.textContent = 'Удалить';
modalGroupButtons.append(modalRejectButton, modalApproveButton);
modalWrap.append(modalHeader, modalGroupButtons);
modalElement.append(modalWrap);

const tasksRootElement = document.querySelector('#tasks');
tasksRootElement.after(modalElement);

function updateTasks() {
    const elements = getElements(tasks);
    tasksList.innerHTML = '';
    tasksList.append(...elements);
};

const form = document.querySelector('.create-task-block');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const { target } = event;
    const textTask = target.elements.taskName.value.trim();

    if (!textTask) {
        const errorMessage = createNewElement('span', 'error-message-block');
        errorMessage.textContent = 'Название задачи не должно быть пустым.';
        form.append(errorMessage);

        return;
    }

    const isRepeat = tasks.some(el => el.text === textTask);
    if (isRepeat) {
        const errorMessage = createNewElement('span', 'error-message-block');
        errorMessage.textContent = 'Задача с таким названием уже существует.';
        form.append(errorMessage);

        return;
    }

    const errorMessage = document.querySelector('.error-message-block');
    if (errorMessage) {
        errorMessage.remove();
    }

    const newTask = {
        id: Date.now(),
        completed: false,
        text: target.elements.taskName.value,
    };
    tasks.push(newTask);

    updateTasks();
});

tasksList.addEventListener('click', ({ target }) => {
    isDeleteButton = target.classList.contains('task-item__delete-button');
    if (isDeleteButton) {
        modalElement.classList.remove('modal-overlay_hidden');

        const taskItem = target.closest('.task-item');
        const { taskId } = taskItem.dataset;
        modalApproveButton.dataset.taskId = taskId;
    }
});

modalRejectButton.addEventListener('click', () => {
    modalElement.classList.add('modal-overlay_hidden');
});

modalApproveButton.addEventListener('click', ({ target }) => {
    modalElement.classList.add('modal-overlay_hidden');

    const { taskId } = target.dataset;
    const indexDeletedTask = tasks.findIndex((task) => task.id === taskId);
    tasks.splice(indexDeletedTask, 1);
    
    updateTasks();
});

// --------------------------------------------------
// Задание #4
// --------------------------------------------------

const body = document.body;

body.addEventListener('keydown', (event) => {
    if (event.key === 'Tab') {
        event.preventDefault();
    }
});

body.addEventListener('keyup', (event) => {
    if (event.key !== 'Tab') {
        return;
    }

    const currentTheme = body.dataset.theme ? '' : 'dark';
    body.dataset.theme = currentTheme;
    changeTheme(currentTheme);
});

function changeTheme(theme) {
    const taskItems = tasksList.querySelectorAll('.task-item');
    const buttonItems = tasksRootElement.querySelectorAll('button');

    switch (theme) {
        case 'dark':
            body.style.background = '#24292E';
            taskItems.forEach(element => {
                element.style.color = '#fff';
            });
            buttonItems.forEach(element => {
                element.style.border = '1px solid #fff';
            });
            break;
    
        default:
            body.style.background = 'initial';
            taskItems.forEach(element => {
                element.style.color = 'initial';
            });
            buttonItems.forEach(element => {
                element.style.border = 'none';
            });
            break;
    }
};
