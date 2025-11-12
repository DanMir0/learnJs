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

/* Задача 41 */
// function getStrLength(str) {
//   if (typeof str !== 'string') return
//   let count = 0
//   for (let i = 0; i < str.length; i++){
//     count++
//   }
//   return count
// }

// console.log(getStrLength("привет"))

/* Задача 42 */
/*
function double(arr) {
  //return arr.map(elem => elem * 2)
  let newArr =[]
  arr.forEach(elem => {
    newArr.push(elem * 2)
  })
  return newArr
}
console.log(double([1,2,3]))
*/
/* Задача 43 */
/*
function isArrEval(arr) {
  let result = true;
  arr.forEach(elem => {
    if (elem < 0) {
      result = false
    }
  })
  return result
}
console.log(isArrEval([1,-2,3]))
*/
/* Задача 44 */
/*
function getCountOfVowels(str) {
  let vowels = ["а","е","ё","и","о","у","ы","э","ю","я"]
  let arrStr = str.toLowerCase().split('')
  let count = 0
  arrStr.forEach(char => {
    if (vowels.includes(char)) {
      count++
    }
  })
  return count
}
console.log(getCountOfVowels("ПРивет, тебе нрАвится джАваскрипт?"))
*/
/* Задача 45 */
/*
function reverseArr(arr) {
  let reverseArr = []
  
  for (let i = arr.length-1; i >= 0; i--) {
    reverseArr.push(arr[i])
  }
  return reverseArr
}
console.log(reverseArr([1,4,5]))
*/
/* Задача 46 */
/*
function upperFirstLatter(str) {
  if (typeof str !== 'string') {
    throw new Error('Передайте строку!')
  }
  
  return str.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(" ")
}
console.log(upperFirstLatter("Privet, do you like JS?"))
*/
/* Задача 47 */
/*
function sumSifr(number) {
  let result = 0
  let str = number.toString()
  
 for (let i =0; i < str.length; i++) {
   result += +str[i]
 }
 return result 
}
console.log(sumSifr(23))
*/

