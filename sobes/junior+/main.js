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

/* Задача 56 */
// function getCountChar(str) {
//     let obj = {}
//     let arrChar = str.toLowerCase('').split("")
//     arrChar.forEach((char) => {
//         if (char in obj) {
//             obj[char] += 1
//         } else {
//             let count = 1
//             obj[char] =count
//         }
//     })
//     return obj
// }
// console.log(getCountChar("Привет, пора кодить"));


/* Задача 57 */
// function herculeanArr(arr) {
//     let reverseArr = [...arr].reverse()
//     arr.pop()
//     return arr.concat(reverseArr)
// }
// console.log(herculeanArr([1,2,3]));


/* Задача 58 */
// function findLongestCommonSubstring(str1, str2) {
//     let longerstSubstring = ""

//     for (let i = 0; i < str1.length; i++) {
//         for (j = 0; j < str2.length; j++) {
//             let substring = ''
//             let x = i;
//             let y = j;

//             while(x < str1.length && y <str2.length && str1[x] === str2[y]) {
//                     substring += str1[x]
//                     x++
//                     y++
//             }

//             if (substring.length > longerstSubstring.length) {
//                 longerstSubstring = substring
//             }
            

//         }
//     }
//     return longerstSubstring
// }
// const string1 = "aaaaGeeksForgeeks";
// const string2 = "Geekscode";
//console.log(findLongestCommonSubstring(string1, string2));

/* Задача 59 */
//function getUniq(arr) {
//     return arr.filter((el, i) => i === arr.indexOf(el))
//     return arr.reduce((acc, item) => acc.includes(item) ? acc : [...acc, item], [])
// }
// console.log(getUniq([1,2,3,3,3,4,2,1]));

/* Задача 60 */
// function groupBy(arr, group) {
//     // let grouped = {}

//     // arr.forEach(user => {
//     //     let key = user[group]

//     //     if (key === undefined) return

//     //     if (!grouped[key]) {
//     //         grouped[key] = []
//     //     }

//     //     grouped[key].push(user)
        
//     // });
//     // return grouped
//     let newObj = {}

//     arr.forEach(user => {
//         if (user[group] === undefined) {return}
        
//         if (newObj[user[group]]) {
//            newObj[user[group]].push(user)
//         } else {
//             newObj[user[group]] = [user]
//         }
        
//     });    
//     return newObj
// }


// let users = [
//   {name: "Alex", age: 20},
//   {name: "Den", age: 22},
//   {name: "Lid", age: 20},
//     {name: "Lid"},
// ]
// console.log(groupBy(users, "age"));

/* Задача 61 */
// function deepEqual(obj1, obj2) {
//     const objKeys1 = Object.keys(obj1)
//     const objKeys2 = Object.keys(obj2)

//     if (objKeys1.length != objKeys2.length) return false

//     for (let key in obj1) {
//         let value1 = obj1[key]
//         let value2 = obj2[key]

//         const isObj = typeof value1 === 'object' && typeof value2 === 'object'

//         if (isObj) {
//             return deepEqual(value1, value2)
//         }

//         if (value1 !== value2) return false
//     }
//     return true

// }
// let obj1 = {name: 'Alex', age: 20, a: {b: {c: 'Asdjasd'}}, skills: ['css', 'html']}
// let obj2 = {name: 'Alex', age: 20, a: {b: {c: 'Asdjasd'}}, skills: ['css', 'html']} 
// console.log(deepEqual(obj1, obj2));

/* Задача 62 */
//function bubbleSort(arr) {
    //let swapped = false
    // do {
    //     swapped = false
    //     for (let i = 0; i < arr.length - 1; i++) {
    //         if (arr[i] > arr[i + 1]) {
    //             let temp = arr[i]
    //             arr[i] = arr[i + 1]
    //             arr[i + 1] = temp
    //             swapped = true
    //             console.log(arr);
    //             console.log(`I=${i}`);
                
                
    //         }
    //     }
    // } while(swapped)
    //     return arr
  
   // return arr
//}

//console.log(bubbleSort([5,3,1,4])) // [1,3,4,5]

/* Задача 63 */
// function camelToSnake(str) {
//     let newStr = ''
//     let arrChar = str.split('')
//     arrChar.forEach((char, index) => {
//         if (char !== char.toLowerCase()) {
//             char = char.toLowerCase()
//             newStr += '_' + char
//         } else {
//             newStr += char
//         }
//     })
//     return newStr
// }

