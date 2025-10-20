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

// 5. Частичное применение
//! Реализуйте функцию partial application.
// function partial(fn, ...args) {
//   return function(...nextArgs) {
//     return fn.apply(this, args.concat(nextArgs))
//   }
// }

// const multiply = (a, b, c) => a * b * c;
// const multiplyByTwo = partial(multiply, 2);
// console.log(multiplyByTwo(3, 4)); // 24

// 6. Трансформация ключей объекта
// Напишите функцию, которая трансформирует ключи объекта.
// function transformKeys(obj, transformer) {
//     let results = {}
//     for (let key in obj) {
//       results[transformer(key)] = obj[key]
//     }
//     return results
// }

// const user = { firstName: 'John', lastName: 'Doe' };
// console.log(transformKeys(user, key => key.toUpperCase())); // { FIRSTNAME: 'John', LASTNAME: 'Doe' }

// 7. Генератор диапазона чисел
// Создайте функцию-генератор диапазона чисел.
// function range(start, end, step = 1) {
//   let results = []
//   for (start; start <= end; start += step) {
//     results.push(start)
//   }
//   return results
// }
// function* range(start, end, step = 1) {
//   for (let i = start; i <= end; i += step) {
//     yield i
//   }
// }
// console.log([...range(1, 5)]); // [1, 2, 3, 4, 5]
// console.log([...range(0, 10, 2)]); // [0, 2, 4, 6, 8, 10]

// 8. Мемоизация с несколькими аргументами
// Улучшите мемоизацию для работы с несколькими аргументами.
// function memoize(fn) {
//   let cache = {}

//   return function(...args) {
//     if (cache[args]) {
//       console.log(cache);
//       return cache[args]
//     } else {
//       cache[args] = fn(...args)
//       return cache[args]
//     }
//   }
// }

// function memoize(fn) {
//   const cache = new Map()

//   return function(...args) {
//     const key = JSON.stringify(args)

//     if (cache.has(key)) {
//       console.log(`Cache, ${key}`);
//       return cache.get(key)
//     } else {
//       const result = fn(...args)
//       cache.set(key, result)
//       return result
//     }
//   }
// }

// const sum = (a, b) => a + b;
// const memoizedSum = memoize(sum);
// console.log(memoizedSum(1, 2)); // вычисляется
// console.log(memoizedSum(1, 2)); // из кэша
// console.log(memoizedSum(3, 5)); // из кэша
// console.log(memoizedSum(3, 5)); // из кэша
// console.log(memoizedSum(11, 2)); // из кэша
// console.log(memoizedSum(11, 2)); // из кэша
// console.log(memoizedSum(11, 4)); // из кэша
// console.log(memoizedSum(11, 4)); // из кэша

// 9. Группировка по условию
// Сгруппируйте элементы массива по результату функции.
// function groupBy(array, fn) {
//   let results = {}

//   array.forEach(item => {
//     let key = fn(item)
//     if (results[key]) {
//       results[key] = results[key].concat(item)
//     } else {
//       results[key] = [item]
//     }
//   })
//   return results
// }
// function groupBy(array, fn) {
//   return array.reduce((acc, item) => {
//     const key = fn(item);
//     acc[key] = acc[key] || []
//     acc[key].push(item)
//     return acc
//   }, {})
// }
// const numbers = [1.2, 2.3, 3.1, 4.7, 5.8, 5.4];
// console.log(groupBy(numbers, Math.floor)); // { 1: [1.2], 2: [2.3], 3: [3.1], 4: [4.7], 5: [5.8] }

// 10. Функция Pipe
// Реализуйте функцию pipe для последовательного применения функций.
// function pipe(...fns) {
//   return fns.reduce((prevFn, nextFn) => (...args) => nextFn(prevFn(...args)))
// }

// function pipe(...fns) {
//   return function(x) {
//     return fns.reduce((result, fn) => fn(result), x)
//   }
// }

// const add5 = x => x + 5;
// const multiply3 = x => x * 3;
// const subtract2 = x => x - 2;

// const piped = pipe(subtract2, multiply3, add5);
// console.log(piped(10)); // (10 - 2) * 3 + 5 = 29

// 1. Promise Retry
// Создайте функцию, которая повторяет промис указанное количество раз при ошибке.
// function retry(promiseFn, retries) {
//  return new Promise((resolve, reject) => {
//     let attempts = 0;


//     function execute() {
//         attempts++;


//         promiseFn()
//         .then(result => {
//             resolve(result)
//         })
//         .catch(error => {
//             if (attempts >= retries) {
//                 reject(error)
//             } else {
//                 console.log(`Attempt ${attempts} failed, retrying...`);
//                 execute();
//             }
//         })
//     }
//     execute();
//  })
// }


// const unstablePromise = () => Math.random() > 0.3 ? Promise.resolve('Success') : Promise.reject('Error');
// retry(unstablePromise, 3).then(console.log).catch(console.log);


