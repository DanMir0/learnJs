//! Напиши функцию flatten(arr), которая превращает вложенные массивы в плоский.
// function flatten(arr) {
// //? 1 способ
// //      return arr.flat(Infinity)

//     //? 2 способ
//     // let newArr = []
//     // for (let i = 0; i < arr.length; i++) {
//     //     if (Array.isArray(arr[i])) {
//     //         let newArr2 = flatten(arr[i]) 
//     //         newArr = newArr.concat(newArr2)
//     //     } else {
//     //         newArr.push(arr[i])
//     //     }
//     // }
//     // return newArr
    
//  //? 3 способ
//     return arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), [])
// }
// console.log(flatten([1, [2, [3, 4]], 5]));

//! Реализуй функцию debounce(fn, delay), которая вызывает функцию fn не чаще, чем раз в delay миллисекунд, даже если её вызывают много раз подряд.
// function debounce(cb, delay = 1000, immediate = false) {
//     let timer = null

//     return (...args) => {
//         let isCall = immediate && !timer

//         clearTimeout(timer)

//         timer = setTimeout(() => {
//            if (!immediate) cb(...args)
//         }, delay)

//         if (isCall) cb(...args)
//     }
// }
// const a = debounce(() => console.log("hi"), 3000, true);
// a(); 
// a()

// function deepClone(obj) {
//    if (obj === null || typeof obj !== 'object') return obj

//    if (Array.isArray(obj)) {
//     return obj.map(item => deepClone(item))
//    }

//    let copy = {}
//    for (let key in obj) {
//     copy[key] = deepClone(obj[key])
//    }
//    return copy
// }
// let obj = {name: 'Alex', age: 22, skills: {junior: ['html', 'css'], middle: 'A'}}
// let copy = deepClone(obj)
// obj.skills.junior[0] = 'asad'
// console.log(obj);
// console.log(copy);

// function once(fn) {
//     let isCompleted = false
//     let res = null
//     return (...args) => {
//         if (!isCompleted) {
//             isCompleted = true
//             res = fn(...args)
//         } 
//         return res
//     }
// }

// const f = once((x) => x * 2);
// const a = once((x) => x * 2);
// console.log(f(2)); // 4
// console.log(f(5)); // всё равно 4
// console.log(f(10)); // всё равно 4
// console.log(a(10)); 
// console.log(a(5)); 

/*
function throttle (fn, delay = 500) {
  let timer ;
  
  return (...args) => {
    if (timer) return
    fn(...args)
    timer = setTimeout(() => {
      clearTimeout(timer)
      timer = null
    }, delay)
    
  }
}

const log = throttle(() => console.log("hi"), 1000);
log(); // "hi"
log(); // игнорируется, если вызвано раньше чем через 1с
*/
/*
function groupBy(arr, fn) {
  let obj = {}
  
  arr.forEach(elem => {
    let key = fn(elem)
    if (key in obj) {
      obj[key] = obj[key].concat(elem)
    } else{
      obj[key] = [].concat(elem)
    }
    
  } )
  
  return obj
}

console.log(groupBy([6.1, 4.2, 6.3], Math.floor))
// { 6: [6.1, 6.3], 4: [4.2] }

console.log(groupBy(['one', 'two', 'three'], str => str.length))
// { 3: ["one", "two"], 5: ["three"] } */

//! Напиши функцию isAnagram(str1, str2), которая проверяет, являются ли две строки анаграммами.
function isAnagram(str1, str2) {
//   if (str1.length !== str2.length) return false
//   let sortStr1 = str1.toLowerCase().split('').sort().join('')
//   let sortStr2 = str2.toLowerCase().split('').sort().join('')
 
//   return sortStr1 === sortStr2 

//? 2
  // let count = {}
  // for (let char of str1) {
  //   count[char] = (count[char] || 0) + 1
  //   console.log('Str1', count);
    
  // }
  //  for (let char of str2) {
  //    if (!count[char]) return false
  //     count[char]--;
  //      console.log('Str2', count);
  // }

  // return true
}