// console.log(camelToSnake("helloWorld")) // "hello_world"

//! Задача 86 (Junior+)
// Реализовать функцию removeFalsy(arr), которая убирает из массива все falsy-значения (false, 0, "", null, undefined, NaN).
// function removeFalsy(arr) {
//     return arr.filter(el => el)
// }
// console.log(removeFalsy([false, 0, "", null, undefined, NaN, 1, 2]));

//! Задача 87 (Junior+)
// Написать функцию chunkArray(arr, size), которая разбивает массив на подмассивы указанного размера.
// function chunkArray(arr, size) {
// if (!Number.isInteger(size) || size <= 0) {
//     throw new Error('size must be a positive integer')
// }
//     let res = []
//     for (let i = 0; i < arr.length; i += size) {
//         res.push(arr.slice(i, i + size))
//     }
//     return res
// }
// function chunkArray(arr, size) {
//     if (!Number.isInteger(size) || size <= 0) {
//     throw new Error('size must be a positive integer')
// }
//     let res = []
//     const copy = arr.slice()
//     while (copy.length) {
//         res.push(arr.splice(0, size))
//     }
//     return res
// }

// console.log(chunkArray([1,2,3,4,5], 2)); // [[1,2],[3,4],[5]]

//! Задача 88 (Junior+)
// Реализовать функцию groupBy(arr, key), которая группирует массив объектов по значению ключа.
// function groupBy(arr, key) {
//     let obj = {}
//     arr.forEach(item => {
//         if (obj[item[key]]) {
//             obj[item[key]].push(item)
//         } else {
//             obj[item[key]] = [item]
//         }
        
//     });
//     return obj
// }

// function groupBy(arr, key) {
//     return arr.reduce((acc, item) => {
//         if (acc[item[key]]) {
//             acc[item[key]].push(item)
//         } else{
//             acc[item[key]] = [item]
//         }
//         return acc
//     }, {})
// }
// console.log(groupBy([{age:20}, {age:21}, {name: 'Alex', age:20}], "age"));

// {20: [{age:20},{age:20}], 21: [{age:21}]}

//! Задача 89 (Junior+)
// Написать функцию deepClone(obj), которая создает глубокую копию объекта (без structuredClone).
// function deepClone(obj) {
//     if (typeof obj !== 'object' || obj === null) return obj

//     if (Array.isArray(obj)) return obj.map(item => deepClone(item))

//     let copy = {}
//     for (let key in obj) {
//         copy[key] = deepClone(obj[key])
//     }
//     return copy
// }
// let obj1 = {a: 1, b: {c: {d: 2}, h: 'sdas'}}
// let copy = deepClone(obj1)
// copy.b.c.d = 55
// console.log(copy);
// console.log(obj1);

//! Задача 90 (Junior+)
// Реализовать функцию arrayEqual(arr1, arr2), которая проверяет, равны ли массивы (одинаковая длина и значения).
// function arrayEqual(arr1, arr2) {
//     if (arr1.length !== arr2.length) return false

//     for (let i = 0; i < arr1.length; i++) {
//         if (arr1[i] !== arr2[i]) {
//             return false
//         }
//     }

//     return true
// }
// function arrayEqual(arr1, arr2) {
//     return arr1.length === arr2.length && arr1.every((val, i) => val === arr2[i])
// }
// console.log(arrayEqual([1,2,3,4], [1,2,3]));


// 1. Поиск уникальных значений в массиве
// Напишите функцию, которая принимает массив и возвращает новый массив, содержащий только уникальные элементы.
/*
function getUnique(arr) {
  return [...new Set(arr)]
}
console.log(getUnique([1,3,6,8,8, 6]))
*/

// 2 Разворот строки (без использования reverse())
// Напишите функцию, которая переворачивает строку без использования встроенного метода .reverse().
/*
function reverseString(str) {
  let reverse = ''
  for (let i = str.length -1; i >= 0; i--) {
    reverse += str[i]
  }
  return reverse
}
console.log(reverseString("JavaScript"))
*/

