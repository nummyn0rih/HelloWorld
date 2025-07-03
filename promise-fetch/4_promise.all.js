// --------------------------------------------------
// Задание #1
// --------------------------------------------------

const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

const usersList = document.querySelector('#data-container');
const loader = document.querySelector('#loader');
loader.hidden = false;

fetch(USERS_URL)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Ошибка запроса");
    }
    return response.json();
  })
  .then((data) => {
    const users = getUsersList(data);
    usersList.append(...users);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    loader.hidden = true;
  });

function getUserElement(user) {
    const liElement = document.createElement('li');
    const ancorElement = document.createElement('a');
    ancorElement.href = '#';
    ancorElement.textContent = user.name;
    liElement.append(ancorElement);

    return liElement;
};

function getUsersList(users) {
    return users.map((user) => getUserElement(user));
};

// --------------------------------------------------
// Задание #2
// --------------------------------------------------

const usersList2 = document.querySelector('#data-container2');
const loader2 = document.querySelector('#loader2');
loader2.hidden = false;

function getUsersByIds(ids) {
    const requests = ids.map((id) => fetch(`${USERS_URL}/${id}`));
    Promise.all(requests)
        .then((responses) => {
            const data = responses.map((response) => response.json());
            return Promise.all(data);
        })
        .then((users) => {
            const usersEl = getUsersList(users);
            usersList2.append(...usersEl);
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            loader2.hidden = true;
        })
};

getUsersByIds([5, 6, 2, 1]);