// 2. Deep Object Comparison
// Напишите функцию для глубокого сравнения двух объектов.
// function deepEqual(obj1, obj2) {
//   if (obj1 == null || typeof obj1 !== 'object' || obj2 == null || typeof obj2 !== 'object') return false

//   let keys1 = Object.keys(obj1)
//   let keys2 = Object.keys(obj2)

//   if (keys1.length !== keys2.length) return false

//   for (let key in keys1) {
//     if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
//       return false
//     }
//   }
//   return true
// }

// const obj1 = { a: 1, b: { c: 2, d: { g: 5} } };
// const obj2 = { a: 1, b: { c: 2, d: { g: 5} } };
// console.log(deepEqual(obj1, obj2)); // true

// 3. Функция Throttle
// Реализуйте функцию throttle.
// function throttle(func, delay) {
//   let isThrottle = false
//   let saveArgs = null

//   return (...args) => {

//     if (isThrottle) {
//       saveArgs = args
//       return
//     }

//     func(...args)
//     isThrottle = true

//     setTimeout(() => {
//       isThrottle = false
      
//       if (saveArgs) {
//         func(...saveArgs)
//         isThrottle = true
//         setTimeout(() => isThrottle = false, delay)
//       }

//     }, delay)
//   }
// }

// const throttled = throttle(() => console.log('Called'), 1000);
// Многократные вызовы будут выполняться не чаще чем раз в delay

// 4. Трансформация дерева
// Преобразуйте плоский массив в древовидную структуру.
// function buildTree(items, parentId = null) {
//   const children = items.filter(item => item.parentId === parentId)
//   console.log('sss', children);
  
//   return children.map(child => ({
//     ...child,
//     children: buildTree(items, child.id)
//   }))
// }

// function buildTree(items, parentId = null) {
//   const map = new Map()
//   const roots = []

//   items.forEach(item => {
//     map.set(item.id, {...item, children: []});
//   })

//   items.forEach(item => {
//     if (item.parentId === null) {
//       roots.push(map.get(item.id))
//     } else {
//       const parent = map.get(item.parentId);
//       if (parent) {
//         parent.children.push(map.get(item.id))
//       }
//     }
//   })
//   return roots
// }

// const categories = [
//   { id: 1, name: 'Electronics', parentId: null },
//   { id: 2, name: 'Phones', parentId: 1 },
//   { id: 3, name: 'Laptops', parentId: 1 },
//   { id: 4, name: 'iPhone', parentId: 2 }
// ];

// console.log(buildTree(categories));

// 5. Custom Reduce
// Реализуйте свою функцию reduce.
// function customReduce(array, callback, initialValue) {
//   let result = initialValue

//   for (let i = 0; i < array.length; i++) {
//     result = callback(result, array[i])
//   }
//   return result
// }

// const numbers = [1, 2, 3, 4];
// const sum = customReduce(numbers, (acc, num) => acc + num, 0);
// console.log(sum); // 10

// 6. Очередь с приоритетом
// Создайте простую очередь с приоритетом.
// class PriorityQueue {
//   constructor() {
//     this.items = []
//   }
  
//   enqueue(item, priority) {
//     this.items.push({ item, priority})
//   }
//   dequeue() {
//     this.items.sort((a, b) => a.priority - b.priority)
//     return this.items.shift().item
//   }
//   peek() {
//     this.items.sort((a, b) => a.priority - b.priority)
//     return this.items[0].item
//   }
// }

// const pq = new PriorityQueue();
// pq.enqueue('Task 1', 2);
// pq.enqueue('Task 2', 1);
// pq.enqueue('Task 3', 3);
// console.log(pq.dequeue()); // 'Task 2' (самый высокий приоритет)

// 7. Функция Memoize с TTL
// Добавьте время жизни для мемоизации.
// function memoizeWithTTL(fn, ttl) {
//   let cache = new Map()

//   setTimeout(() => cache = new Map(), ttl)
//   return (...args) => {
//     let key = JSON.stringify(args)
    
//     if (cache.has(key)) {
//       console.log('From cache');
//       return cache.get(key)
//     } else {
//       let result = fn(...args)
//       console.log('New key');
//       cache.set(key, result)
//       return cache.get(key)
//     }
//   }
// }

// function memoizeWithTTL(fn, ttl) {
//   const cache = new Map();
  
//   return (...args) => {
//     const key = JSON.stringify(args);
//     const now = Date.now();
    
//     if (cache.has(key)) {
//       const { value, timestamp } = cache.get(key);
//       if (now - timestamp < ttl) {
//         console.log('From cache');
//         return value;
//       }
//     }
    
//     console.log('New calculation');
//     const result = fn(...args);
//     cache.set(key, { value: result, timestamp: now });
//     return result;
//   };
// }

// const memoized = memoizeWithTTL((a, b) => a + b, 5000);
// console.log(memoized(2, 3)); // 5
// console.log(memoized(2, 3)); // Должен вернуть из кэша
// setTimeout(() => {
//   console.log(memoized(2, 3)); // Должен пересчитать
// }, 6000);
// console.log(memoized(1, 1)); // 2
// console.log(memoized(2, 2)); // 4
// console.log(memoized(1, 1)); // Должен быть из кэша


