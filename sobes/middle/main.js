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


/* Задача 32 */
// function debounce(cb, timeout = 0) {
//    let prevTimeoutID;

//    return (...args) => {
//         clearTimeout(prevTimeoutID)
//         prevTimeoutID = setTimeout(() => cb(...args), timeout)
//    }
// }

/* Задача 33 */
// function f(a) {
//   console.log(a)
// }

// function throttle(callback, delay) {
//     let timerId;
 
//     return (...args) => {
//         if (timerId) return

//         timerId = setTimeout(() => {
//             callback(...args) 

//             clearTimeout(timerId)
//             timerId = null
//         }, delay)
//     }
// }

// let f1000 = throttle(f, 1000);

// f1000(1); // показывает 1
// f1000(2); // (ограничение, 1000 мс ещё нет)
// f1000(3); // (ограничение, 1000 мс ещё нет)

/* Задача 34 */
// function once(cbFunc) {
//     let alreadyFun = false;
//     return (...args) => {
//         if (!alreadyFun) {
//             alreadyFun = true;
//             return cbFunc(...args)
//         }
//     }
// }
// let a = once(() => console.log('hi'))
// a()
// a()

/* Задача 35 */
// const memoize = (fn) => {
//     let cache = {}

//     return (n) => {
//         if (cache[n] != undefined) {
//             console.log(`<= Fetching: ${n} from cache`);
//             return cache[n]
//         } else {
//             console.log(`=> Write: "${n}" in cache`);
//             let result = fn(n)
//             cache[n] = result
//             return result
//         }
//     }
// }

// let myFunc = (x) => {
//     return x
// }
// const myFuncMem = memoize(myFunc)
// console.log(myFuncMem(4));
// console.log(myFuncMem(4));
// console.log(myFuncMem(2));
// console.log(myFuncMem(1));

/* Задача 36 */
// function deepClone(obj) {
//     let copyObj = structuredClone(obj)
//     return copyObj
// }
// let obj = {
//     name: 'Alex', 
//     age: 22, 
//     skills: {
//         prog: ['html', 'css'],
//         p: 'ss'w
// }}
// let copyObj = deepClone(obj)
// copyObj.skills.p = 'aa'
// console.log('Ориг', obj);
// console.log(`Копия`, copyObj);

// function deepClone(obj) {
//     if (obj === null || typeof obj !== 'object') return obj

//     if (Array.isArray(obj)) {
//         return obj.map(item => deepClone(item))
//     }

//     let copy = {}
//     for (let key in obj) {
//         copy[key] = deepClone(obj[key])
//     }
//     return key
// //     let copyObj = {}
// //     for (let key in obj) {
// //         if (typeof obj[key] == 'object') {
// //            copyObj[key] = deepClone(obj[key])
// //         } else {
// //             copyObj[key] = obj[key]
// //         }
// //     }
// //     return copyObj
// }
// let obj = {
//     name: 'Alex', 
//     age: 22, 
//     skills: {
//         prog: ['html', 'css'],
//         p: {a: 'a', b: 'b'}
// }}
// let copyObj = deepClone(obj)
// obj.skills.p.a = 'aa'
// console.log('Ориг', obj);
// console.log(`Копия`, copyObj);

/* Задача 37 */
// const sum = (a, b) => a + b;
// const square = (x) => x * x;
// const double = (x) => x * 2;

// function compose(...func) {
//   return func.reduceRight((prevFn, nextFn) => {
//         return (...args) => nextFn(prevFn(...args))
//     })
// }

// const process = compose(double, square, sum);

// console.log(process(2, 3)); // (2 + 3) → 5 → 25 → 50

/* Задача 38 */ //Дан массив промисов. Реализуй аналог Promise.all
// let arrPromise = [
// new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
//   new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ошибка!")), 2000)),
//   new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
// ]

// function all(arr) {
//    return new Promise((resolve, reject) => {
//     let result = []
//     let completed = 0