/* Задача 48 */
// function isPrimeNumber(num) {
//   if (num <= 1) return false
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i ===0) {
//       return false
//     }
//   }
//   return true
// }
// console.log(isPrimeNumber(5));
// console.log(isPrimeNumber(10));


/* Задача 49 */ 
/*
function delSpace(str) {
  return str.trim().split(" ").join("")
   return str.replace(/\s+/g, "")
}
console.log(delSpace(" Привет, тебе нравится JS?  "))
*/

/* Задача 50 */
/*
function findMin(arr) {
  let min = arr[0]
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > min) continue
    min = arr[i]
  }
  return min
}

console.log(findMin([1,4, -3]))
*/

/* Задача 51 */
/*
function getLengthFromArr(arr) {
 return arr.map(elem => typeof elem === 'string' ? elem.length : 'не строка')
 return arr
    .filter(elem => typeof elem === "string")
    .map(str => str.length)
}
console.log(getLengthFromArr(['hi', 'privet', 45]))
*/

/* задача 52  через цикл*/ 
/*
function factorial(num) {
  if (typeof num !== 'number') return 'не число'
  let res = 1
  for (let i = 1; i <= num; i++) {
    res *= i
  }
  return res
}
console.log(factorial(5))
*/

/* Задача 53 */
/*
function hasDuplicate(arr) {
  let uniq = new Set(arr)
  return uniq.size !== arr.length
}
console.log(hasDuplicate([1,1,4,5]))
*/

/* Задача 54 */
/*
function delNullAndUndefined(arr) {
  let newArr =[]
  arr.forEach(elem =>{
    console.log(typeof elem)
    if (elem != null) { newArr.push(elem) 
    }
  })
      return arr.filter(elem => elem != null)
  return newArr
}
console.log(delNullAndUndefined([null, undefined, 45])
*/

/* задача 55 */
/*
function getRandom(arr) {
  let index = Math.floor(Math.random() * arr.length)
  console.log(index)
  return arr[index]
}
console.log(getRandom([0,34, 7, 2]))
*/

/* Задача 71 */
/*
class Queue {
 constructor() {
 this.queue = []
 this.index = 0
 }
 enqueue(value) {
 this.queue[this.index] = value
 this.index++
 }
 dequeue() {
//  let value = this.queue[0]
//  this.index--
//  this.queue.length = this.index
//  return value
return this.queue.shift() || null
 }
 peek() {
 return this.queue[0]
 }
 
 isEmpty() {
   return this.index === 0
 }
}
let q = new Queue()
q.enqueue(1)
q.enqueue(2)
console.log(q.peek())     // 1
console.log(q.dequeue())  // 1
console.log(q.isEmpty())  // false
*/

/* Задача 72 */
/*function flatten(arr) {
//  return arr.flat(Infinity)
 let newArr = []
 arr.forEach(elem => {
   if (Array.isArray(elem)) {
     newArr = newArr.concat(flatten(elem))
   } else {
     newArr.push(elem)
   }
 })
 return newArr
}
console.log(flatten([1, [2, [3, 4], 5]])) // [1, 2, 3, 4, 5]*/


/* Задача 73 */

// function isPalindrome(str) {
//   str = str.toLowerCase().replace(/[^a-zа-я0-9]/gi, "")
//   return str === str.split('').reverse().join('')
// }
// console.log(isPalindrome("А роза упала на лапу Азора")) // true
// console.log(isPalindrome("hello"))  // false

/* Задача 74 */
// function getSecondLargest(arr) {
//   let max = arr[0]
//   let res = null
  
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       res = max
//       max = arr[i]
//     }
//   }
//   if (res === null) {
//     res = max
//   }
//   return res
// }
// console.log(getSecondLargest([0, -5, -8, -20])) // 10

// function getSecondLargest(arr) {
//   if (arr.length < 2) return null

//   let uniqArr = [...new Set(arr)]

//   uniqArr.sort((a, b) => b - a)
//   return uniqArr[1]
// }
// console.log(getSecondLargest([0, -5, -8, -20, 20, 20,40])) // 10
// console.log(getSecondLargest([0])) // 10
/* задача 75 реалтзуц функцию chunk */
// function chunk(arr, size) {
//   let newArr= []
//   let subArr= []
//   for (let i = 0; i < Math.ceil(arr.length/size); i++) {
//     console.log(i);
//     console.log(`Slice 1 ${i} * ${size} = ${i * size}`);
//     console.log(`Slice 2 ${i} * ${size} = ${(i * size) + size}`);
//     newArr[i] = arr.slice((i * size), (i * size) + size)
//   }
//   return newArr
// }
// console.log(chunk([1,2,3,4,5], 2)) // [[1,2],[3,4],[5]]


/* Задача 76 */
// function unique(arr) {
//   return [...new Set(arr)]
// }
// console.log(unique([1,2,2,3,4,4,5])); // [1,2,3,4,5]);

/* Задача 77 */

// function intersection(arr1, arr2) {
//   let newArr = []
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr2.includes(arr1[i])) {
//       newArr.push(arr1[i])
//     }
//   }
//   return newArr
// }

// function intersection(arr1, arr2) {
//   let set2 = new Set(arr2)
//   return arr1.filter(el => set2.has(el))
// }
// console.log(intersection([1,2,4,56,3], [2,3,4])) // [2,3]


/* Задача 78 */
// function difference(arr1, arr2) {
//   let newArr = []
//   for (let i = 0; i < arr1.length; i++) {
//     if (!arr2.includes(arr1[i])) {
//       newArr.push(arr1[i])
//     }
//   }
//   for (let i = 0; i < arr2.length; i++) {
//     if (!arr1.includes(arr2[i])) {
//       newArr.push(arr2[i])
//     }
//   }
//   return newArr
// }

// function difference(arr1, arr2) {
//   let set1 = new Set(arr1);
//   let set2 = new Set(arr2);
//   return [
//     ...arr1.filter(el => !set2.has(el)),
//     ...arr2.filter(el => !set1.has(el)),
//   ]
// }
// console.log(difference([1,2,3], [2,3,4])) // [1,4]

/* Зажача 79*/
// function capitalize(str) {
//   let newStr = ""
//   for (let i = 0; i < str.length; i++) {
//     if (str[i-1] === " " || i === 0) {
//       newStr += str[i].toUpperCase()
//     } else {
//       newStr += str[i]
//     }
//   }
//   return newStr
// }

// function capitalize(str) {
//   return str.split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(" ")
// }
// console.log(capitalize("hello world")) // "Hello World"

/* задача 80 Anagrams*/
// function isAnagram(str1, str2) {
//   str1 = str1.toLowerCase().split("").sort().join("")
//    str2 = str2.toLowerCase().split("").sort().join("")
//    return str1 === str2
// }

// function isAnagram(str1, str2) {
//   let normileze = (str) => str.toLowerCase().split("").sort().join("")
//   return normileze(str1) === normileze(str2)
// }
// console.log(isAnagram("listen", "silent")) // true
// console.log(isAnagram("hello", "world") )  // false

//! Задача 81 (Junior)
// Написать функцию sumArray(arr), которая возвращает сумму всех чисел в массиве.
// function sumArray(arr) {
//   return arr.reduce((acc, num) => acc + num, 0)
// }
// console.log(sumArray([1,2,3,5]));

//! Задача 82 (Junior)
// Написать функцию findMax(arr), которая находит максимальный элемент в массиве.
// function findMax(arr) {
//   // return Math.max(...arr)
//   let max = arr[0]
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i]
//     }
//   }
//   return max
// }
// console.log(findMax([-12,-2,-3]));

//! Задача 83 (Junior)
// Реализовать функцию reverseWords(str), которая переворачивает порядок слов в строке.
// function reverseWords(str) {

//   return str.split(" ").reverse().join(" ") //trim().split(/\s+/) если пробелы
// }

// console.log(reverseWords("I love JS")); // "JS love I"

//! Задача 84 (Junior)
// Написать функцию countChar(str, char), которая считает количество символов char в строке.
// function countChar(str, char) {
//   return [...str.toLowerCase()].filter(c => c === char.toLowerCase()).length

//   return str.toLowerCase().split("").reduce((acc, el) => el === char.toLowerCase() ? acc + 1 : acc + 0, 0)
// }
// console.log(countChar("Привет, ты пакет", 'П'));

//! Задача 85 (Junior)
// Написать функцию checkPalindrome(str), которая проверяет, является ли строка палиндромом.
// function checkPalindrome(str) {
//   let clean = str.toLowerCase().replace('/[^a-zа-я0-9]/gi, ""')
//   return clean === clean.split("").reverse().join("")
// }
// console.log(checkPalindrome('rar'));
// console.log(checkPalindrome('hey'));

//! Напишите функцию, которая проверяет, является ли переданная строка палиндромом (читается одинаково слева направо и справа налево). Регистр и пробелы не должны учитываться.
// function isPalindrome(str) {
//   str = str.toLowerCase().replace(/[^a-zа-я0-9]/gi, "")
//   return str === str.split("").reverse("").join("")
// }
// console.log(isPalindrome('А роза упала на лапу Азора') );// true
// console.log(isPalindrome('Кошка')) // false