// 8. Парсер query string
// Напишите парсер query string из URL.
// function parseQueryString(queryString) {
//    let result = {}

//    queryString = queryString.replace(/\?/, '')
//    let arr = queryString.split("&")
//    arr = arr.map(item => item.split("="))
  
//    arr.forEach(item => {
//     result[item[0]] = item[1]
//    })
//    return result
// }
// function parseQueryString(queryString) {
//   return Object.fromEntries(
//     queryString
//     .replace(/^\?/, '')
//     .split('&')
//     .map(pair => pair.split('=').map(decodeURIComponent))
//   )
// }
// console.log(parseQueryString('?name=John&age=30&city=NY'));
// { name: 'John', age: '30', city: 'NY' }

// 9. Генератор уникального ID
// Создайте функцию для генерации уникального ID.
// function generateId(prefix = '') {
//   let id = ''
//   const letters = 'abcdefghijklmnopqrstuvwxyz0123456789'

//   if (prefix) {
//     id = prefix + '_'
//   }

//   for (let i = 0; i < 8; i++) {
//     const randomIndex = Math.floor(Math.random() * letters.length)
//     const randomChar = letters[randomIndex]
//     id += randomChar
//   }

//   return id
// }

// function generateId(prefix = '') {
//   const id = Math.random().toString(36).substring(2, 10);
//   return prefix ? `${prefix}_${id}` : id;
// }
// console.log(generateId('user')); // 'user_1a2b3c4d'
// console.log(generateId()); // '1a2b3c4d'

// 10. Validation функции
// Создайте цепочку валидаторов.
// function createValidator(rules) {
//   return (value) => {
//     const errors = []

//     rules.forEach(rule => {
//       result = rule(value)
      
//       if (typeof result === 'string') {
//         errors.push(result)
//       }

//     })

//     return {
//       valid: errors.length === 0,
//       errors
//     }
//   }
// }

// const validateUser = createValidator([
//   value => value.length >= 3 || 'Too short',
//   value => /^[a-zA-Z]+$/.test(value) || 'Only letters allowed',
//   value => value[0] === value[0].toUpperCase() || 'Must start with capital'
// ]);

// console.log(validateUser('John')); // { valid: true, errors: [] }
// console.log(validateUser('jo')); // { valid: false, errors: ['Too short', 'Must start with capital'] }

//! 1. Фильтрация и трансформация данных
// function getActiveUsers(users) {
//   return users.filter(user => user.age >= 18 && user.isActive)
// }

// const users = [
//   { name: 'John', age: 25, isActive: true },
//   { name: 'Jane', age: 17, isActive: true },
//   { name: 'Bob', age: 30, isActive: false }
// ];

// console.log(getActiveUsers(users));
// Ожидаемый результат: ['John']

//! 2. Работа с датами
// function getNextWeekday(date, weekday) {
//   let newDate = new Date(  Date.parse(date) )
 
//   let resuslt = new Date(newDate.setDate(newDate.getDate() + weekday))
//   return resuslt
//   // Вернуть следующую указанную день недели от заданной даты
//   // weekday: 0-воскресенье, 1-понедельник, etc.
// }

// console.log(getNextWeekday(new Date('2024-01-20'), 1)); // Следующий понедельник

//! 3. Обработка ошибок в Promise
// function fetchWithFallback(url, fallbackData) {
//     return new Promise((resolve, reject) => {
//       fetch(url)
//       .then(() => resolve(url))
//       .catch(() => reject(fallbackData))
//     })
//   // Сделать запрос, при ошибке вернуть fallbackData
// }

// fetchWithFallback('/api/data', { default: 'data' })
//   .then(result => console.log('Success:', result))
//   .catch(e => console.log('Error:', e))

//! 4. Группировка по диапазонам
// function groupByAgeRange(people) {
//   let group = {
//     '0-17': [],
//     '18-35': []
//   }
//   people.forEach(item => {
//     if (item.age >= 0 && item.age <= 17) {
//       group['0-17'].push(item)
//     } else if (item.age >= 18 && item.age <= 35) {
//       group['18-35'].push(item)
//     } 
//   })
//   return group
// }

// const people = [
//   { name: 'John', age: 15 },
//   { name: 'Jane', age: 25 },
//   { name: 'Bob', age: 35 }
// ];
// console.log(groupByAgeRange(people));

// Ожидаемый результат: { '0-17': ['John'], '18-35': ['Jane', 'Bob'] }

//! 5. Дебаунс для поиска
// function createSearch(inputElement, onSearch) {
//   let timeout = null

//   inputElement.addEventListener('input', (event) => {
    
//     if (timeout) {
//       clearTimeout(timeout)
//     }

//    timeout = setTimeout(() => {
//       // onSearch(event.target.value)
//       // onSearch.apply(null, [event.target.value])
//       onSearch(inputElement.value)
//     }, 300)

//   })
// }

