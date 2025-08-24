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
// function findMax(arr) {
//     // let max = arr[0]
//     // for (let i = 0; i < arr.length; i++) {
//     //     if (arr[i] > max) {
//     //         max = arr[i]
//     //     }
//     // }
//     // return max

//     /* второй способ */
//     return Math.max(...arr)
// }
// console.log(findMax([1,2,3]));

/* Задача 21 */
// function uniq(arr) {
//     return Array.from(new Set(arr))
// }
// console.log(uniq([1,2,2,3,3,1,5,6]));

/* Задача 22 */
// function sortUp(arr) {
//     return arr.sort((a,b) => a - b)
// }
// console.log(sortUp([1,5,3,2,10,24,7, 0, -2 ]));

/* Задача 23 */ 
// let users = [
//     {
//         id: 1,
//         name: 'Alex'
//     },
//     {
//         id: 2,
//         name: 'Kid'
//     },
//     {
//         id: 3,
//         name: 'Den'
//     },
// ]

// function getUser(id) {
//     return users.find(user => user.id === id)
// }
// console.log(getUser(2));


/* Задача 24 */
// let users = [
//     { name: "Alex", age: 20 },
//     { name: "Lid", age: 17 },
//     { name: "Den", age: 22 },
// ]
// function getAdultUser() {
//     return users.filter(user => user.age >= 18)
// }
// console.log(getAdultUser());

/* Задача 25 */
// function uniqConcat(arr1, arr2) {
//     return Array.from(new Set(arr1.concat(arr2)))
//return [...new Set([...arr1, ...arr2])]
// }
// console.log(uniqConcat([1,2,2,3], [2,1,4,5]));

/* Задача 26 */
//function upperCaseFirst(arr) {
    // let newArrr = []
    // arr.forEach(word => {
    //     newArrr.push(word[0].toUpperCase() + word.slice(1))
    // });
    // return newArrr
    /* Второе решение*/
    // return arr.map(word => word[0].toUpperCase() + word.slice(1))
//}
//console.log(upperCaseFirst(['Hello,', 'world', 'guys']));

/* Задача 27 */
// function getCountWord(str) {
//  return str.trim().split(/\s+/).length;
//     return str.split(" ").length
// }
// console.log(getCountWord('Hi, word, g s'));

/* Задача 28 */
// let arr = [1, 2, 3, 4, 5]
// function getEvenNumbers(arr) {
//     return arr.filter(num => num % 2 == 0)
// }
// let a = getEvenNumbers(arr)
// console.log(a, arr);

/* Задача 29 */
//function flatten(arr) {
   // return arr.flat(Infinity)

//    let res = []
//    arr.forEach(item => {
//         if (Array.isArray(item)) {
//             res = res.concat(flatten(item))
//         } else {
//             res.push(item)
//         }
//    });
//    return res

//     let res = []
//     let stack = [...arr]
//     while(stack.length) {
//     const item = stack.pop();
//         if (Array.isArray(item)) {
//             stack.push(...item)
//         } else {
//             res.push(item)
//         }
//     }
//     return res.reverse()
// }
// console.log(flatten([1, [2, 3], [4, [5]]]));

/* Задача 30 */
// function isPalindrom(str) {
//     str = str.toLowerCase().replace(/[^a-zа-я0-9]/gi, "");
//     // return str == str.split('').reverse().join('')
//     let reverseStr = '';
//     for (let i = str.length - 1; i >= 0; i--) {
//         reverseStr += str[i]
//     }
    
//     return reverseStr === str
// }
// console.log(isPalindrom('Gag'));

/* Задача 31 */
// Array.prototype.customForEach = function(cbFunc, thisArg = undefined) {
//     if (typeof cbFunc !== 'function') {
//         throw new Error(`${cbFunc} должна быть функцией`)
//     }

//     for (let i = 0; i < this.length; i++) {
//         cbFunc.call(thisArg, this[i], i, this)
//     }
// }

// let myArr = [1,2,3]
// myArr.customForEach((element, index, arr) => arr[index]  = element + 1)
// console.log(myArr);


// Array.prototype.customMap = function(cbFunc, thisArg = undefined) {
//        if (typeof cbFunc !== 'function') {
//         throw new Error(`${cbFunc} должна быть функцией`)
//     }

//     let innerArr = []

//     for (let i = 0; i < this.length; i++) {
//         innerArr[i] = cbFunc.call(thisArg, this[i], i, this)
//     }

//     return innerArr
// } 

// let myArr = [1,2,3]
// let a = myArr.customMap(el => el * 10)
// console.log(a);

const obj = {
    prop: 'Привет!'
}

obj.__proto__.toString = function() {
    return this.prop
}

const el = document.getElementById('app')
el.innerText = obj

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