//     arr.forEach((promise, index) => {
//         promise.then(value => {
//             result[index] = value
//             completed++

//             if (completed === arr.length) {
//                 resolve(result)
//             }
//         })
//         .catch(err => reject(err))
//     })
//    })
// }
// all(arrPromise).then(res => console.log(res))

/* Задача 39 */ 
// function objFromQueryStr(obj) {
//     let str = ''
//     let count = 0
//     for (let key in obj) {
//         count++
//         if (Object.keys(obj).length === count) {
//             str += key + '='
//              str += obj[key]
//         } else {
//             str += key + '='
//             str += obj[key] + '&'
//         }
     
//     }
//     return str
// }
// let user = { name: "Alex", age: 20, sex: 'w' }
// console.log(objFromQueryStr(user));

// function objFromQueryStr(obj) {
//     return Object.entries(obj).map(([key, value]) => `${key}=${value}`).join('&')
// }

// let user = { name: "Alex", age: 20, sex: 'w' }
// console.log(objFromQueryStr(user));

/* Задача 40 */ 
// let str = 'name=Alex&age=20&sex=w'
// function parseObjFromStr(str) {
//     let obj = {}
//     let keyValue = str.split('&');
//     keyValue.forEach((item) => {
//         obj[item.split('=')[0]] = item.split('=')[1]
//     })

//     return obj
// }
// console.log(parseObjFromStr(str));




// const memoize2 = (fn) => {
//     let cache = {}

//     return (...n) => {
//         if (cache[n[0]] != undefined) {
//             console.log(`<= Fetching: ${n[0]} from cache`);
//             return cache[n[0]]
//         } else {
//             console.log(`=> Write: "${n[0]}" in cache`);
//             let result = fn(...n)
//             cache[n[0]] = result
//             return result
//         }
//     }
// }

// let myFunc2 = (x, y, z) => {
//     return {x, y, z}
// }
// const myFuncMem2 = memoize2(myFunc2)
// console.log(myFuncMem2(1, "Vasy"));
// console.log(myFuncMem2(1, "Vasy"));
// console.log(myFuncMem2(1, "aa"));
// console.log(myFuncMem2(2, "Vasy"));

// function debounce(callback, delay = 300, immediate = false) {
//     let timeoutId;

//     return function(...args) {
//         const callNow = immediate && !timeoutId
    
//         clearTimeout(timeoutId);

//         timeoutId = setTimeout(() => {
//             timeoutId = null
//             if (!immediate) callback(...args)
//         }, delay)

//         if (callNow) callback(...args)
//     }
// }

// function debounce(callback, delay = 400) {
//     let timerId;

//     return (...args) => {
//         clearTimeout(timerId)
//         timerId = setTimeout(() => callback(...args), delay)
//     }
// }
// const input = document.getElementById('search')
// const devouncedSearch = debounce(ev => console.log("Ищу: ", ev.target.value), 1000)
// input.addEventListener('input', devouncedSearch)

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

// const obj = {
//     prop: 'Привет!'
// }

// obj.__proto__.toString = function() {
//     return this.prop
// }

// const el = document.getElementById('app')
// el.innerText = obj

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

/* 64. Реализовать debounce. */
// function debounce(callback, delay) {
//     let timerId = null;

//     return (...args) => {
//         if (timerId) clearTimeout(timerId)
//         timerId = setTimeout(() => {
//             callback(...args)
//         }, delay)
//     }
// }

// let fn = () => console.log("run")
// let debounced = debounce(fn, 1000)
// debounced() // вызовется только 1 раз через 1с, даже если вызвать 10 раз подряд
// debounced() 
// debounced() 

/* 65. Реализовать throttle. */
// function throttle(callback, delay) {
//     // let isThrottled = false

//     // return (...args) => {
//     //     if (isThrottled) return

//     //     callback(...args)
//     //     isThrottled = true

//     //     setTimeout(() => {
//     //         isThrottled = false
//     //     }, delay)
//     // }

//     let isThrottled = false
//     let saveArgs = null

