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