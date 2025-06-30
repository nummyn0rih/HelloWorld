// --------------------------------------------------
// Задание #2
// --------------------------------------------------

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

const elements = tasks.map((task) => {
    const taskElement = createItem(task);
    return taskElement;
});

const tasksList = document.querySelector('.tasks-list');
tasksList.append(...elements);