//     return (...args) => {
//         if (isThrottled) {
//             // если вызвали во время задержки → запомним последние аргументы
//             saveArgs = args
//             return
//         }
//         // Вызов сразу leading
//         callback(...args)
//         isThrottled = true
 
//         setTimeout(() => {
//             isThrottled = false

//             // если были сохранённые вызовы → выполним (trailing)
//             if (saveArgs) {
//                 callback(...saveArgs)
//                 saveArgs = null
//                 isThrottled = true
//                 setTimeout(() => {
//                     isThrottled = false
//                 }, delay)
//             }
//         }, delay)
//     }
// }

// let fn = () => console.log("run")
// let throttled = throttle(fn, 2000)
// throttled() // сразу вызовется
// throttled() // проигнорируется, если <2 сек

// let fn2 = () => console.log("run 3")
// let throttled2 = throttle(fn2, 3000)
// throttled2()

/* 66. Реализовать memoize. */
// function memoize(callback) {
//     let cache = {}

//     return (...args) => {
//         if (cache[args[0]] != undefined) {
//             return cache[args[0]]
//         } else {
//             cache[args[0]] = callback(...args)
//             return cache[args[0]]
//         }
//     }
// }

// let slowFn = n => {
//     console.log("calc")
//     return n*2
// }
// let fastFn = memoize(slowFn)
// console.log(fastFn(5));
// console.log(fastFn(5));

/* 67. Глубокое клонирование. */
// function deepClone(obj) {
//     let copy = {}
//     if (obj === null || typeof obj !== 'object') return obj

//     if (Array.isArray(obj)) return obj.map(item => deepClone(item))

//     for (let key in obj) {
//          copy[key] = deepClone(obj[key])
//     }
//     return copy
// }

// let obj = {a: 1, b: {c: 2}}
// let copy = deepClone(obj)

// console.log(copy);
// console.log(obj);
// obj.b.c = 5

/* 68. Реализуй функцию, которая принимает массив промисов и работает как Promise.all. */
// let arrPromise = [
//     new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
//     new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ошибка!")), 2000)),
//     new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
// ]

// function promiseAll(arr) {
//    return new Promise((resolve, reject) => {
//         let result = []
//         let completed = 0

//         arr.forEach((promise, index) => {
//             promise.then(value => {
//                 result[index] = value
//                 completed++

//                 if (arr.length === completed) {
//                     resolve(result)
//                 }
//             })
//             .catch(err => reject(err))
//         })
//    })
// }
// promiseAll(arrPromise).then(res => console.log(res))

/* Задача 69 Напиши функцию compose(f, g, h), которая позволяет объединять функции: compose(f,g,h)(x) → f(g(h(x))). */
// function compose(...func) {
//     return func.reduceRight((prevFn, nextFn) => (...args) => nextFn(prevFn(...args)))
// }

// const sum = (a, b) => a + b;
// const square = (x) => x * x;
// const double = (x) => x * 2;
// const process = compose(double, square, sum);
// console.log(process(2, 3)); // (2 + 3) → 5 → 25 → 50

/* Задача 70 Реализуй класс Stack (стек) с методами push, pop, peek, isEmpty. */
class Stack {
    constructor() {
        this.arr = []
        this.index = 0
    }

    push(value) {
        this.arr[this.index] = value
        this.index += 1
    }

    pop() {
        if (this.isEmpty()) return null
        this.index--
        console.log(`index = ${this.index}`);
        
        const value = this.arr[this.index]
        console.log(`value = ${value}`);
        
        this.arr.length = this.index
        return value
    } 

    peek() {
        if (this.isEmpty()) return null
        return this.arr[this.index - 1]
    }

    isEmpty() {
        return this.index === 0
    }    
}

let stack = new Stack();
stack.push(2);
stack.push(3);
console.log(stack.peek()); // 3
console.log(stack.pop());  // 3
console.log(stack.isEmpty()); // false
console.log(stack.pop());  // 2
console.log(stack.isEmpty()); // true