// const input = document.getElementById('search')
// createSearch(input, (searchTerm) => {
//   console.log('Ищем: ', searchTerm);
// });


//! 6. Валидация формы
// function validateForm(data) {
//   const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email);
//   return data.password.length >= 8 && isValidEmail 
//   // Проверить: email должен быть валидным, password >= 8 символов
// }

// console.log(validateForm({ email: 'test@test.com', password: '12345678' })); // true

//! 7. Кэширование результатов API
// function createCachedFetch() {
//     const cache = new Map()

//     return async (url) => {
//         const CACHE_TTL = 5 * 60 * 1000;

//         if (cache.has(url)) {
//             const cached = cache.get(url);
//                 if (Date.now() - cached.timestamp < CACHE_TTL) {
//                     return cached.data;  
//                 }
//             }

//         const response = await fetch(url);
//         const data = await response.json();
        
//         // Сохраняем структурированно
//         cache.set(url, {
//             data: data,
//             timestamp: Date.now()
//         });
        
//         return data;
//     }

  
//   // Вернуть функцию, которая кэширует результаты fetch на 5 минут
// }
// const cachedFetch = createCachedFetch();

// // Первый вызов - сделает реальный запрос
// cachedFetch('https://api.example.com/data')

// // Повторный вызов (в течение 5 минут) - вернет из кэша  
// cachedFetch('https://api.example.com/data')

//! 8. Сортировка с кастомным компаратором
// function sortByMultipleFields(array, fields) {
//     return array.sort((a,b) => {
//         for (let value of fields) {            
//             if (a[value] !== b[value]) {
//                 return a[value] > b[value] ? 1 : -1
//             }
//         }
//     })
// }

// const data = [
//   { name: 'John', age: 25 },
//   { name: 'Jane', age: 25 },
//   { name: 'Bob', age: 30 }
// ];
// console.log(sortByMultipleFields(data, ['age', 'name']));

// sortByMultipleFields(data, ['age', 'name']) - сначала по age, потом по name

//! 9. Разница между массивами
// function arrayDifference(arr1, arr2) {
//   let res = []
//   let interableArr = arr1.length >= arr2.length ? arr1 : arr2
//   let isArr1 = arr1.length >= arr2.length
//   for (let i = 0; i < interableArr.length; i++) {
//     if (isArr1) {
//         if (!arr2.includes(arr1[i])) {
//             res.push(arr1[i])
//         }
//     } else {
//         if (!arr1.includes(arr2[i])) {
//                 res.push(arr2[i])
//             }
//     }  
//   }
//   return res
// }

// console.log(arrayDifference([1, 2, 3,6,7], [2, 3, 4,6,8,7,0,10])); // [1]

//! 10. Форматирование чисел
// function formatNumber(num, options = {}) {
//     const formatOptions = {
//         style: 'currency',
//         currency: options.currency,
//         minimumFractionDigits: 2,   
//         maximumFractionDigits: 2
//     }

//     const formatter = new Intl.NumberFormat('en-Us', formatOptions)
//     return formatter.format(num)
//   // Форматировать число: разделители тысяч, валюта, etc.
// }

// console.log(formatNumber(1234567.89, { currency: 'USD' })); // "$1,234,567.89"

//! 1 Удалить все falsy-значения
// Напиши compact(arr) — убери все значения: false, 0, '', null, undefined, NaN.
// function compact(arr) {
//   return arr.filter(item => item)
// }
// console.log(compact([0, 1, false, 2, '', 3]));
// // Пример: [0, 1, false, 2, '', 3] → [1,2,3]

//! 2 Подсчёт частоты слов
// Функция wordFrequency(str) возвращает объект, где ключ — слово, значение — количество повторений.
// function wordFrequency(str) {
//   // let obj = {}
//   // str.split(" ").forEach(word => {
//   //   if (obj[word]) {
//   //     obj[word] += 1
//   //   } else {
//   //     obj[word] = 1
//   //   }
//   // })
//   // return obj

//   return str.split(" ").reduce((acc, word) => {
//     if (acc[word]) {
//       acc[word] += 1
//     } else {
//       acc[word] = 1
//     }
//     return acc
//   }, {})
// }
// console.log(wordFrequency("hello world hello"));

// Пример: "hello world hello" → { hello: 2, world: 1 }

//! 3 Проверка палиндрома (игнорируя регистр и пробелы)
// isPalindromeAdvanced(str)
// function isPalindromeAdvanced(str) {
//   str = str.toLowerCase().replace(/\s+/g, "")
//   return str === str.split("").reverse().join("")
// }
// console.log(isPalindromeAdvanced('A man a plan a canal Panama'));
// Пример: 'A man a plan a canal Panama' → true

//! 4 Пересечение массивов
// intersection(arr1, arr2) → верни элементы, которые есть в обоих массивах.
// function intersection(arr1, arr2) {
//   let setArr = new Set(arr2)
//   return arr1.filter(elem => setArr.has(elem))
//   return  arr1.filter(item => arr2.includes(item)) 
// }
// console.log(intersection([1,2,3,5,4], [2,3,4,5]));
// Пример: [1,2,3] & [2,3,4] → [2,3]

