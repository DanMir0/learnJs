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

// Сумма элементов на нечётных позициях
// sumOddIndexes(arr) → сумма чисел с нечётными индексами.
// function sumOddIndexes(arr) {
//   return arr.reduce((sum, num, i) => i % 2 ? sum + num : sum, 0)
//   let res = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (i % 2 === 1) {
//       res += arr[i]
//     }
//   } 
//   return res
// }
// console.log(sumOddIndexes([1,2,3,4,5]));

// Фибоначчи
// Реализуй fibonacci(n) (итеративно).
// function fibonacci(n) {
//   if (n <= 0) return 0
//   if (n === 1) return 1

//   let prev = 0;
//   let current = 1;

//   for (let i = 2; i <= n; i++) {
//     let next = prev + current;
//     prev = current;
//     current = next;
//   }

//   return current
// }
// console.log(fibonacci(10));

// Разворот массива
// Напиши функцию reverseArray(arr) без использования reverse().
// function reverseArray(arr) {
//   for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
//     [arr[i], arr[j]] = [arr[j], arr[i]];
//   }
//   return arr;

//   let res = []
//   for (let i = arr.length - 1; i >= 0; i--) {
//     res.push(arr[i])
//   }
//   return res
// }
// console.log(reverseArray(['Hello', 'world']));
// console.log(reverseArray([1,2,3,4,5]));

// Палиндром число
// Функция isPalindromeNumber(num) должна проверять, является ли число палиндромом.
// function isPalindromeNumber(num) {
//   const str = String(num)
//   return str === str.split('').reverse().join("")

//   let copy = num.toString()
//   let newNum = ''
//   for (let i = copy.length-1; i >= 0 ; i--) {
//     newNum += copy[i]
//   }
//   newNum = Number(newNum)

//   console.log(num);
//   console.log(newNum);
  
  
//   return newNum === num
// }
// console.log(isPalindromeNumber(676));

// Второй максимум
// Напиши secondMax(arr) — второй по величине элемент массива.
// function secondMax(arr) {
//   let uniq = [... new Set(arr)]
//   uniq = arr.sort((a,b) => b - a)
//   return uniq[1]
// }
// console.log(secondMax([1,2,3,4,5]));

// Объединение массивов без дубликатов
// Реализуй union(arr1, arr2).
// function union(arr1, arr2) {
//   let newArr = arr1.concat(arr2)
//   return [...new Set(newArr)]
// }
// console.log(union([1,2,3], [3,2,4,5]));

// Flatten (упрощённый)
// Напиши flatten(arr), который распрямляет массив только на 1 уровень.
// Пример: [1, [2, 3], 4] → [1,2,3,4].
// function flatten(arr) {
//   // return arr.flat(Infinity)
//   let newArr = []
//   arr.forEach(item => {
//     if (Array.isArray(item)) {
//       newArr = newArr.concat(flatten(item))
//     } else {
//       newArr.push(item)
//     }
//   })
//   return newArr
// }
// console.log(flatten([1,2, [3, 4, [5,6]]]));

// Подсчёт символов
// Реализуй charFrequency(str), возвращающую объект частоты символов.
// function charFrequency(str) {
// return str.split("").reduce((acc, char) => {
//   acc[char] = (acc[char] || 0) + 1
//   return acc
// }, {})

//   let obj = {}
//   for (let i = 0; i < str.length; i++) {
//     if (obj[str[i]]) {
//       obj[str[i]] += 1
//     } else {
//       obj[str[i]] = 1
//     }
//   }
//   return obj
// }
// console.log(charFrequency('Hello'));

// Сумма уникальных элементов
// Напиши sumUnique(arr) (суммирует только уникальные числа).
// function sumUnique(arr) {
//   let uniqArr = [... new Set(arr)]
//  return uniqArr.reduce((acc, num) => acc + num, 0)
// }
// console.log(sumUnique([1,1,2,2,3,3]));

// Поменять местами
// Функция swap(arr, i, j) меняет местами элементы по индексам.
// function swap(arr, i, j) {
//   [arr[i], arr[j]] = [arr[j], arr[i]]
//   return arr

//   for (let pos = 0; pos < arr.length; pos++) {
//     if (pos === i) {
//       let temp = arr[i]
//       arr[i] = arr[j]
//       arr[j] = temp
//     }
//   }
//   return arr
// }
// console.log(swap([1,2,3,4,5,6], 4, 1));

// Создайте функцию, которая принимает массив функций, возвращающих промисы, и выполняет их последовательно с задержкой между вызовами.
// async function runWithDelay(promises, delay) {
//   const results = []

//   for (let i = 0; i < promises.length; i++) {
//     if (i > 0) {
//       await new Promise(resolve => setTimeout(resolve, delay))
//     }

//     const result = await promises[i]()
//     results.push(result)
//     console.log(result);
    