//! Напишите функцию, которая принимает строку и возвращает количество гласных букв в ней. Гласные буквы: а, е, ё, и, о, у, ы, э, ю, я (можно и английские a, e, i, o, u).
// function countVowels(str) {
//   let vowels = ['a', 'e', 'i', 'o', 'u', 'y', 'а', 'я', 'о', 'ё', 'у', 'ю', 'ы', 'и', 'э', 'е']
//   let count = 0
//   let lowerStr = str.toLowerCase()
//   lowerStr.forEach(char => {
//     if (vowels.includes(char)) {
//       count++
//     }
//   })
//   return count
// }
// function countVowels(str) {
//   let vowels = ['a', 'e', 'i', 'o', 'u', 'y', 'а', 'я', 'о', 'ё', 'у', 'ю', 'ы', 'и', 'э', 'е']
//   return str.toLowerCase().split("").filter(char => vowels.includes(char)).length
// }
//  console.log(countVowels('Привет мир!')) // 3

//! Напишите функцию, которая принимает строку и возвращает длину самого короткого слова в ней.
// function findShortestWord(str) {
//   return Math.min(...str.split(" ").map(word => word.length))
// }

// function findShortestWord(str) {
//   return str.split(" ").reduce((min, word) => Math.min(min, word.length), Infinity)
// }
// console.log(findShortestWord('Мир это такое место'));// 3 (слово "Мир" или "это")

// !FizzBuzz
// Классическая задача. Напишите программу, которая выводит числа от 1 до 100.
// Если число кратно 3, вывести "Fizz".
// Если число кратно 5, вывести "Buzz".
// Если число кратно и 3, и 5, вывести "FizzBuzz".
// В остальных случаях вывести само число.

// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log('FizzBuzz');
//   } else if (i % 5 === 0) {
//     console.log('Buzz');
//   } else if (i % 3 === 0) {
//     console.log('Fizz');
//   } else {
//     console.log(i);
//   }
// }

// 5. Сумма всех чисел до N
// Напишите функцию, которая принимает число N и возвращает сумму всех чисел от 1 до N.
// function sumToN(n) {
//   let res = 0
//   for (let i = 1; i <= n; i++) {
//     res += i
//   }
//   return res
// }

// function sumToN(n) {
//   return n * (n + 1) / 2
// }
// console.log(sumToN(2)) // 15 (1+2+3+4+5)

//! Напишите функцию, которая проверяет, все ли числа в массиве четные.
// function allEven(numbers) {
//   return numbers.every(num => num % 2 === 0)
// }

// console.log(allEven([2, 4, 6, 8])); // true
// console.log(allEven([1, 2, 3, 4])); // false

//! Напишите функцию, которая находит максимальное число в массиве (без Math.max).
// function findMax(numbers) {
//   let max = numbers[0];
//   numbers.forEach(num => {
//     if (num > max) max = num
//   });
//   return max
// }

// console.log(findMax([3, 7, 2, 9, 1])); // 9

//! Напишите функцию, которая фильтрует массив строк, оставляя только строки длиннее заданного значения.
// function filterByLength(strings, minLength) {
//   return strings.filter(word => word.length >= minLength)
// }

// console.log(filterByLength(['cat', 'dog', 'elephant', 'bird'], 4)); // ['elephant', 'bird']

/* Проверка на простое число
Напишите функцию, которая проверяет, является ли число простым.*/
// function isPrime(num) {
//   if (num < 2) return false
//   if (num === 2) return true

//   for (let i = 2;  i <= Math.sqrt(num); i++) {
//     console.log(`${i} = ${Math.sqrt(num)}`);
    
//     if (num % i === 0) {
//       return false
//     }
//   }
//   return true
// }

// console.log(isPrime(7)); // true
// console.log(isPrime(10)); // false
// console.log(isPrime(3))
// console.log(isPrime(5))
// console.log(isPrime(2))
// console.log(isPrime(4))
// console.log(isPrime(12))