// 3. Группировка объектов по свойству
// Дан массив объектов. Напишите функцию, которая группирует их по заданному свойству.
// const people = [
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 30 },
//   { name: 'Charlie', age: 25 },
//   { name: 'Charlie', }
// ];
// function groupBy(arr, group) {
//   return arr.reduce((result, user) => {
//     if (user[group] !== undefined) {
//       const key = user[group]
//       console.log('KEY = ', key);
      
//       result[key] = result[key] || []
//       console.log('RESULT', result);
      
//       result[key].push(user)
//     }
//     return result
//   }, {})

//     let res = {}

//     arr.forEach(user => {
//       if (!user[group]) return

//       if (res[user[group]]) {
//         res[user[group]].push(user)
//       } else {
//         res[user[group]] = [user]
//       }
//     })
//     return res
// }

// console.log(groupBy(people, 'age'));

/* Результат:
{
  '25': [ { name: 'Alice', age: 25 }, { name: 'Charlie', age: 25 } ],
  '30': [ { name: 'Bob', age: 30 } ]
}
*/

// 4. Замыкание: Счётчик
// Напишите функцию createCounter(), которая возвращает другую функцию. Возвращаемая функция при каждом вызове должна возвращать число, увеличенное на 1, начиная с 0.
// function createCounter() {
//   let count = -1
//   return () => {
//     count++
//     return count
//   }
// }

// const counter = createCounter();
// console.log(counter()); // 0
// console.log(counter()); // 1
// console.log(counter()); // 2

//! Напишите функцию, которая суммирует все числовые значения объекта.
// function sumObjectValues(obj) {
//   const values = Object.values(obj)
//   let sum = 0
//   values.forEach(val => {
//     if (typeof val === 'number') {
//       sum += val
//     }
//   })
//   return sum
// }

// const prices = { apple: 100, banana: 50, orange: 75 , black: 'ss'};
// console.log(sumObjectValues(prices)); // 225

//! Дан массив пользователей. Верните массив их имен.
// function getNames(users) {
//    return users.map(user => user.name).filter(name => name !== undefined);
// }

// const users = [
//   { id: 1, name: 'Alice', age: 25 },
//   { id: 2, name: 'Bob', age: 30 },
//   { id: 3, name: 'Charlie', age: 35 },
//   { id: 4,  age: 35 }
// ];

// console.log(getNames(users)); // ['Alice', 'Bob', 'Charlie']

// //!Напишите функцию, которая удаляет повторяющиеся элементы из массива.
// function removeDuplicates(arr) {
//  // return [...new Set(arr)]
//   const seen = {}
//   return arr.filter(element => {
//     if (seen[element]) {
//       return false
//     }
//     seen[element] = element
//     return true
//   });
// }

// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]

/*Уровень: Junior+
4. Плоский массив
Напишите функцию, которая преобразует многомерный массив в одномерный.
*/
//  function flattenArray(arr) {
//   // return arr.flat(Infinity)
//   let res = []
//   for (const item of arr) {
//     if (Array.isArray(item)) {
//       res.push(...flattenArray(item))
//     } else {
//       res.push(item)
//     }
//   }
//   return res
// }

// console.log(flattenArray([1, [2, [3, 4]], 5])); // [1, 2, 3, 4, 5]

// Напишите функцию, которая возвращает уникальные значения из нескольких массивов.
// function unionArrays(...arrays) {
//     let res = []
//     arrays.forEach(item => {
//         res = res.concat(item)
//     })
//     return [...new Set(res)]
   
// }


// console.log(unionArrays([1, 2, 3], [2, 3, 4], [3, 4, 5])); // [1, 2, 3, 4, 5]


// Сгруппируйте массив строк по первой букве
// function groupByFirstLetter(strings) {
//     // let res = {}
//     // strings.forEach(word => {
//     //   const firstLetter = word[0].toLowerCase()
//     //     if (res[firstLetter]) {
//     //         res[firstLetter].push(word)
//     //     } else {
//     //         res[firstLetter] = [word]
//     //     }
//     // })
//     // return res

//     return strings.reduce((acc, word) => {
//       const firstLetter = word[0].toLowerCase()
//       acc[firstLetter] = acc[firstLetter] || []
//       acc[firstLetter].push(word)
//       return acc
//     }, {})
// }


// console.log(groupByFirstLetter(['apple', 'banana', 'avocado', 'cherry']));
// { a: ['apple', 'avocado'], b: ['banana'], c: ['cherry'] }