// console.log(isAnagram("listen", "silent")); // true
// console.log(isAnagram("hello", "world"));   // false
// console.log(isAnagram("кот", "ток"));


//! Напиши функцию memoize(fn), которая кеширует результаты вызовов функции:
// function memoize(fn) {
//   // let cache = {}

//   // return (n) => {
//   //   if (n in cache) {
//   //     return cache[n]
//   //   }
//   //   cache[n] = fn(n)
//   //   return cache[n]
//   // }


//   //? 2
//   let cache = new Map()

//   return (...args) => {    
//     let key = JSON.stringify(args)
//     console.log(key);
    
//     if (cache.has(key)) return cache.get(key)

//     let result = fn(...args)
//     cache.set(key, result)
//     return result
//   }
// }

// function slowSquare(n) {
//   console.log("Вычисляю...");
//   return n * n;
// }

// const memoSquare = memoize(slowSquare);

// console.log(memoSquare(5)); // "Вычисляю..." → 25
// console.log(memoSquare(5)); // кеш → 25 (без "Вычисляю...")
// console.log(memoSquare(6)); // "Вычисляю..." → 36


//! Напиши функцию countChars(str), которая возвращает объект с количеством вхождений каждого символа в строке.
// function countChars(str) {
//     if (typeof str !== 'string') return `Это не строка`
//     let obj = {}

//     str.split('').forEach(char => {
//         if (obj[char] != undefined) {
//             obj[char] += 1
//         } else {
//             obj[char] = 1
//         }
//     })
//     return obj
// }
// console.log(countChars("hello")); // { h: 1, e: 1, l: 2, o: 1 }

// function countChars(str) {
//     return [...str].reduce((acc, char) => {
//         acc[char] = (acc[char] || 0) + 1
//         return acc
//     }, {})
// }
// console.log(countChars("hello")); // { h: 1, e: 1, l: 2, o: 1 }

//! Напиши функцию twoSum(nums, target), которая находит индексы двух чисел, сумма которых равна target.
// function twoSum(arr, target) {
//     let arrIndex = []

//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] + arr[j] === target) {
//                 arrIndex.push(i)
//                 arrIndex.push(j)
//                 break
//             }
            
//         }
//     }

//     return arrIndex
// }

// function twoSum(nums, target) {
//     const map = new Map()

//     for (let i = 0; i < nums.length; i++) {
//         const need = target - nums[i]
//         if (map.has(need)) {
//             return [map.get(need), i]
//         }
//         map.set(nums[i], i)
//     }
// }

// console.log(twoSum([2, 7, 11, 15], 9));  // [0, 1]
// console.log(twoSum([3, 2, 4], 6));      // [1, 2]
// console.log(twoSum([3, 3], 6));         // [0, 1]

//! 1. Junior (строки):
// Напиши функцию capitalize(str), которая делает первую букву строки заглавной.
// function capitalize(str) {
//   return str.split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(" ")
// }
// console.log(capitalize("хей ые"));

//! 2. Middle (алгоритмы + Map):
// Напиши функцию findFirstUnique(arr), которая возвращает первый уникальный элемент массива. Если таких нет — null.
// function findFirstUnique(arr) {
// let obj = arr.reduce((acc, el) => {
//   if (el in acc) {
//     acc[el] += 1
//   } else {
//     acc[el] = 1
//   }
//   return acc
// }, {})
//   let res = null
//   for (key in obj) {
//     if (obj[key] === 1) {
//       res = key
//       break;
//     }
//   }
// return res
// }

// function findFirstUnique(arr) {
//   const map = new Map()
//   arr.forEach(el => map.set(el, (map.get(el) || 0) + 1));
//   for (let el of arr) {
//     if (map.get(el) === 1) return el
//   }
// }

// console.log(findFirstUnique([1, 2, 2, 3, 3])); // 1
// console.log(findFirstUnique([2, 2, 3, 3]));   // null
// console.log(findFirstUnique(["a", "b", "a", "c"])); // "b"