//! 5 Группировка по типу данных
// groupByType(arr) → верни объект, где ключ — тип данных (typeof), а значение — массив элементов.
// function groupByType(arr) {
//   let obj = {}
//   arr.forEach(item => {
//     let key = typeof item

//     if (obj[key]) {
//       obj[key].push(item)
//     } else {
//       obj[key] = [item]
//     }
//   })
//   return obj
// }
// console.log(groupByType([1, 'a', true, 2]));
// Пример: [1, 'a', true, 2] → { number: [1,2], string: ['a'], boolean: [true] }

//! 6 Удаление повторяющихся символов
// removeDuplicateChars(str)
// function removeDuplicateChars(str) {
//   return [...new Set([...str])].join('')
// }
// console.log(removeDuplicateChars('aabbccdde'));
// Пример: 'aabbccdde' → 'abcde'

//! 7 Проверка возраста
// isAdult(users) принимает массив объектов { name, age } и возвращает массив только совершеннолетних.
// function isAdult(users) {
//   return users.filter(user => user.age >= 18)
// }
// console.log(isAdult([{name:'A',age:17},{name:'B',age:22}]));
// Пример: [{name:'A',age:17},{name:'B',age:22}] → [{name:'B',age:22}]

//! 8 Разница между максимальным и минимальным числом
// maxMinDiff(arr)
// function maxMinDiff(arr) {
//   return Math.max(...arr) - Math.min(...arr)
// }
// console.log(maxMinDiff([5, 10, 2]));
// Пример: [5, 10, 2] → 8

//! 9 Удаление заданного ключа из объекта
// removeKey(obj, key)
// function removeKey(obj, key) {
// if (obj[key]) не нужна, иначе не удалятся falsy значения (например, 0 или '').
//   delete obj[key]
//   
//   return obj
// }
// console.log(removeKey({a:1,b:2}, 'a'));
// // Пример: {a:1,b:2}, 'a' → {b:2}

//! 10 Подсчёт уникальных слов
// countUniqueWords(str) — вернуть количество уникальных слов в строке.
// function countUniqueWords(str) {
//   return new Set(str.split(" ").filter(Boolean)).size
// }
// console.log(countUniqueWords('hi hi hello'));
// // Пример: 'hi hi hello' → 2

//! 1. Группировка по первому символу
// Задача:
// Напиши функцию groupByFirstLetter(words), которая группирует слова по первой букве.
// function groupByFirstLetter(words) {
//   let obj = {}
//   words.forEach(word => {
//    word = word.toLowerCase()
//    if (obj[word[0]]) {
//     obj[word[0]].push(word)
//    } else {
//     obj[word[0]] = [word]
//    }
//   })
//   return obj
// }
// console.log(groupByFirstLetter(["apple", "banana", "apricot", "cherry"]));
// Пример:
// groupByFirstLetter(["apple", "banana", "apricot", "cherry"])
// // ➜ { a: ["apple", "apricot"], b: ["banana"], c: ["cherry"] }

//! 2. Найти пользователя по id
// Дан массив пользователей:
// const users = [
//   { id: 1, name: 'Alice' },
//   { id: 2, name: 'Bob' }
// ];
// function findUserById(users, id) {
//   return users.find(user => user.id === id) || null
//   let user = users.find(user => user.id === id)
//   return user === undefined ? null : user
// }
// console.log(findUserById(users, 1));
// Напиши функцию findUserById(users, id), возвращающую объект пользователя по id (или null, если не найден).

//! 3. Развернуть объект
// Функция invertObject(obj) должна поменять ключи и значения местами.
// function invertObject(obj) {
//   let newObj = {}
//   for (let key in obj) {
//     let temp = obj[key]
//     newObj[temp] = key
//   }
//   return newObj
// }
// console.log(invertObject({ a: 1, b: 2, c: 3, b: 5 })); //«Если значения не уникальны — последние перезапишут предыдущие». Это покажет глубину понимания.
// Пример:
// invertObject({ a: 1, b: 2, c: 3 })
// // ➜ { 1: 'a', 2: 'b', 3: 'c' }

//! 4. Сумма значений по ключу
// Дан массив объектов с числовыми значениями:
// [{x: 2}, {x: 5}, {x: 3}]
// Напиши sumByKey(arr, key) → сумма всех значений key.
// let arr = [{x: 2}, {x: 5}, {x: 3}]

// function sumByKey(arr, key) {
//   return arr.reduce((sum, obj) => sum + (obj[key] ||0), 0)
//   let res = 0
//   arr.forEach(item => {
//     if (item[key]) {
//       res += item[key]
//     }
//   })
//   return res
// }
// console.log(sumByKey([{x: 2}, {x: 5}, {x: 3}], 'x'));
// Пример:
// sumByKey([{x: 2}, {x: 5}, {x: 3}], 'x') // ➜ 10

