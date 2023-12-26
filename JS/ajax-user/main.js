//? 1. Получить пользователей (users) от сервера https://jsonplaceholder.typicode.com. Получив ответ от сервера вывести имена пользователей на страницу. 
//? При клике на имя пользователя в произвольном месте должна появиться подробная информация о нем. Для визуальной части можно использовать bootstrap или другие фреймворки.
 
//? 2. Создать форму добавления пользователя состоящая из полей name, email, username, phone, website при сабмите формы сделать POST запрос на сервер после ответа от сервера 
//?добавлять полученного пользователя на страницу.

const container = document.querySelector('.users-list-section .container');
const form = document.forms['addUsers'];
const inputName = form.elements['name'];
const inputUserName = form.elements['username'];
const inputEmail = form.elements['email'];
const inputPhone = form.elements['phone'];
const inputWebsite = form.elements['website'];

function getUsers(cb) {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
    xhr.addEventListener('load', () => {
        const response = JSON.parse(xhr.responseText);
        cb(response);
    })
    
    xhr.addEventListener('error', () => {
        console.log('error');
    })
    
    xhr.send()
}

getUsers(response => {
    const fragment = document.createDocumentFragment();
    response.forEach((user) => {
        let userTemplate = templateUser(user)
        fragment.appendChild(userTemplate)
    })
    container.appendChild(fragment)
})


function templateUser(user) {
    
    const card = document.createElement('div');
    card.classList.add('card');
    card.style.width = "18rem";

    const title = document.createElement('h5');
    title.classList.add('card-title', 'p-3');
    title.textContent = user.name;

    const body = document.createElement('div');
    body.classList.add('card-body', 'd-none');

    const email = document.createElement('p');
    email.classList.add('card-text');
    email.textContent = `Email: ${user.email}`;

    const phone = document.createElement('p');
    phone.classList.add('card-text');
    phone.textContent = `Phone: ${user.phone}`;

    const website = document.createElement('p');
    website.classList.add('card-text');
    website.textContent = `Website ${user.website}`;
    
    card.appendChild(title);
    body.appendChild(email);
    body.appendChild(phone);
    body.appendChild(website);
    card.appendChild(body);
    return card
}

container.addEventListener('click', (e) => {
    if (e.target.classList.contains('card-title')) {
        const parent = e.target.parentElement;
        const body = parent.querySelector('.card-body');
        body.classList.toggle('d-none')
    }
    
})

function createUser(body, cb) {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://jsonplaceholder.typicode.com/users/');
    xhr.addEventListener('load', () => {
        const response = JSON.parse(xhr.responseText);
        cb(response);
    })

    xhr.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
    
    xhr.addEventListener('error', () => {
        console.log('error');
    })
    
    xhr.send(JSON.stringify(body));
}

form.addEventListener('submit', e => {
    e.preventDefault();

    const nameValue = inputName.value;
    const usernameValue = inputUserName.value;
    const emailValue = inputEmail.value;
    const phoneValue = inputPhone.value;
    const websiteValue = inputWebsite.value;

    if (!nameValue || !usernameValue || !emailValue || !phoneValue || !websiteValue) {
        alert('Заполните пустные поля!')
    }

    const newUser = {
        name: nameValue,
        username: usernameValue,
        email: emailValue,
        phone: phoneValue,
        website: websiteValue
    }
    createUser(newUser, response => {
        console.log(response);
    })
    let user = templateUser(newUser)
    container.appendChild(user)
    form.reset();
    
})