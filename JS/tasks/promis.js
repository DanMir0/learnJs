//? Создать функцию, которая возвращает промис.  Функция принимает два аргумента - время, через которое промис должен выполниться, и значение, с которым промис будет выполнен. 
// function promiseCreator(time, value) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(value)
//         }, time)
//     })
// }


// const prom = promiseCreator(500, 'Ok!');
// prom.then(console.log);

//? Функция delay(ms) должна возвращать промис, который перейдёт в состояние «выполнен» через ms миллисекунд, так чтобы мы могли добавить к нему .then:
//? Встроенная функция setTimeout использует колбэк-функции. Создайте альтернативу, использующую промисы.

// function delay(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
//   }
  
//   delay(3000).then(() => alert('выполнилось через 3 секунды'));

//! fetch
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => {
//         return response.json();
//     })
//     .then(posts => console.log(posts))
//     .catch(err => console.log(err))

// function getPost(id) {
//     return new Promise((resolve, reject) => {
//         fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
//             .then(response => response.json())
//             .then(post => resolve(post))
//             .catch(err => reject(err))
//     })
// }

//getPost(1).then(post => console.log(post))

// function getPost2(id) {
//     const [userType, userId] = id.split('-')
//     return fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`)
//     .then(response => response.json())
// }

// getPost2('user-1')
//     .then(post => console.log(post))
//     .catch(err => console.log(err))

// function getPost3(id) {
//     return Promise.resolve().then(() => {
//         const [userType, userId] = id.split('-')
//         return fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`)
//         .then(response => response.json())
//     })
   
// }


// getPost3(1)
//     .then(post => console.log(post))
//     .catch(err => console.log(err))

//? Перепишите один из примеров раздела Цепочка промисов, используя async/await вместо .then/catch:
// async function loadJson(url) {
//     let response = await fetch(url);
//     if (response.status == 200) {
//         let json = await response.json();
//         return json;
//     } else {
//         throw new Error(response.status)
//     }

// }
// loadJson('no-such-user.json').catch(alert);

//?  Ниже пример из раздела Цепочка промисов, перепишите его, используя async/await вместо .then/catch.
//? В функции demoGithubUser замените рекурсию на цикл: используя async/await, сделать это будет просто.

// class HttpError extends Error {
//   constructor(response) {
//     super(`${response.status} for ${response.url}`);
//     this.name = "HttpError";
//     this.response = response;
//   }
// }

// async function loadJson(url) {
//   let response = await fetch(url);

//   if (response.status == 200) {
//     let json = await response.json();
//     return json;
//   } else {
//     throw new HttpError(response);
//   }
// }

// async function demoGithubUser() {
//   let user;

//   while (true) {
//     let name = prompt("Введите логин?", "iliakan");

//     try {
//       user = await loadJson(`https://api.github.com/users/${name}`);
//       break; // ошибок не было, выходим из цикла
//     } catch (err) {
//       if (err instanceof HttpError && err.response.status == 404) {
//          // после alert начнётся новая итерация цикла
//         alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
//       } else {
//         // неизвестная ошибка, пробрасываем её
//         throw err;
//       }
//     }
//   }
//   alert(`Полное имя: ${user.name}.`);
//   return user;
// }
// demoGithubUser();

//? Есть «обычная» функция. Как можно внутри неё получить результат выполнения async–функции?

// async function wait() {
//     await new Promise(resolve => setTimeout(resolve, 1000));
  
//     return 10;
//   }
  
//   function f() {
//     wait().then(res => console.log(res))
//   }
// f()

//! function generator

function* pseudoRandom(speed) {
    let value = speed;
    
    while(true) {
        value = value * 16807 % 2147483647;
        yield value
    }

}

let generator = pseudoRandom(1);

alert(generator.next().value); // 16807
alert(generator.next().value); // 282475249
alert(generator.next().value); // 1622650073