//! 5. Удалить дубликаты объектов по ключу
// Напиши функцию uniqueByKey(arr, key), которая удаляет дубликаты по указанному ключу.
// function uniqueByKey(arr, key) {
//   let seen = {}
//   let result = []
//   arr.forEach(user => {
//     if (!seen[user[key]]) {
//       let currentKey = user[key]
//       seen[currentKey] = true
//       result.push(user)
//     }
//   })
//   return result
// }

// // Пример:
// console.log(uniqueByKey([
//   { id: 1, name: "A" },
//   { id: 2, name: "B" },
//   { id: 1, name: "C" }
// ], "id"));
// // ➜ [{id:1,name:"A"}, {id:2,name:"B"}]

//! 6. Проверка, что массив отсортирован
// isSorted(arr) → возвращает true, если массив чисел отсортирован по возрастанию.
// function isSorted(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < arr[i - 1]) {
//       return false
//     }
//   }
//   return true
// }
// console.log(isSorted([1, 2, 3]));
// console.log(isSorted([3, 2, 1]));
// Пример:
// isSorted([1, 2, 3]) // true  
// isSorted([3, 2, 1]) // false

//! 7. Фильтр уникальных значений
// unique(arr) → верни новый массив только с уникальными элементами (без Set).
// function unique(arr) {
//   let result = []
//   for (let i = 0; i < arr.length; i++) {
//     if (!result.includes(arr[i])) {
//       result.push(arr[i])
//     }
//   }
//   return result
// }
// console.log(unique([1,2,2,3,1]));
// Пример:
// unique([1,2,2,3,1]) // ➜ [1,2,3]

//! 8. Среднее значение массива
// average(arr) → верни среднее арифметическое чисел.
// function average(arr) {
//  return arr.reduce((acc, num) => acc + num, 0) / arr.length
// }
// console.log(average([2,4,6,8]));
// Пример:
// average([2,4,6,8]) // ➜ 5

//! 9. Глубокое клонирование объекта
// deepClone(obj) → верни глубокую копию объекта (без structuredClone).
// function deepClone(obj) {
//   if (obj === null || typeof obj !== 'object') return obj

//   if (Array.isArray(obj)) return obj.map(item => deepClone(item))
  
//   let copy = {}

//   for (let key in obj) {
//     copy[key] = deepClone(obj[key])
//   }
//   return copy
// }
// // Пример:
// const a = {x: 1, y: {z: 2}};
// const b = deepClone(a);
// b.y.z = 10;
// console.log(a.y.z); // 2

//! 10. Самое длинное слово в строке
// longestWord(str) → верни самое длинное слово в строке.
// function longestWord(str) {
//   let arr = str.split(" ")
//   let max = 0
//   let res = ''
//   arr.forEach(word => {
//     if (word.length > max) {
//       max = word.length
//       res = word
//     }
//   });
//   return res
// }
// // Пример:
// console.log(longestWord("I love programming so much")); // ➜ "programming"

//! 1 uniqueBy

// Напиши функцию uniqueBy(arr, key), которая убирает дубликаты объектов по определённому ключу.
// function uniqueBy(arr, key) {
//     if (!Array.isArray(arr)) return arr
//     let seen = new Set()
//     let result = []

//     for (let i = 0; i < arr.length; i++) {
//         const currentItem = arr[i];
//         const propValue = currentItem[key]

//         if (!seen.has(propValue)) {
//             seen.add(propValue)
//             result.push(currentItem)
//         }
        
//     }
//     return result
// }
// // // Пример:
// console.log(uniqueBy([
//   {id: 1, name: 'a'},
//   {id: 2, name: 'b'},
//   {id: 1, name: 'c'}
// ], 'id'));
// // → [{id:1,name:'a'}, {id:2,name:'b'}]

//! 2 groupBy
// Реализуй функцию groupBy(arr, key), которая группирует элементы массива по значению ключа.
// function groupBy(arr, key) {
//     let result = {}

//     for (let i = 0; i < arr.length; i++) {
//         const currentItem = arr[i]
         
//         if (currentItem[key]) {
//             const currentValue = currentItem[key]
            
//             if (result[currentValue]) {
//                 result[currentValue].push({name: currentItem.name})
//             } else {
//                 result[currentValue] = [{name: currentItem.name}]
//             }
//         }
//     }
//     return result
// }
// Пример:
// console.log(groupBy([
//   { type: 'fruit', name: 'apple' },
//   { type: 'vegetable', name: 'carrot' },
//   { type: 'fruit', name: 'banana' }
// ], 'type'));
// → {
//   fruit: [{name:'apple'}, {name:'banana'}],
//   vegetable: [{name:'carrot'}]
// }

//! 3 once
// Создай функцию once(fn), которая позволяет вызвать fn только один раз.
// Все последующие вызовы должны возвращать первый результат.
// function once(fn) {
//     let isActive = false
//     let result = null

//    return (...args) => {
//      if (!isActive)  {
//         isActive = true
//         result = fn.apply(this, args)
//      }
//     return result
    
//    }
// }
// const hello = once(() => "Hi!");
// console.log(hello()); // "Hi!"
// console.log(hello()) // "Hi!" (но функция уже не выполняется повторно)

