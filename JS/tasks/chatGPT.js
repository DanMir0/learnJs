// Генератор случайных паролей
// const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

// function generatePassword(num) {
//     let arrChar = characters.slice('');
//     let pas = '';
//     for (let i = 0; i <= num; i++) {
//        let randomInd = Math.floor(Math.random() * arrChar.length);
//        pas += arrChar[randomInd];
//     }
//     return pas;
// }

// console.log(generatePassword(8));

// Задача 6: Поиск уникальных элементов

function uniqueElements(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (newArr[j] === arr[i]) {
            continue
        } else {
            newArr.push(arr[i])
        }
      }
    }
    return newArr
}

console.log(uniqueElements([1, 2, 3, 2, 4, 5, 1, 6])); // Вывод: [1, 2, 3, 4, 5, 6]