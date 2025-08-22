/* Задача 1 */
// for (let i = 1; i <= 100; i++) {
//     console.log(i);
    
// }

/* Задача 2 */
// function getLength(str) {
//     return str.length
// }
// console.log(getLength("Привет"));

/* Задача 3 */
// function isEven(num) {
//     return num % 2 == 0
// }
// console.log(isEven(2));

/* Задача 4 */
// function factorial(num) {
//     if (num <= 1) {
//         return num
//     } else {
//        return num * factorial( num - 1)
//     }
    
// }
// console.log(factorial(5));

/* Задача 5 */
// function strReverse(str) {
//     return str.split("").reverse().join("")
// }
// console.log(strReverse("hello"));

/* Задача 6 */
// function stringOfWords(str) {
//     return str.split(" ")
// }
// console.log(stringOfWords("JavaScript is cool"));

/* Задача 7 */
// function deleteFirstElement(arr) {
//     arr.shift()
//     return arr
// }
// console.log(deleteFirstElement([1, 2, 3, 4, 5]));

/* Задача 8 */
// function deleteLastElement(arr) {
//     arr.pop()
//     return arr
// }
// console.log(deleteLastElement([1, 2, 3, 4, 5]));

/* Задача 9 */
// let arr = [1, 2, 3]
// arr.push(4)
// console.log(arr);

/* Задача 10 */
// let arr = [1, 2, 3]
// arr.unshift(0)
// console.log(arr);

/* Задача 11 */
// function sumElem(arr) {
//     return arr.reduce((acc, elem) => acc + elem, 0)
// }
// console.log(sumElem([1, 2, 3, 4, 5]));

/* Задача 12 */
// function multiArr(arr) {
//     let newArr = arr.map(item => item * 2)
//     return newArr
// }
// console.log(multiArr([1,2,3]));

/* Задача 13 */
// let list = ["apple", "banana", "orange"]
// console.log(list.includes("banana"));

/* Задача 14 */
// let str = "hello world";
// let count = str.split("").reduce((acc, char) => char == 'l' ? acc + 1 : acc + 0, 0)
// console.log(count);

/* Задача 15 */
// let obj = { name: "Alex", age: 20 };
// let arrKey = []
// for (let key in obj) {
//     arrKey.push(key)
// }
// console.log(arrKey);

/* Задача 16 */
// let obj = { name: "Alex", age: 20 }
// let arrValue = Object.values(obj)
// console.log(arrValue);

/* Задача 17 */
// let obj = { name: "Alex", age: 20 }
// let hasEmail = Object.keys(obj).includes('email')
// console.log(hasEmail);

/* Задача 18 */
// let obj = { a: 1, b: 2 }
// obj['c'] = 3
// console.log(obj);

/* Задача 19 */
// let obj = { a: 1, b: 2, c: 3 }
// delete obj['b']
// console.log(obj);

/* Задача 20 */
function findMax(arr) {
    // let max = arr[0]
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] > max) {
    //         max = arr[i]
    //     }
    // }
    // return max

    /* второй способ */
    return Math.max(...arr)
}
console.log(findMax([1,2,3]));


/* Задача. Получаем минуты, нужно вывести часы и минуты в электронном цифорбате */
// function getHourseAndMinutes(mins) {
//     let hourse = Math.floor(mins / 60) % 24
//     let minutes = mins % 60
//     return `${hourse}ч ${minutes}м`
// }

// console.log(getHourseAndMinutes(1000));
// console.log(getHourseAndMinutes(2000));
// console.log(getHourseAndMinutes(13000));
// console.log(getHourseAndMinutes(1500));