//! 4 compose
// Реализуй функцию compose(f, g), которая возвращает новую функцию,
// выполняющую f(g(x)).
// function compose(f, g) {
//     return function(x) {
//         let value = g(x)
//         return f(value)
//     }
// }
// const add1 = x => x + 1;
// const double = x => x * 2;
// const add1ThenDouble = compose(double, add1);
// console.log(add1ThenDouble(2)); // 6

//! 5 arrayDiff
// Напиши функцию arrayDiff(a, b), которая возвращает массив a,
// из которого удалены все элементы, встречающиеся в b.
// function arrayDiff(a, b) {
//     for (let i = 0; i < b.length; i++) {
//       for (let j = a.length; j > 0 ; j--) {
//           if (a[j] == b[i]) {
//             a.splice(j, 1)
//         }
//       }
//     }
//     return a
// }
// console.log(arrayDiff([1,2,2,3], [2])); // → [1,3]

//!6 flattenObject
// Преобразуй вложенный объект в плоский с ключами через точку.
// function flattenObject(obj) {
//     let res = {}

//     for (let key in obj) {
//         if (typeof obj[key] === 'object') {
//             let flattened = flattenObject(obj[key])
//             for (let subKey in flattened) {
//                 let newKey = key + '.' + subKey
//                 res[newKey] = flattened[subKey]
//             }
            
//         } else {
//             res[key] = obj[key]
//         }
//     }
//     return res
// }
// console.log(flattenObject({ a: { b: { c: 1 } }, d: 2 }));
// // → { "a.b.c": 1, d: 2 }

//! 7 deepClone
// Реализуй глубокое копирование объекта без использования structuredClone или _.cloneDeep.
// function deepClone(obj) {
//     if (obj === null || typeof obj !== 'object') return obj

//     if (Array.isArray(obj)) return obj.map(item => deepClone(item))

//     let copy = {}

//     for (let key in obj) {
//         copy[key] = deepClone(obj[key])
//     }

//     return copy
// }
// const obj = { a:1, b:{ c:2 } }
// const copy = deepClone(obj)
// obj.b.c = 5
// console.log(copy.b.c) // 2

//! 8 intersection
// Реализуй функцию intersection(arr1, arr2), которая возвращает массив общих элементов без дубликатов.
// function intersection(arr1, arr2) {
//     let set = new Set(arr2)
//     return arr1.filter(item => set.has(item))
// }
// console.log(intersection([1,2,3,4], [3,4,5,6]) );// → [3,4]

//! 9 deepMerge
// Напиши функцию deepMerge(obj1, obj2), которая рекурсивно объединяет два объекта.
// Если значения — объекты, нужно объединять их, иначе перезаписывать.
// function deepMerge(obj1, obj2) {
//     let result = deepClone(obj1)

//     for (key in obj2) {
//         if (typeof result[key] === 'object' && 
//             typeof obj2[key] === 'object' && 
//             result[key] !== null && 
//             obj2[key] !== null) {
//             result[key] = deepMerge(result[key], obj2[key])
//         } else {
//             result[key] = obj2[key]
//         }
//     }
//     return result
// }
// function deepClone(obj) {
//     if (obj === null || typeof obj !== 'object') return obj

//     if (Array.isArray(obj)) return obj.map(item => deepClone(item))

//     let copy = {}

//     for (let key in obj) {
//         copy[key] = obj[key]
//     }

//     return copy
// }
// console.log(deepMerge({a:1,b:{c:2}}, {b:{d:3},e:4})); // → {a:1,b:{c:2,d:3},e:4}

//! 10 sleep
// Создай функцию sleep(ms), которая возвращает промис,
// резолвящийся через ms миллисекунд.
// Добавь пример использования с async/await.
// function sleep(ms) {
//     return new Promise((resolve) => setTimeout(() => resolve(), ms))
//     return new Promise(resolve => setTimeout(resolve, ms));
// }
// (async function() {
//     console.log("Start");
//     await sleep(1000);
//     console.log("1 секунда прошла");
//     await sleep(2000);
//     console.log("Еще 2 секунды прошли");
// })();

//! filterFalsy
// Удаляет из массива все falsy значения (false, 0, "", null, undefined, NaN).
// function filterFalsy(arr) {
//   return arr.filter(Boolean)
// }
// console.log(filterFalsy([0, 1, false, 2, '', 3, null])); // → [1, 2, 3]

//! wordFrequency
// Подсчитывает частоту каждого слова в строке.
// function wordFrequency(str) {
//   return str.split(" ").reduce((acc, word) => {
//     if (acc[word]) {
//       acc[word] += 1
//     } else {
//       acc[word] = 1
//     }
//     return acc
//   }, {})
// }
// console.log(wordFrequency("hello world hello")) // → { hello: 2, world: 1 }

//! isPalindromeAdvanced
// Проверяет строку, игнорируя регистр и пробелы.
// function isPalindromeAdvanced(str) {
//   str = str.toLowerCase().replace(/[^a-zа-я0-9]/gi, "")
//   return str === str.split("").reverse().join("")

