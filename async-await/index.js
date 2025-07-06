// --------------------------------------------------
// Задание #1
// --------------------------------------------------

const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";
let isLoading = false;

const createNewPost = async () => {
    isLoading = true;
    try {
        const response = await fetch(POSTS_URL, {
            method: "POST"
        });
        const result = await response.json();
        console.log("result", result);
    } catch (error) {
        console.log("error", error);
    } finally {
        isLoading = false;
    }
};

createNewPost();


// --------------------------------------------------
// Задание #2
// --------------------------------------------------

const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';

const getTodosByIds = async (ids) => {
    try {
        const requests = ids.map((id) => fetch(`${TODOS_URL}/${id}`));
        const responses= await Promise.all(requests);
        const dataResults = await responses.map((data) => data.json());
        const allTasks = await Promise.all(dataResults);
        console.log(allTasks);
    } catch (error) {
        console.log(error);
    }
};

getTodosByIds([43, 21, 55, 100, 10]);


// --------------------------------------------------
// Задание #3
// --------------------------------------------------

const ALBUMS_URL = 'https://jsonplaceholder.typicode.com/albums';
const container = document.querySelector('.data-container');
const loader = container.querySelector('.loader');
loader.hidden = false;

const renderAlbums = async () => {
    try {
        const response = await fetch(ALBUMS_URL);
        if (!response.ok) {
            throw new Error('Не удалось получить данныею');
        }
        const data = await response.json();
        const result = data.map((album) => {
            const liElement = document.createElement('li');
            liElement.textContent = album?.title;
            return liElement;
        });
        container.append(...result);
    } catch (error) {
        console.log("error", error);
        container.textContent = 'Произошла ошибка в получении данных об альбомах...';
    } finally {
        loader.hidden = true;
    }
};

renderAlbums();
