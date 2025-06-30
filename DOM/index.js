// --------------------------------------------------
// Задание #1
// --------------------------------------------------

// Через innerHTML

const bodyElement = document.body;

bodyElement.innerHTML = `
<form class="create-user-form">
    <label>
        Имя
        <input type="text" name="userName" placeholder="Введите ваше имя">
    </label>
    <label>
        Пароль
        <input type="password" name="password" placeholder="Придумайте Пароль">
    </label>
    <button type="submit">
        Подтвердить
    </button>
</form>`;



bodyElement.innerHTML = '';

// Через document.createElement()

const form = document.createElement('form');
form.className = 'create-user-form';

const labelName = document.createElement('label');
labelName.textContent = 'Имя';

const inputName = document.createElement('input');
inputName.type = 'text';
inputName.name = 'userName';
inputName.placeholder = 'Введите ваше имя';

labelName.append(inputName);

const labelPass = document.createElement('label');
labelPass.textContent = 'Пароль';

const inputPass = document.createElement('input');
inputPass.type = 'password';
inputPass.name = 'password';
inputPass.placeholder = 'Придумайте Пароль';

labelPass.append(inputPass);

const button = document.createElement('button');
button.type = 'submit';
button.textContent = 'Подтвердить';

form.append(labelName);
form.append(labelPass);
form.append(button);

document.body.append(form);