// }
// console.log(isPalindromeAdvanced("A man a plan a canal Panama")); // → true
// console.log(isPalindromeAdvanced("Hello")); // → false

//! intersection
// Находит пересечение двух массивов (общие элементы).
// function intersection(arr1, arr2) {
//   //return arr1.filter(item => arr2.includes(item))
//   // Если нужны уникальные
//   let set = new Set(arr2)
//   return arr1.filter(item => set.has(item))
// }
// console.log(intersection([1,2,3,4], [3,4,5]) )// → [3,4]

//! groupByType
// Группирует элементы массива по типу (typeof).
// function groupByType(arr) {
//   let results = {}
  
//   arr.forEach(element => {
//     const key = typeof element

//     if (results[key]) {
//       results[key].push(element)
//     } else {
//       results[key] = [element]
//     }
//   });
//   return results
// }
// console.log(groupByType([1, 'a', true, 2])) // → { number: [1,2], string: ['a'], boolean: [true] }

//! removeDuplicateChars
// Удаляет повторяющиеся символы в строке, оставляя первый вариант.
// function removeDuplicateChars(str) {
//   return [...new Set(str.split(""))].join("").toString()
// }
// console.log(removeDuplicateChars('aabbccdde')) // → 'abcde'

//! isAdult
// Отбирает пользователей старше или равных 18 лет.
// function isAdult(arr) {
//   return arr.filter(user => user?.age > 18)
// }
// console.log(isAdult([{ name:'A', age:17},{ name:'A',}, { name:'B', age:22 }])) // → [{name:'B', age:22}]

//! maxMinDiff
// Вычитание: максимум минус минимум в массиве.
// function maxMinDiff(arr) {
//   return Math.max(...arr) - Math.min(...arr)
// }
// console.log(maxMinDiff([5,10,2])) // → 8


//! removeKey
// Удаляет свойство из объекта по ключу.
// function removeKey(obj, key) {
//   delete obj[key]
//   return obj
// }
// console.log(removeKey({a:1, b:2}, 'a')) // → { b:2 }

//! countUniqueWords
// Считает количество уникальных слов в строке.
// function countUniqueWords(str) {
//   return [...new Set(str.split(" "))].length
// }
// console.log(countUniqueWords("hi hi hello")); // → 2

//! uniqueBy
// Убирает дубликаты объектов по заданному ключу.
// function uniqueBy(arr, key) {
//   let seen = new Set()
//   let results = []
//   arr.forEach(obj => {
//     if (!seen.has(obj[key])) {
//       seen.add(obj[key])
//       results.push(obj)
//     }
//   })
//   return results
// }
// console.log(uniqueBy([
//   {id:1, name:'A'},
//   {id:2, name:'B'},
//   {id:1, name:'C'}
// ], 'id')); // → [{id:1, name:'A'}, {id:2, name:'B'}]

//! once
// Функция, которую можно вызвать только один раз — последующие вызовы возвращают тот же результат.
// function once(fn) {
//   let isActive = false
//   let result = null

//   if (isActive) return result

//   return (...args) => {
//     isActive = true
//     result = fn(...args)
//   }
// }
// const sayHi = once(() => console.log("Hello"));
// sayHi(); // → "Hello"
// sayHi(); // → "Hello", но не вызывает оригинальную функцию вновь

//! compose
// Композиция функций: compose(f, g)(x) = f(g(x)).
// function compose(f, g) {
//   return (x) => {
//       let res = g(x)
//       return f(res)
//   }
// }
// const add = x => x + 1;
// const mul2 = x => x * 2;
// const f = compose(mul2, add);
// console.log(f(3)); // → 8 (add(3)=4, mul2(4)=8)

//! arrayDiff
// Удаление всех элементов из a, которые присутствуют в b.
// function arrayDiff(a, b) {
//   return a.filter(item => !b.includes(item))
// }
// console.log(arrayDiff([1,2,2,3], [2])) // → [1,3]


//! flattenObject
// Преобразование вложенного объекта в “плоский” с ключами через точки.
function flattenObject(obj, prefix = '') {
    let res = {}
    
    for (let key in obj) {
        const newKey = prefix ? `${prefix}.${key}` : key;
        
        if (typeof obj[key] === 'object') {
            // Рекурсия с новым префиксом
            Object.assign(res, flattenObject(obj[key], newKey));
        } else {
            res[newKey] = obj[key];
        }
    }
    
    return res;
}

function flattenObject(obj) {
    let res = {}

    for (let key in obj) {
        if (typeof obj[key] === 'object') {
            let flattened = flattenObject(obj[key])
            for (let subKey in flattened) {
                let newKey = key + '.' + subKey
                res[newKey] = flattened[subKey]
            }
            
        } else {
            res[key] = obj[key]
        }
    }
    return res
}

console.log(flattenObject({ a:{ b:{ c:1 } }, d:2 })) // → { "a.b.c": 1, d: 2 }