/*Поиск отсутствующего числа
Дан массив чисел от 1 до N с одним пропущенным числом. Найдите его */
// function findMissingNumber(arr) {
//   arr.sort((a, b) => a - b)
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== i + 1) {
//       return i + 1
//     }
//   }
// }

// console.log(findMissingNumber([1, 2, 3, 5, 6])); // 4

/*
Подсчет символов в строке
Напишите функцию, которая подсчитывает количество каждого символа в строке. */
// function countChars(str) {
//   // let obj = {}
//   // str.split("").forEach(char => {
//   //   if (obj[char]) {
//   //     obj[char] += 1
//   //   } else {
//   //     obj[char] = 1
//   //   }
//   // }
//   // )
//   // return obj

//   return str.split("").reduce((acc, char) => {
//     acc[char] = (acc[char] || 0) + 1
//     return acc
//   }, {})
// }

// console.log(countChars('hello')); // { h: 1, e: 1, l: 2, o: 1 }


// Сумма чисел от 1 до n
// Напиши функцию sumTo(n), которая возвращает сумму чисел от 1 до n.
// function sumTo(n) {
//   return (n * (n + 1)) / 2
//   let res = 0;
//   for (let i = 1; i <= n; i++) {
//     res += i
//   }
//   return res
// }
// console.log(sumTo(5));

// Факториал
// Реализуй factorial(n) с использованием цикла.
// function factorial(n) {
//   return n <= 1 ? 1 : n * factorial(n-1)
//   let res = 1
//   for (let i = 1; i <= n; i++) {
//     res *= i
//   }
//   return res
// }
// console.log(factorial(5));

// Чётное/нечётное
// Напиши функцию isEven(num), которая возвращает true, если число чётное, и false — если нечётное.
// function isEven(num) {
//   if (typeof num !== 'number') return new TypeError(`Parametr "${num}" is not number`)
//   return num % 2 === 0
// }
// console.log(isEven(5));

// Реверс строки
// Напиши функцию reverseString(str).
// function reverseString(str) {
//   return str.split("").reverse().join("")
// }
// console.log(reverseString('privet tut'));

// Подсчёт слов
// Реализуй функцию countWords(str), которая возвращает количество слов в строке.
// function countWords(str) {
//   if (!str.trim()) return 0
//   return str.trim().split(/\s+/).length;
//   if (!str) return 0
//   return str.split(" ").length
// }
// console.log(countWords("Hello, world"));

// Фильтрация массива
// Функция filterPositive(arr) должна возвращать только положительные числа.
// function filterPositive(arr) {
//   return arr.filter(num => num > 0)
// }
// console.log(filterPositive([-1,-2,1,2,3,4]));

// Поиск минимального числа
// Напиши функцию findMin(arr).
// function findMin(arr) {
//   // return Math.min(...arr)
//   return arr.reduce((min, num) => num < min ? num : min, arr[0])
//   let min = arr[0]
//   for (let i = 0; i < arr.length; i++) {
//     if (!(arr[i] > min)) {
//       min = arr[i]
//     }
//   }
//   return min
// }
// console.log(findMin([1,2,3,5,]));

// Проверка на простое число
// Реализуй isPrime(num).
// function isPrime(num) {
//   if (num === null || typeof num !== 'number') return num
//   if (num < 2) return false

//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) return false
//   }
//   return true
// }
// console.log(isPrime(2));
// console.log(isPrime(5));
// console.log(isPrime(11));
// console.log(isPrime(4));
// console.log(isPrime(15));

// Удаление дубликатов из массива
// Реализуй removeDuplicates(arr).
// function removeDuplicates(arr) {
//   //return [... new Set(arr)]
//   let res = []
//   arr.forEach(item => {
//     if (!res.includes(item)) {
//       res.push(item)
//     }
//   })
//   return res
// }
// console.log(removeDuplicates([1,2,3,2,1,5]));

// Подсчёт гласных
// Напиши функцию countVowels(str), которая считает количество гласных в строке.
// function countVowels(str) {
//   let vowels = ['a', 'e', 'i', 'o', 'u', 'y', 'а', 'я', 'о', 'ё', 'у', 'ю', 'ы', 'и', 'э', 'е']
//   let res = 0
//   str.toLowerCase().split("").forEach(char => {
//     if (vowels.includes(char)) {
//       res += 1
//     }
//   })
//   return res
// }
// console.log(countVowels('Аыуuosdsdsdsd'));

//! Напишите функцию, которая возвращает сумму цифр числа.
// function sumDigits(num) {
//   let str = num.toString()
  
//   let result = 0

//   for (let i = 0; i < str.length; i++) {
//     result += Number(str[i])
//   }
//   return result
// }

// console.log(sumDigits(123)); // 6
// console.log(sumDigits(9045)); // 18

//! Проверьте, является ли число палиндромом.
// function isNumberPalindrome(num) {
//   num = num.toString()
//   return num === num.split('').reverse().join('')
// }

// console.log(isNumberPalindrome(121)); // true
// console.log(isNumberPalindrome(123)); // false

//! Посчитайте количество слов в строке.
// function countWords(str) {
//   if (str.length === 0) return 0

//   let arr = str.trim().replace(/\s+/g, " ").split(" ")

//   return arr.length
// }

// console.log(countWords('Hello world from JavaScript')); // 4
// console.log(countWords('  Multiple   spaces   here  ')); // 3

//! Найдите НОД двух чисел.
// function gcd(a, b) {
//   while(b !== 0) {
//     const temp = b;
//     b = a % b;
//     a = temp
//   }
//   return a
// }

// console.log(gcd(48, 18)); // 6
// console.log(gcd(101, 103)); // 1

//! Разверните строку рекурсивно.
// function reverseString(str) {
//   if (str.length <= 1) return str

//   return reverseString(str.slice(1)) + str[0]
// }

// console.log(reverseString('hello')); // 'olleh'
// console.log(reverseString('JavaScript')); // 'tpircSavaJ'

//! Отфильтруйте массив по типу элементов.
// function filterByType(array, type) {
//   return array.filter(item => typeof item === type)
// }

// const mixed = [1, 'hello', true, 42, 'world', false];
// console.log(filterByType(mixed, 'string')); // ['hello', 'world']
// console.log(filterByType(mixed, 'number')); // [1, 42]

//! Отформатируйте имя в правильный регистр
// function formatName(name) {
//   let result = ''
//   let arr = name.toLowerCase().split(" ")
//   arr.forEach(item => {
//     result += ' ' + item[0].toUpperCase() + item.slice(1)
    
//   })
//   return result
// }

// console.log(formatName('john doe')); // 'John Doe'
// console.log(formatName('mARY aNN')); // 'Mary Ann'

//! Найдите медиану числового массива.
// function findMedian(numbers) {
//   const sorted = [...numbers].sort((a,b) => a - b);
//   const middle = Math.floor(sorted.length / 2)

//    if (sorted.length % 2 === 0) {
//     return (sorted[middle - 1] + sorted[middle]) / 2;
//   } else {
//     return sorted[middle];
//   }
// }

// console.log(findMedian([1, 3, 2])); // 2
// console.log(findMedian([1, 2, 3, 4])); // 2.5

//! Удалите все falsy значения из массива.
// function removeFalsy(array) {
//   return array.filter(item => item)
// }

// const values = [0, 1, false, 2, '', 3, null, undefined, NaN];
// console.log(removeFalsy(values)); // [1, 2, 3]

//! Создайте функцию для генерации случайного числа в диапазоне.
// function randomInRange(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min)
// }

// console.log(randomInRange(5, 10)); // число между 5 и 10
// console.log(randomInRange(-10, 10)); // число между -10 и 10

//! Напишите функцию, которая проверяет, является ли число степенью двойки.
// function isPowerOfTwo(num) {
//   if (num <= 0) return false
//   return Math.log2(num) % 1 === 0
// }

// function isPowerOfTwo(num) {
//   return num > 0 && (num & (num - 1)) === 0
// }

// console.log(isPowerOfTwo(8)); // true (2³)
// console.log(isPowerOfTwo(16)); 
// console.log(isPowerOfTwo(10)); // false

//! Найдите минимальное число в массиве (без Math.min).
// function findMin(numbers) {
//   let min = numbers[0]

//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] < min) {
//       min = numbers[i]
//     }
//   }
//   return min
// }

// console.log(findMin([5, 2, 9, 1, 7])); // 1

//! Количество гласных и согласных
// function countVowelsConsonants(str) {
//     let result = {
//         vowels: 0,
//         consonants: 0,
//     }
//     let consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z', 'б', 'в', 'г', 'д', 'ж', 'з', 'й', 'к', 'л', 'м',
//     'н', 'п', 'р', 'с', 'т', 'ф', 'х', 'ц', 'ч', 'ш', 'щ']
   
//     let vowels = [ 'a', 'e', 'i', 'o', 'u', 'y', 'а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я']
//     str = str.toLowerCase()

//     for (let i = 0; i < str.length; i++){
//     if (vowels.includes(str[i])) {
//         result['vowels'] += 1
//     } else if (consonants.includes(str[i])) {
//         result['consonants'] += 1
//     } else {
//         continue
//     }
//     }
//     return result
// }


// console.log(countVowelsConsonants('Hello World')); // { vowels: 3, consonants: 7 }


//! 4. Умножение матрицы на число
// Умножьте все элементы матрицы (2D массива) на число.
// function multiplyMatrix(matrix, multiplier) {
//  return matrix.map(arr => arr.map(item => item *= multiplier))
// }

// const matrix = [[1, 2], [3, 4], [5, 6]];
// console.log(multiplyMatrix(matrix, 2)); // [[2, 4], [6, 8], [10, 12]]

//! 5. Форматирование времени
// Преобразуйте секунды в формат "чч:мм:сс".
// function formatTime(seconds) {
//     let hours = Math.floor(seconds / 3600)
//     let minutes = Math.floor((seconds % 3600) / 60)
//     let second = seconds % 60
    
//     return [
//       hours.toString().padStart(2, '0'),
//       minutes.toString().padStart(2, '0'),
//       second.toString().padStart(2, '0')
//     ].join(':')
// }

// console.log(formatTime(3665)); // "01:01:05"
// console.log(formatTime(45)); // "00:00:45"


// 6. Проверка массива на возрастание
// Проверьте, является ли массив строго возрастающим.
// function isStrictlyIncreasing(arr) {
//   let sortArr = arr.map(item => item).sort((a, b) => a - b)
  
//   for (let i = 0; i < arr.length; i++) {
//     if (sortArr[i] !== arr[i]) {
//       return false
//     }
//   }
//   return true
// }

// function isStrictlyIncreasing(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] <= arr[i-1]) return false
//   }
//   return true
// }

// console.log(isStrictlyIncreasing([1, 2, 3, 4])); // true
// console.log(isStrictlyIncreasing([1, 3, 2, 4])); // false

// Сумма диапазона чисел
// Найдите сумму всех чисел в диапазоне [a, b].
// function sumRange(a, b) {
//   let result = 0

//   for (let i = a; i <= b; i++) {
//     result += i
//   }
//   return result
// }

// function sumRange(a, b) {
//   return (b - a + 1) * (a + b) / 2
// }
// console.log(sumRange(1, 5)); // 15 (1+2+3+4+5)
// console.log(sumRange(-3, 3)); // 0


// 8. Удаление дубликатов (без Set)
// Удалите дубликаты из массива без использования Set.
// function removeDuplicates(arr) {
//   let result = []
//   for (let i = 0; i < arr.length; i++) {
//     if (!result.includes(arr[i])) {
//         result.push(arr[i])
//     }
//   }
//   return result
// }

// function removeDuplicates(arr) {
//   const seen = {}
//   return arr.filter(item => {
//     if (!seen[item]) {
//       seen[item] = true
//       return true
//     }
//     return false
//   })
// }

// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]

// 9. Поиск индекса элемента
// Найдите индекс первого вхождения элемента в массиве.
// function findIndex(array, element) {
//   return array.indexOf(element)
// }

// function findIndex(array, element) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === element) return i
//   }
//   return -1
// }

// console.log(findIndex(['apple', 'banana', 'cherry'], 'banana')); // 1
// console.log(findIndex([1, 2, 3], 5)); // -1


// 10. Конвертация температуры
// Конвертируйте температуру между Цельсием и Фаренгейтом.
// function convertTemperature(value, from, to) {
//     if (from === to) return value;
//     if (from === 'C' && to === 'F') {
//         return value * 1.8 + 32
//     } else if (from === 'F' && to === 'C') {
//         return (value - 32) / 1.8
//     } else {
//         throw new Error('Unsupported conversion');
//     }
// }


// console.log(convertTemperature(0, 'C', 'F')); // 32
// console.log(convertTemperature(100, 'C', 'F')); // 212
// console.log(convertTemperature(32, 'F', 'C')); // 0

//! 1 Сумма положительных чисел
// Напиши функцию sumPositive(arr), которая возвращает сумму только положительных чисел в массиве.
// function sumPositive(arr) {
//   return arr.filter(val => val >= 0).reduce((acc, val) => acc += val, 0)
// }
// console.log(sumPositive([1, -2, 3, 4, -5]));
// Пример: [1, -2, 3, 4, -5] → 8

//! 2 Количество заглавных букв
// Функция countUppercase(str) возвращает количество заглавных букв в строке.
// function countUppercase(str) {
//   return str.split("").reduce((acc, val) => val === val.toUpperCase() ? acc + 1 : acc + 0, 0)
// }
// console.log(countUppercase('HeLLo'));
// Пример: 'HeLLo' → 3

//! 3 Последний элемент массива
// Реализуй lastElement(arr), возвращающую последний элемент массива.
// Если массив пуст, вернуть null.
// function lastElement(arr) {
//   return arr.length === 0 ? null : arr[arr.length-1]
// }
// console.log(lastElement([1,2]));
// console.log(lastElement([]));

//! 4 Проверка подстроки
// Функция contains(str, subStr) возвращает true, если subStr содержится в str.
// Без includes()!
// function contains(str, subStr) {
//   for (let i = 0; i < str.length; i++) {
//     if (str.substring(i, i + subStr.length) === subStr) {
//       return true
//     }
//   }
//   return false
// }
// console.log(contains('hihe we', 'we'));

//! 5 Удаление пробелов
// Функция removeSpaces(str) возвращает строку без пробелов.
// Пример: 'a b c' → 'abc'
// function removeSpaces(str) {
//   // return str.split(" ").join("")

//   return str.split('').filter(char => char !== ' ').join('')
// }
// console.log(removeSpaces('a   b  c'));

//! 6 Удвоить элементы массива
// Напиши doubleArray(arr) → возвращает новый массив, где каждый элемент умножен на 2.
// function doubleArray(arr) {
//   return arr.map(item => item * 2)
// }
// console.log(doubleArray([1,2,3,4]));

//! 7 Количество чётных чисел
// Реализуй countEven(arr) — верни количество чётных чисел.
// function countEven(arr) {
//   return arr.reduce((acc, item) => item % 2 === 0 ? acc + 1 : acc + 0, 0)
// }
// console.log(countEven([1,2,3,4]));

//! 8 Первое вхождение элемента
// Реализуй findIndex(arr, value) без использования indexOf.
// function findIndex(arr, value) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === value) {
//       return i
//     }
//   }
//   return -1
// }
// console.log(findIndex([1,2,3,5,6], 5));

//! 9 Сумма цифр числа
// sumDigits(num) → сумма всех цифр числа.
// function sumDigits(num) {
//   num = num.toString()
//   let result = 0
//   for (let i = 0; i < num.length; i++) {
//     result += Number(num[i])
//   }
//   return result

//[...num.toString()].reduce((a, b) => a + +b, 0)
// }
// console.log(sumDigits(1234));
// // Пример: 1234 → 10

//! 10 Проверка анаграмм
// Функция isAnagram(str1, str2) возвращает true, если строки состоят из одинаковых букв (порядок не важен).
// Пример: 'listen', 'silent' → true
// function isAnagram(str1, str2) {
//   return str1.toLowerCase().split("").sort().join("") === str2.toLowerCase().split("").sort().join("")
// }

// console.log(isAnagram('listen', 'silent'));

//! Сумма четных чисел в массиве
// function sumEvenNumbers(arr) {
//   return arr.reduce((acc, val) => val % 2 === 0 ? acc + val : acc + 0, 0)
// }

// console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6])); // 12

//! Поиск самого длинного слова
// function findLongestWord(sentence) {
//   let arr = sentence.split(" ")
//   let result = null
//   let max = 0
//   arr.forEach(item => {
//     if (item.length >= max) {
//       max = item.length
//       result = item
//     }
//   })
//   return result
// }

// console.log(findLongestWord("The quick brown fox jumps")); // "jumps"

//! Подсчет определенной буквы
// function countLetter(str, letter) {
//   return str.split("").reduce((acc, char) => char === letter ? acc += 1 : acc += 0, 0)
// }

// console.log(countLetter("Hello world", "l")); // 3

//! Проверка на анаграмму
// function isAnagram(str1, str2) {
//   let sortStr1  = str1.toLowerCase().split("").sort().join("")
//   let sortStr2  = str2.toLowerCase().split("").sort().join("")
//   return sortStr1 === sortStr2
// }

// console.log(isAnagram("listen", "silent")); // true

//! Разворот числа
// function reverseNumber(num) {
//   return Number(num.toString().split("").reverse().join(""))
// }

// console.log(reverseNumber(12345)); // 54321

//! 6. Удаление ложных значений
// function removeFalsy(arr) {
//   return arr.filter(Boolean)
// }

// console.log(removeFalsy([0, 1, false, 2, "", 3])); // [1, 2, 3]

//! 7. Поиск недостающего числа
// function findMissingNumber(arr) {
//   const n = arr.length + 1
//   const expectedSum = n * (n + 1) / 2
//   const actualSum = arr.reduce((sum, num) => sum + num, 0)
//   return expectedSum - actualSum
// }

// function findMissingNumber(arr) {
//     for (let i = 0; i < arr.length - 1; i++) {
//         if (arr[i + 1] - arr[i] > 1) {
//             return arr[i] + 1;
//         }
//     }
//     // Если пропущено последнее число
//     return arr.length + 1;
// }

// function findMissingNumber(arr) {
//     const numSet = new Set(arr);
    
//     for (let i = 1; i <= arr.length + 1; i++) {
//         if (!numSet.has(i)) {
//             return i;
//         }
//     }
// }

// console.log(findMissingNumber([1, 2, 3, 5, 6])); // 4

//! 8. Форматирование имени
// function capitalizeName(name) {
//   return name.split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(" ").toString()
// }

// console.log(capitalizeName("john doe")); // "John Doe"

//! 9. Сумма цифр числа
// function sumDigits(num) {
//   return num.toString().split("").reduce((acc, item) => acc + Number(item), 0)
// }

//console.log(sumDigits(123)); // 6

//! 10. Проверка на палиндром
// function isPalindrome(str) {
//   str = str.toLowerCase().trim()
//   return str === str.split("").reverse().join("")
// }

// console.log(isPalindrome("racecar")); // true

//! 1. Поиск второго максимального числа
// function findSecondMax(arr) {
//   arr = arr.sort((a, b) => b - a)
//   const result = Array.from(new Set(arr))
//   return result[1]
// }
// function findSecondMax(arr) {
//   let max = -Infinity;
//   let secondMax = -Infinity;
//   console.log(max);
  
//   for (const num of arr) {
//     if (num > max) {
//       secondMax = max;
//       max = num;
//     } else if (num > secondMax && num < max) {
//       secondMax = num;
//     }
//   }
//   return secondMax;
// }
// console.log(findSecondMax([3, 1, 4, 1, 5, 9, 2])); // 5

//! 2. Подсчет повторяющихся элементов
// function countDuplicates(arr) {
//   const result = []
//   const sortArr = arr.sort((a, b) => a - b)
//   for (let i = 1; i < sortArr.length; i++) {
//     if (arr[i] === arr[i - 1]) {
//       result.push(arr[i])
//     }
//   }
//   return result.length
// }

// console.log(countDuplicates([1, 2, 2, 3, 4, 4, 4, 5])); // 3 (элементы 2,4,4)

//! 3. Проверка на простое число
// function isPrime(num) {
//   if (num < 2) return false
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) {
//         return false
//     }
//   }
//   return true
// }

// console.log(isPrime(7)); // true
// console.log(isPrime(10)); // false

//! 4. Разница между двумя массивами
// function arrayDiff(arr1, arr2) {
//   let diff = []
//   let set = new Set(arr2)
//   return arr1.filter(item => !set.has(item))
// }

// console.log(arrayDiff([1, 2, 3], [2, 3, 4])); // [1]

//! 5. Форматирование номера телефона
// function formatPhoneNumber(numbers) {
//   const areaCode = numbers.slice(0,3).join("")
//   const prefix = numbers.slice(3,6).join("")
//   const lineNumber = numbers.slice(6).join("")

//   return `(${areaCode}) ${prefix}-${lineNumber}`
// }

// console.log(formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // "(123) 456-7890"

//! 6. Поиск наиболее частого элемента
// function findMostFrequent(arr) {
//   let freqMap = arr.reduce((acc, item) => {
//     acc[item] = (acc[item] || 0) + 1;
//     return acc;
//   }, {});
  
//   let maxCount = 0;
//   let mostFrequent = null;
  
//   for (const [item, count] of Object.entries(freqMap)) {
//     if (count > maxCount) {
//       maxCount = count;
//       mostFrequent = item; 
//     }
//   }
  
//   return Number(mostFrequent); // Преобразуем строку в число
// }
// console.log(findMostFrequent([1, 3, 2, 3, 4, 3, 1])); // 3

//! 7. Сумма квадратов четных чисел
// function sumOfEvenSquares(arr) {
//     return arr.filter(item => item % 2 === 0).reduce((acc, item) => acc + Math.pow(item, 2), 0)
// }

// console.log(sumOfEvenSquares([1, 2, 3, 4, 5])); // 20 (4 + 16)

//! 8. Проверка на возрастающую последовательность
// function isIncreasingSequence(arr) {
//   let sortArr = arr.map(item => item).sort((a,b) => a - b)
  
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== sortArr[i]) {
//       return false
//     }
//   }
//   return true 
// }

// function isIncreasingSequence(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] <= arr[i - 1]) return false;
//   }
//   return true;
// }
// console.log(isIncreasingSequence([1, 2, 3, 4])); // true
// console.log(isIncreasingSequence([1, 3, 2, 4])); // false

//! 9. Удаление первого и последнего элемента
// function removeFirstAndLast(str) {
//   return str.slice(1, str.length - 1)
// }

// console.log(removeFirstAndLast("hello")); // "ell"

//! 10. Конвертация CamelCase в Snake_case
// function camelToSnake(str) {
//   let result = ``
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === str[i].toUpperCase()) {
//       result += `_${str[i].toLowerCase()}`
//     } else {
//       result += `${str[i]}`
//     }
//   }
//   return result
// }

// console.log(camelToSnake("helloWorldExample")); // "hello_world_example"

//! Форматирование даты
// function formatDate(date) {
//   // return date.toLocaleDateString()
//   const day = String(date.getDate()).padStart(2, '0')
//   const month = String(data.getMonth() + 1).padStart(2, '0')
//   const year = date.getFullYear()
//   return `${day}.${month}.${year}`
// }

//console.log(formatDate(new Date('2024-01-15'))); // "15.01.2024"

//! Поиск общих элементов в массивах
// function findCommonElements(arr1, arr2) {
//     const seen = new Set(arr1)
//     return arr2.filter(item => seen.has(item))
// }

// console.log(findCommonElements([1, 2, 3], [2, 3, 4])); // [2, 3]

//! 3. Подсчет среднего значения
// function calculateAverage(arr) {
//     return arr.reduce((acc, item) => acc + item, 0) / arr.length
// }

// console.log(calculateAverage([1, 2, 3, 4, 5])); // 3

//! 4. Фильтрация по длине строк
// function filterByLength(strings, minLen, maxLen) {
//   return strings.filter(word => word.length >= minLen && word.length <= maxLen)
// }

// console.log(filterByLength(['cat', 'elephant', 'dog', 'mouse'], 3, 5)); // ['cat', 'dog', 'mouse']

//! 5. Проверка на палиндром (игнорируя регистр и пробелы)
// function isPalindromeIgnoreCase(str) {
//     str = str.toLowerCase().trim().replace(/[^a-zа-я0-9]/gi,"")
//     return str === str.split("").reverse().join("")
// }

// console.log(isPalindromeIgnoreCase("A man a plan a canal Panama")); // true

//! 6. Сумма положительных чисел
// function sumPositiveNumbers(arr) {
//   return arr.filter(item => item > 0).reduce((acc, item) => acc + item)
// }

// console.log(sumPositiveNumbers([-1, 2, -3, 4, 5])); // 11

//! 7. Удаление элемента из массива
// function removeElement(arr, element) {
//   return arr.filter(item => item !== element)
// }

// console.log(removeElement([1, 2, 3, 2, 4], 2)); // [1, 3, 4]

//! 8. Подсчет слов в тексте
// function wordCount(text) {
//   return text.trim().split(/\s+/).filter(Boolean).length
// }

// console.log(wordCount("Hello world from JavaScript")); // 4

//! 9. Генератор случайного пароля
// function generatePassword(length = 8) {
//   const allCharactersString = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+[]{}|\\;\':",.<>/?`~';
//   let password = ``
//   for (let i = 0; i < length; i++) {
//     const rand = Math.floor(Math.random() * (allCharactersString.length - 0) + 0)
//     password += allCharactersString[rand]
//   }
//   return password
// }

//console.log(generatePassword(10)); // "aB3#k9$mN2"

//! 10. Проверка на четность/нечетность
// function checkParity(num) {
//   return num % 2 === 0 ? "even" : "odd"
// }

// console.log(checkParity(4)); // "even"
// console.log(checkParity(7)); // "odd"

//! Фильтрация товаров по цене
// function filterProducts(products, minPrice, maxPrice) {
//   return products.filter(item => item.price >= minPrice && item.price <= maxPrice)
// }

// const products = [
//   { name: 'Phone', price: 500 },
//   { name: 'Laptop', price: 1000 },
//   { name: 'Tablet', price: 300 }
// ];
// console.log(filterProducts(products, 400, 800)); // [{name: 'Phone', price: 500}]

//! Форматирование даты заказа
// function formatOrderDate(dateString) {
//   const date = new Date(dateString)
//   const day = date.getDate()
//   const month = date.getMonth()
//   const year = date.getFullYear()

//   const months = [
//   'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
//   'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
// ];

// return `${day} ${months[month]} ${year}`
// }

// console.log(formatOrderDate('2024-01-15')); // "15 января 2024"

//! Поиск пользователя по email
// function findUserByEmail(users, email) {
//   // Найти пользователя по email (регистронезависимо)
//   return users.find(user => user.email.toLowerCase() === email.toLowerCase())
// }

// const users = [
//   { name: 'John', email: 'john@test.com' },
//   { name: 'Jane', email: 'JANE@test.com' }
// ];
// console.log(findUserByEmail(users, 'JANE@test.com')); // {name: 'Jane', email: 'JANE@test.com'}

//! Подсчет общей стоимости заказа
// function calculateOrderTotal(order) {
//   // Посчитать сумму товаров с учетом количества
//   return order.items.reduce((acc, item) => {
//     if (item.quantity > 1) {
//       while (item.quantity !== 0) {
//         acc += item.price 
//         item.quantity--
//       }
//     } else {
//       acc += item.price
//     }
//     return acc
//   }, 0)
// }

// function calculateOrderTotal(order) {
//   return order.items.reduce((acc, item) => acc + (item.price * item.quantity), 0)
// }
// const order = {
//   items: [
//     { name: 'Phone', price: 500, quantity: 2 },
//     { name: 'Case', price: 20, quantity: 1 }
//   ]
// };
// console.log(calculateOrderTotal(order)); // 1020

// //! Валидация пароля
// function validatePassword(password) {
//   // Проверить: минимум 8 символов, есть цифра и заглавная буква
//   if (password.length < 8) return false

//   let hasDigit = false
//   let hasUppercase = false

//   for (let char of password) {
//     if (char >= '0' && char <= '9') hasDigit = true
//     if (char >= 'A' && char <= 'Z') hasUppercase = true 
//   }

//   return hasDigit && hasUppercase
// }

// console.log(validatePassword('Secret123')); // true
// console.log(validatePassword('weak')); // false