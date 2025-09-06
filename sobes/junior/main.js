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