//   }
//   return results
// }
// // async function runWithDelay(promises, delay) {
// //   for (let i = 0; i < promises.length; i++) {
// //     if (i > 0) {
// //       await new Promise(resolve => setTimeout(resolve, delay));
// //     }
// //     const result = await promises[i]();
// //     console.log(result);
// //   }
// // }
// const tasks = [
//   () => Promise.resolve('Task 1'),
//   () => Promise.resolve('Task 2'), 
//   () => Promise.resolve('Task 3')
// ];

// runWithDelay(tasks, 1000);
// // Должен выполнять: Task1 → (пауза 1s) → Task2 → (пауза 1s) → Task3

// Напишите функцию, которая ищет значение по пути в глубоком объекте.
// function getValue(obj, path) {
//  const keys = typeof path === 'string' ? path.split('.') : path
//  let current = obj

//  for (key of keys) {
//   if (typeof current === undefined || typeof current === null) return undefined

//   current = current[key]
//  }
//  return current

// const pathArr = typeof path === 'string' ? path.split('.') : path
//   if (path.length === 0) return obj

//   if (pathArr.length === 1) {
//     return obj ? obj[pathArr[0]] : undefined;
//   }

//   let currentKey = pathArr[0]
//   const remainingPath = pathArr.slice(1);

//   return obj && obj[currentKey] !== undefined ? getValue(obj[currentKey], remainingPath) : undefined
// }

// const obj = {
//   a: {
//     b: {
//       c: 42
//     }
//   },
//   x: [1, { y: 2 }, 3],
//   h: 1
// };

// console.log(getValue(obj, 'a.b.c')); // 42
// console.log(getValue(obj, 'x.1.y')); // 2
// console.log(getValue(obj, 'x.0'));   // 1
// console.log(getValue(obj, 'h'));
// console.log(getValue(obj, 'hsds'));

// Преобразуйте массив объектов в объект с группировкой по ключу.
// function transformArray(arr, key) {
//   if (typeof arr !== 'object' || arr == null) return arr

//   let newObj = {}

//   arr.forEach(user => {
//     if (newObj[user[key]]) {
//       newObj[user[key]].push(user)
//     } else {
//       newObj[user[key]] = [user]
//     }
//   })
//   return newObj
// }

// const users = [
//   { id: 1, name: 'Alice', role: 'admin' },
//   { id: 2, name: 'Bob', role: 'user' },
//   { id: 3, name: 'Charlie', role: 'admin' }
// ];

// console.log(transformArray(users, 'role'));
// // {
// //   admin: [{id: 1, name: 'Alice'}, {id: 3, name: 'Charlie'}],
// //   user: [{id: 2, name: 'Bob'}]
// // }

// .Реализуйте свою функцию map для массивов.
// function customMap(arr, callback) {
//   if (arr === null && typeof arr !== 'object') return arr
//   let results = []

//   arr.forEach(value => results.push(callback(value)))
//   return results
// }

// const numbers = [1, 2, 3];
// const doubled = customMap(numbers, (num) => num * 2);
// console.log(doubled); // [2, 4, 6]


//Напишите функцию, которая проверяет валидность последовательности скобок.
// function isValidBrackets(str) {
//   const stack = []

//   for (let char of str) {
//     if (char === '(' || char === '[' || char === '{') {
//       stack.push(char)
//     } else {
//       if (stack.length === 0) return false

//       let last = stack.pop()

//       if (char === ')' && last !== '(' || char === ']' && last !== '[' || char === '}' && last !== '{') return false
//     }
//   }

//   return true
// }

// console.log(isValidBrackets('(){}[]')); // true
// console.log(isValidBrackets('([{}])')); // true  
// console.log(isValidBrackets('(]')); // false
// console.log(isValidBrackets('([)]')); // false

//! Найдите уникальные объекты по определенному свойству.
// function uniqueBy(arr, prop) {
// if (!Array.isArray(arr)) return arr

//   const results = []
//   const seenValues = new Set()

//   for (let i = 0; i < arr.length; i++) {
//     const currentItem = arr[i]
//     const propValue = currentItem[prop]

//     if (!seenValues.has(propValue)) {
//       seenValues.add(propValue)
//       results.push(currentItem)
//     }
//   }

//   return results
// }

// const items = [
//   { id: 1, category: 'fruit' },
//   { id: 2, category: 'vegetable' },
//   { id: 3, category: 'fruit' },
//   { id: 4, category: 'dairy' }
// ];

// console.log(uniqueBy(items, 'category'));
// // [{id:1, category:'fruit'}, {id:2, category:'vegetable'}, {id:4, category:'dairy'}]

//! Реализуйте функцию композиции для других функций.
// function compose(...fns) {
//   return fns.reduceRight((prevFn, nextFn) => (...args) => nextFn(prevFn(args)))
// }

// const add5 = (x) => x + 5;
// const multiply3 = (x) => x * 3;
// const subtract2 = (x) => x - 2;

// const composed = compose(add5, multiply3, subtract2);
// console.log(composed(10)); // (10 - 2) * 3 + 5 = 29

//! Найдите различия между двумя объектами.
// function objectDiff(obj1, obj2) {
//   const allKeys = new Set([...Object.keys(obj1), ...Object.keys(obj2)])
//   const diff = {}

//   for (const key of allKeys) {
//     if (obj1[key] !== obj2[key]) {
//       diff[key] = {old: obj1[key], new: obj2[key]}
//     }
//   }
//   return diff

//   // let newObj = {}
//   // for (let key in obj1) {
//   //   if (obj1[key] === obj2[key]) {
//   //     continue
//   //   } else {
//   //     newObj[key] = {old: obj1[key], new: obj2[key]}
//   //   }

//   // }
//   // for (let key in obj2) {
//   //   if (newObj[key] === obj2[key] || obj1[key] === obj2[key]) {
//   //     continue
//   //   } else {
//   //     newObj[key] = {old: obj1[key], new: obj2[key]}
//   //   }
//   // }
//   // return newObj
// }

// const objA = { a: 1, b: 2, c: 3 };
// const objB = { a: 1, b: 5, d: 4 };

// console.log(objectDiff(objA, objB));
// // { b: { old: 2, new: 5 }, c: { old: 3, new: undefined }, d: { old: undefined, new: 4 } }

//! Создайте функцию, которая генерирует случайный HEX-цвет.
// function randomHexColor() {
//   return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')

//   const hexChars = '0123456789ABCDEF';
//   let color = '#'

//   for (let i = 0; i < 6; i++) {
//     const randomIndex = Math.floor(Math.random() * hexChars.length)
//     color += hexChars[randomIndex]
//   }
//   return color
// }

// console.log(randomHexColor()); // '#a3f1c5'
// console.log(randomHexColor()); // '#ff0033'

//! 1 Реализуйте сортировку массива объектов по нескольким полям.
// function sortByFields(arr, fields) {
//   return arr.sort((a,b) => {
//     for (let value of fields) {
//       if (a[value] !== b[value]) {
//         return a[value] > b[value] ? 1 : -1
//       } 
//     }
//     return 0
//   })
// }

// const people = [
//   { name: 'Alice', age: 30, city: 'London' },
//   { name: 'Bob', age: 25, city: 'Paris' },
//   { name: 'Charlie', age: 30, city: 'Berlin' },
//   { name: 'Charlie', age: 30, city: 'Aaaerlin' }
// ];

// console.log(sortByFields(people, ['age', 'city']));
// // Сначала по age (по возрастанию), затем по city (алфавиту)

//!  2 Создайте функцию, которая отклоняет промис, если он не выполняется за указанное время.
// function promiseWithTimeout(promise, timeout) {
//   const timeoutPromise = new Promise((resolve, reject) => setTimeout(() => reject("Timeout!"), timeout))
//  return Promise.race([promise, timeoutPromise]).then(value => console.log(value)).catch((error) => console.log(error))
// }

// // Использование:
// const slowPromise = new Promise(resolve => setTimeout(() => resolve('Done'), 2000));
// promiseWithTimeout(slowPromise, 3000).catch(console.log); // "Timeout!"

//! Напишите функцию для глубокого слияния двух объектов.
// function deepMerge(obj1, obj2) {
//   let result = deepClone(obj1)

//   for (let key in obj2) {
//     if (typeof obj2[key] === 'object' && typeof result[key] === 'object') {
//       result[key] = deepMerge(result[key], obj2[key])
//     } else {
//       result[key] = deepClone(obj2[key])
//     }
//   }
//   return result
// }

// function deepClone(obj) {
//   let clone = {}

//   if (obj === null || typeof obj !== 'object') return obj

//   for (let key in obj) {
//     clone[key] = deepClone(obj[key])
//   }

//   return clone
// }
// const obj1 = { a: 1, b: { x: 10 } };
// const obj2 = { b: { y: 20 }, c: 3 };
// console.log(deepMerge(obj1, obj2)); // { a: 1, b: { x: 10, y: 20 }, c: 3 }

// 3. Функция Currying
//! Реализуйте каррирование для функции.
// function curry(fn) {
//   return function curried(...args) {
//     if (args.length >= fn.length) {
//       return fn.apply(this, args)
//     } else {
//       return (...nextArgs) => curried.apply(this, args.concat(nextArgs))
//     }
//   }
// }

// const sum = (a, b, c) => a + b + c;
// const curriedSum = curry(sum);
// console.log(curriedSum(1)(2)(3)); // 6
// console.log(curriedSum(1, 2)(3)); // 6

//! 4. Пагинация массива
// Создайте функцию пагинации для массива.
// function paginate(array, page, perPage) {
//   let totalItemInPage = Math.ceil(array.length / perPage)
//   let arr = []
//   let endIndex = totalItemInPage
//   for (let startIndex = 0; startIndex < array.length; startIndex+=totalItemInPage) {
//     arr.push(array.slice(startIndex, endIndex))
//     endIndex += totalItemInPage
//   }
//   return {data: arr[page - 1], page: page, totalPages: perPage}
  
// }

// const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(paginate(data, 2, 3)); // { data: [4, 5, 6], page: 2, totalPages: 3 }

