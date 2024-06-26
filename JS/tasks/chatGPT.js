// Генератор случайных паролей
// const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

// function generatePassword(num) {
//     let arrChar = characters.slice('');
//     let pas = '';
//     for (let i = 0; i <= num; i++) {
//        let randomInd = Math.floor(Math.random() * arrChar.length);
//        pas += arrChar[randomInd];
//     }
//     return pas;
// }

// console.log(generatePassword(8));

//? У вас есть массив чисел. Напишите функцию filterEvens(arr), которая принимает массив чисел и возвращает новый массив, содержащий только четные числа из исходного массива.
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function filterEvens(arr) {
//   return arr.filter(num => num % 2 == 0)
// }

// const evenNumbers = filterEvens(numbers);
// console.log(evenNumbers); // Ожидаемый результат: [2, 4, 6, 8]

//? Реализуйте алгоритм сортировки пузырьком для массива чисел. Напишите функцию bubbleSort(arr), которая принимает массив чисел и возвращает отсортированный по возрастанию массив.

// const unsortedArray = [64, 34, 25, 12, 22, 11, 90];

// function bubbleSort(arr) {
//   let tamp;
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//     for (let j = 0; j < arr.length; j++) {
//     console.log('j = ', arr[j]);
//        if (arr[j] > arr[i]) {
//         tamp = arr[j];
//         arr[j] = arr[i]
//         arr[i] = tamp
//        }
//      }
//   }
//   return arr
// }

// const sortedArray = bubbleSort(unsortedArray);
// console.log(sortedArray); // Ожидаемый результат: [11, 12, 22, 25, 34, 64, 90]

//? У вас есть массив строк, представляющих имена. Напишите функцию filterNamesByLength(names, length), которая принимает массив имен и целое число length. Функция должна вернуть новый массив, содержащий только те имена, длина которых больше или равна указанному числу.
// const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];

// function filterNamesByLength(names, length) {
//   return names.filter(name => name.length >= length)
// }

// const filteredNames = filterNamesByLength(names, 4);
// console.log(filteredNames); // Ожидаемый результат: ['Alice', 'Charlie', 'David']

//? Реализуйте алгоритм двоичного поиска. Напишите функцию binarySearch(arr, target), которая принимает отсортированный массив чисел и целевое число для поиска. Функция должна вернуть индекс элемента в массиве, равного целевому числу, или -1, если элемент не найден.
// const sortedArray = [2, 5, 8, 12, 16, 23, 38, 42, 50];
// const targetNumber = 12;

// function binarySearch(arr, num) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === num) {
//       return i
//     }
//   }
//   return -1
// }

// const index = binarySearch(sortedArray, targetNumber);
// console.log(index); // Ожидаемый результат: 5

//? У вас есть массив объектов, представляющих студентов. Каждый объект содержит свойства name (строка) и grade (число). Напишите функцию filterTopStudents(students), которая принимает массив студентов и возвращает новый массив, содержащий только тех студентов, у которых оценка выше 90.
// const students = [
//   { name: 'Alice', grade: 88 },
//   { name: 'Bob', grade: 95 },
//   { name: 'Charlie', grade: 92 },
//   { name: 'David', grade: 85 }
// ];

// function filterTopStudents(students) {
//   return students.filter(student => student.grade > 90)
// }

// const topStudents = filterTopStudents(students);
// console.log(topStudents); // Ожидаемый результат: [{ name: 'Bob', grade: 95 }, { name: 'Charlie', grade: 92 }]

//? Реализуйте алгоритм обратного переворота строки. Напишите функцию reverseString(str), которая принимает строку и возвращает новую строку, в которой символы идут в обратном порядке.
// const originalString = 'Hello, World!';
// function reverseString(str) {
//   let reverseStr = ''
//   for (let i = str.length - 1; i >= 0 ; i--) {
//     reverseStr += str[i]
//   }
//   return reverseStr
// }

// const reversedString = reverseString(originalString);
// console.log(reversedString); // Ожидаемый результат: '!dlroW ,olleH'

//? У вас есть массив чисел. Напишите функцию calculateAverage(arr), которая принимает массив чисел и возвращает среднее арифметическое значение элементов массива
// const numbers = [10, 20, 30, 40, 50];

// function calculateAverage(nums) {
//   let res = nums.reduce((acc, num) => acc + num, 0)
//   return res / nums.length
// }

// const average = calculateAverage(numbers);
// console.log(average); // Ожидаемый результат: 30

//? Реализуйте алгоритм проверки является ли строка палиндромом. Напишите функцию isPalindrome(str), которая принимает строку и возвращает true, если строка является палиндромом, и false в противном случае. При проверке строки, игнорируйте пробелы и учитывайте регистр символов.
// const palindromeString = 'A man a plan a canal Panama';

// function isPalindrome(str) {
//   let revStr = ''
//   for (let i = str.length - 1; i >= 0; i--) {
//     if (str[i] === ' ') {
//       continue
//     }
//     revStr += str[i].toLowerCase()
//   }
//   let newStr = str.toLowerCase().replace(/ /g,'')

//   if (revStr !== newStr) {
//     return false
//   }

//   return true
// }

// const isPalindromeResult = isPalindrome('abcded');
// console.log(isPalindromeResult); // Ожидаемый результат: true

//? У вас есть массив строк, представляющих названия фруктов. Напишите функцию countVowels(fruits), которая принимает массив фруктов и возвращает объект, содержащий количество гласных (a, e, i, o, u) в каждом названии фрукта. Ключами объекта должны быть названия фруктов, а значениями – количество гласных в каждом названии.
// const fruits = ['apple', 'banana', 'kiwi', 'orange'];

// function countVowels(arr) {
//   const vowelDictonary = ['a', 'o', 'e', 'i', 'u', 'y'];
//   let newObj = {};

//   arr.forEach(word => {
//     let characters = word.split('')
    
//     let vowelCharacters = characters.filter(char => vowelDictonary.includes(char))

//    newObj[word] = vowelCharacters.length
//   })
//   return newObj
// }
// const vowelsCount = countVowels(fruits);
// console.log(vowelsCount); // Ожидаемый результат: { apple: 2, banana: 3, kiwi: 2, orange: 3 }


// Реализуйте алгоритм поиска наибольшего общего делителя (НОД) для двух чисел. Напишите функцию findGCD(a, b), которая принимает два числа и возвращает их НОД.
// const num1 = 36;
// const num2 = 48;
// function findGCD(num1, num2) {
//   if (num2 === 0) {
//     debugger
//     return num1
//   } else {
//     debugger
//    return findGCD(num2, num1 % num2)
//   }
// }

// const gcd = findGCD(num1, num2);
// console.log(gcd); // Ожидаемый результат: 12

//? Напишите функцию capitalizeFirstLetter(sentence), которая принимает предложение (строку) и возвращает новую строку, в которой первая буква каждого слова становится заглавной.
// const sentence = 'hello world, how are you?';

// function capitalizeFirstLetter(sentence) {
//   const words = sentence.split(' ');

//   // Проходим по каждому слову и делаем первую букву заглавной
//   const capitalizedWords = words.map(word => {
//     // Проверяем, чтобы слово было не пустым
//     if (word.length > 0) {
//       return word.charAt(0).toUpperCase() + word.slice(1);
//     } else {
//       return word; // Если слово пустое, оставляем его без изменений
//     }
//   });
//   console.log(capitalizedWords);
//   // Соединяем слова обратно в предложение
//   const capitalizedSentence = capitalizedWords.join(' ');

//   return capitalizedSentence;
// }

// const capitalizedSentence = capitalizeFirstLetter(sentence);
// console.log(capitalizedSentence); // Ожидаемый результат: 'Hello World, How Are You?'

//? У вас есть массив объектов, представляющих книги. Каждая книга имеет свойства title (название) и pages (количество страниц). Напишите функцию findLongestBook(books), которая принимает массив книг и возвращает объект с информацией о книге с самым большим количеством страниц.
// const books = [
//   { title: 'Book1', pages: 150 },
//   { title: 'Book2', pages: 200 },
//   { title: 'Book3', pages: 120 },
//   { title: 'Book4', pages: 190 },
//   { title: 'Book5', pages: 230 },
//   { title: 'Book6', pages: 220 }
// ];
// function findLongestBook() {
//    if (books.length === 0) {
//     return null
//    }
//    return books.reduce((acc, book) => {
//     return book.pages > acc.pages ? book : acc
//    })
// }

// const longestBook = findLongestBook(books);
// console.log(longestBook); // Ожидаемый результат: { title: 'Book2', pages: 200 }

//? Реализуйте алгоритм бинарного возведения в степень. Напишите функцию power(base, exponent), которая принимает основание base и показатель степени exponent, и возвращает результат возведения base в степень exponent.
// const base = 4;
// const exponent = 4;
// function power(base, n) {
//   if (n === 0) {
//     return 1
//   }

//   let res = 1;
//   for (let i = 0; i < n; i++) {
//     res *= base
//   }
//   return res
// }
// const result = power(base, exponent);
// console.log(result); // Ожидаемый результат: 16

//? Напишите функцию reverseWords(sentence), которая принимает предложение (строку) и возвращает новую строку, в которой порядок слов обратный.
// const sentence = 'Hello World, how are you?';
// function reverseWords(str) {
//   let words = str.split(' ');
//   return words.reverse().join(' ')
// }
// const reversedWords = reverseWords(sentence);
// console.log(reversedWords);
// Ожидаемый результат: 'you? are how World, Hello'

//? У вас есть массив чисел. Напишите функцию getSquares(arr), которая принимает массив чисел и возвращает новый массив, содержащий квадраты каждого числа из исходного массива.
// const numbers = [2, 4, 6, 8];
// function getSquares(arr) {
//     return arr.map(num => num * num)
// }
// const squares = getSquares(numbers);
// console.log(squares); // Ожидаемый результат: [4, 16, 36, 64]

//?  У вас есть массив строк. Напишите функцию filterLongWords(words, minLength), которая принимает массив строк и целое число minLength. Функция должна вернуть новый массив, содержащий только те слова из исходного массива, длина которых больше или равна указанному числу.

// const words = ['apple', 'banana', 'kiwi', 'orange', 'grape'];
// const minLength = 5;
// function filterLongWords(words, minLength) {
//     return words.filter(word => word.length >= minLength)
// }
// const longWords = filterLongWords(words, minLength);
// console.log(longWords);// Ожидаемый результат: ['banana', 'orange']

//? У вас есть массив объектов, представляющих студентов. Каждый объект содержит свойства name (строка) и grades (массив чисел). Напишите функцию getAverageGrades(students), которая принимает массив студентов и возвращает новый массив объектов, в которых каждый объект содержит имя студента и среднюю оценку (среднее арифметическое) из его массива оценок.
// const students = [
//     { name: 'Alice', grades: [85, 90, 88] },
//     { name: 'Bob', grades: [92, 87, 95] },
//     { name: 'Charlie', grades: [78, 82, 80] }
//   ];
//   function getAverageGrades(students) {
//     return students.map(student => {
//        let average = student.grades.reduce((sum, grades) => sum + grades, 0) / student.grades.length
//        return {name: student.name, average: average}
//     })
//   }
//   const averageGrades = getAverageGrades(students);
//   console.log(averageGrades); // Ожидаемый результат: [{ name: 'Alice', average: 87.67 }, { name: 'Bob', average: 91.33 }, { name: 'Charlie', average: 80 }]

//? Реализуйте алгоритм поиска наименьшего общего кратного (НОК) для двух чисел. Напишите функцию findLCM(a, b), которая принимает два числа и возвращает их НОК.
// const num1 = 12;
// const num2 = 18;
// function findGod(a, b) {
//     if (b === 0) {
//         return a
//     }
//     return findGod(b, a % b)
// }

// function findLCM(a, b) {
//     return a * b / findGod(a, b)
// }
// const lcm = findLCM(num1, num2);
// console.log(lcm); // Ожидаемый результат: 36

//? Напишите функцию isAnagram(str1, str2), которая принимает две строки и возвращает true, если они являются анаграммами (имеют одинаковые буквы в разном порядке), и false в противном случае.
// const str1 = 'listena';
// const str2 = 'silesnt';
// function isAnagram(str1, str2) {
//   if (str1.length !== str2.length) return false

//   const charCount1 = {};
//   const charCount2 = {};

//   for (let char of str1) {
//     charCount1[char] = (charCount1[char] || 0) + 1
//   }

//   for (let char of str2) {
//     charCount2[char] = (charCount2[char] || 0) + 1
//   }

//   for (let char in charCount1) {

//     if (charCount1[char] !== charCount2[char]) {
//         return false
//     }
//   } 
//   return true
// }
// const areAnagrams = isAnagram(str1, str2);
// console.log(areAnagrams); // Ожидаемый результат: true

//? У вас есть массив чисел от 1 до N включительно, где N - длина массива. Одно число из этого массива пропущено. Напишите функцию findMissingNumber(arr), которая принимает такой массив и возвращает пропущенное число.
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 10];
// const missingNumber = findMissingNumber(numbers);
// function findMissingNumber(arr) {
//     let count = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] !== count) {
//             return count
//         }
//         count++
//     }
//     return `Has not a missing number`
// }

// console.log(missingNumber); // Ожидаемый результат: 4

//? Напишите функцию mergeArrays(arr1, arr2), которая принимает два массива и возвращает новый массив, содержащий все элементы из обоих массивов без повторений.
// function mergeArrays(arr1, arr2) {
//   let nums = arr1.concat(arr2);
//   return nums.filter((num, i, arr) => num !== arr[i+1])
// }
// const arr1 = [1, 2, 3];
// const arr2 = [3, 4, 5];
// const mergedArray = mergeArrays(arr1, arr2);
// console.log(mergedArray); // Ожидаемый результат: [1, 2, 3, 4, 5]

//? Напишите функцию filterUnique(arr), которая принимает массив и возвращает новый массив, содержащий только уникальные элементы из исходного массива.
// const arr = [1, 2, 3, 3, 4, 5, 5];
// function filterUnique(arr) {
//     return [...new Set(arr)]
//    // return arr.filter((num, i, arr) => num !== arr[i+1])
// }
// const uniqueElements = filterUnique(arr);
// console.log(uniqueElements); // Ожидаемый результат: [1, 2, 3, 4, 5]

//? Напишите функцию countOccurrences(arr, target), которая принимает массив и целевой элемент, и возвращает количество вхождений целевого элемента в массив.
// const arr = [1, 2, 3, 3, 4, 5, 3];
// const targetElement = 3;
// function countOccurrences(arr, el) {
//     return arr.filter(num => num === el).length
// }
// const occurrences = countOccurrences(arr, targetElement);
// console.log(occurrences); // Ожидаемый результат: 3

//? Поиск наименьшего отсутствующего положительного числа Напишите функцию findMissingPositive(arr), которая принимает массив целых чисел и возвращает наименьшее положительное число, которое отсутствует в массиве.
// const numbers = [1, 2, 0];
// function findMissingPositive(arr) {
//     const positiveArr = arr.filter(num => num > 0)
//     if (positiveArr.length === 0) return 1
//     positiveArr.sort((a, b) => a - b)

//     for (let i = 0; i < positiveArr.length; i++) {
//         if (positiveArr[i] !== i+1) {
//             return i + 1
//         }
//     }

//     return positiveArr[positiveArr.length - 1] + 1
// }
// const missingPositive = findMissingPositive(numbers);
// console.log(missingPositive); // Ожидаемый результат: 3

//? У вас есть массив объектов, представляющих цвета, каждый объект имеет свойства name (строка) и order (число). Напишите функцию sortColorsByOrder(colors), которая принимает такой массив и возвращает новый массив, отсортированный по порядку (свойство order) в возрастающем порядке.
// const colors = [
//     { name: 'Blue', order: 3 },
//     { name: 'Red', order: 1 },
//     { name: 'Green', order: 2 }
//   ];
//   function sortColorsByOrder(colors) {
//     return colors.sort((prevColor, nextColor) => prevColor.order - nextColor.order)
//   }
//   const sortedColors = sortColorsByOrder(colors);
//   console.log(sortedColors); // Ожидаемый результат: [{ name: 'Red', order: 1 }, { name: 'Green', order: 2 }, { name: 'Blue', order: 3 }]

//? Напишите функцию findSubstring(str, substring), которая принимает строку и подстроку, и возвращает true, если подстрока присутствует в строке, и false в противном случае.
//   const str = 'Hello, World!';
// const substring = 'World';
// function findSubstring(str, search) {
//     return str.includes(search)
// }
// const isSubstringPresent = findSubstring(str, substring);
// console.log(isSubstringPresent); // Ожидаемый результат: true

//? Напишите функцию trimArray(arr, start, end), которая принимает массив и два индекса (start и end), а затем возвращает новый массив, содержащий элементы исходного массива с индексами от start до end, включительно.
// const arrayToTrim = [1, 2, 3, 4, 5];
// function trimArray(arr, start, end) {
//     return arr.slice(start, end + 1)
// }
// const trimmedArray = trimArray(arrayToTrim, 1, 3);
// console.log(trimmedArray);// Ожидаемый результат: [2, 3, 4]

//? Напишите функцию isArraySorted(arr), которая принимает массив чисел и возвращает true, если элементы массива упорядочены по возрастанию или убыванию, и false в противном случае.
// const ascendingArray = [1, 2, 3, 4, 5];
// const descendingArray = [5, 4, 3, 2, 1];
// const unsortedArray = [3, 1, 5, 2, 4];
// function isArraySorted(arr) {
//      // Проверка для возрастающего порядка
//   const isAscending = arr.every((element, index) => index === 0 || element >= arr[index - 1]);

//   // Проверка для убывающего порядка
//   const isDescending = arr.every((element, index) => index === 0 || element <= arr[index - 1]);

//   // Возвращаем результат (true, если упорядочено, иначе false)
//   return isAscending || isDescending;
// }
// console.log(isArraySorted(ascendingArray));// Ожидаемый результат: true

// console.log(isArraySorted(descendingArray)); // Ожидаемый результат: true

// console.log(isArraySorted(unsortedArray)); // Ожидаемый результат: false

//? Напишите функцию groupByWordLength(words), которая принимает массив слов и возвращает объект, где ключи - длины слов, а значения - массивы слов с соответствующей длиной.
// function groupByWordLength(words) {
//     let obj = {}
//     words.forEach(word => {
//         if (obj.hasOwnProperty(word.length)) {
//             obj[word.length].push(word)
//         } else {
//             obj[word.length] = [word]
//         }
//     });
//     return obj
// }
// const wordsToGroup = ['apple', 'banana', 'pear', 'kiwi', 'grape'];
// const groupedByLength = groupByWordLength(wordsToGroup);
// console.log(groupedByLength); // Ожидаемый результат: { '4': ['pear', 'kiwi'], '5': ['apple', 'grape'], '6': ['banana'] }

//? Напишите функцию extractNumbers(arr), которая принимает массив элементов различных типов и возвращает новый массив, содержащий только числовые значения.
// const mixedArray = [1, 'apple', 2, 'banana', 3, 'kiwi'];
// function extractNumbers(arr) {
//     return arr.filter(el => typeof el === 'number')
// }
// const numbersOnly = extractNumbers(mixedArray);
// console.log(numbersOnly); // Ожидаемый результат: [1, 2, 3]

//? Напишите функцию findMostFrequentElement(arr), которая принимает массив элементов и возвращает элемент, который встречается наиболее часто. Если есть несколько таких элементов, верните любой из них.
// const arrayWithFrequentElement = [2, 3, 2, 5, 3, 7, 2, 3];
// function findMostFrequentElement(arr) {
//     const a = arr.reduce((acc, el) => {
//         acc[el] = (acc[el] || 0) + 1;
//         return acc
//     }, {})

//     const sorted = Object.entries(a).sort((a, b) => b[1] - a[1]);
//     return sorted[0][0];
// }
// const mostFrequentElement = findMostFrequentElement(arrayWithFrequentElement);
// console.log(mostFrequentElement);// Ожидаемый результат: 2 (или 3, так как они встречаются одинаковое количество раз)

//? Напишите функцию splitByParity(arr), которая принимает массив чисел и возвращает новый массив, содержащий два подмассива: один с четными числами, другой - с нечетными. Подмассивы должны быть упорядочены по возрастанию.
// const numbersToSplit = [1, 4, 2, 7, 8, 5];
// function splitByParity(arr) {
//     const positiveArr = []
//     const negativeArr = []
//     arr.filter(el => el % 2 === 0 ? positiveArr.push(el) : negativeArr.push(el))
//     return [positiveArr, negativeArr]
// }
// const splittedByParity = splitByParity(numbersToSplit);
// console.log(splittedByParity); // Ожидаемый результат: [[2, 4, 8], [1, 5, 7]]

//? Напишите функцию removeSubstring(str, substring), которая принимает строку и подстроку, а затем возвращает новую строку, из которой удалены все вхождения подстроки.
// const originalString = 'apple orange apple kiwi';
// const substringToRemove = 'apple';
// function removeSubstring(str, word) {
//     return str.split(' ').filter(el => el !== word)
// }
// const stringWithoutSubstring = removeSubstring(originalString, substringToRemove);
// console.log(stringWithoutSubstring); // Ожидаемый результат: ' orange  kiwi'

//? Напишите функцию sortStringByWordFrequency(str), которая принимает строку и возвращает новую строку, отсортированную по убыванию частоты каждого слова.
// const stringToSortByFrequency = 'apple banana apple orange banana kiwi apple';
// function sortStringByWordFrequency(str) {
//     const arrWords = str.split(' ')
//     return arrWords.sort()
// }
// const sortedStringByWordFrequency = sortStringByWordFrequency(stringToSortByFrequency);
// console.log(sortedStringByWordFrequency); // Ожидаемый результат: 'apple apple apple banana banana kiwi orange'

//?
// function sumOfEvenNumbers(num) {
//     let res = 0
//     for (let i = 0; i <= num; i+=2) {
//         res += i
//     }
//     return res
// }
// const result = sumOfEvenNumbers(8);
// console.log(result); // Ожидаемый результат: 20 (2 + 4 + 6 + 8)

//? Напишите алгоритм для поиска максимального элемента в массиве целых чисел.
// const numbers = [4, 8, 2, 10, 5, 4];
// function findMaxElement(arr) {
//     let max = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i]
//     } 
//   }
//   return max
// }
// const maxNumber = findMaxElement(numbers);
// console.log(maxNumber); // Ожидаемый результат: 10

//? является ли число простым
// function isPrimeNumber(num) {
//   if (num < 0) {
//     console.log('Enter a positive number');
//   }
//   for (let i = 2; i < num; i++) {
//     if (num % i == 0) {
//       return false
//     }
//   }
//   return true
// }

// console.log(isPrimeNumber(7));
// console.log(isPrimeNumber(12));

//? factorial
// function factorial(num) {
//   if (num === 0 || num ===1) {
//     return 1
//   }
//   return num * factorial(num - 1)
// }
// console.log(factorial(5));

//? Напишите функцию counter, которая возвращает другую функцию. Вызов возвращенной функции должен увеличивать счетчик на 1. Каждый экземпляр counter должен иметь свой собственный счетчик.
// function counter() {
//   let res = 0
//   return function() {
//     return res += 1
//   }
// }

// const counterInstance1 = counter();
// const counterInstance2 = counter();
// console.log(counterInstance1()); // Ожидаемый результат: 1
// console.log(counterInstance1()); // Ожидаемый результат: 2
// console.log(counterInstance2()); // Ожидаемый результат: 1

//? Реализуйте функцию divideNumbers, которая принимает два числа в качестве аргументов и возвращает результат их деления. Однако, если делитель равен 0, функция должна выбрасывать исключение с соответствующим сообщением.
// function divideNumbers(num1, num2) {
//   if (num2 === 0 || num1 === 0) {
//     throw  new Error("Cannot divide by zero")
//   } else {
//     return num1 / num2
//   }
// }
// try {
//   const result1 = divideNumbers(30, 2);
//   console.log(result1); // Ожидаемый результат: 5

//   const result2 = divideNumbers(8, 0); // Вызовет ошибку
// } catch (error) {
//   console.error(error.message); // Ожидаемый результат: "Cannot divide by zero"
// }

//? Описание: Дан массив объектов, представляющих студентов. Каждый объект содержит поля name (строка) и grades (массив чисел). Используя методы filter и map, создайте новый массив, включающий только имена студентов, у которых средний балл по оценкам выше 80.
// const students = [
//   { name: "Alice", grades: [90, 85, 88] },
//   { name: "Bob", grades: [15, 82, 95] },
//   { name: "Charlie", grades: [85, 92, 89] }
// ];

// const highScorers = students
// .filter(student => student.grades.reduce((acc, grade) =>  acc + grade, 0) / student.grades.length > 80)
// .map(student => student.name)
// console.log(highScorers); // Ожидаемый результат: ["Alice", "Charlie"]

//? Описание: Напишите функцию sumEvenNumbers, которая принимает массив чисел и возвращает сумму четных чисел. Используйте метод reduce для решения задачи.
// function sumEvenNumbers(arr) {
//   return arr.reduce((acc, el) => el % 2 === 0 ? acc + el : acc, 0)
// }
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const sumEven = sumEvenNumbers(numbers);
// console.log(sumEven); // Ожидаемый результат: 30 (2 + 4 + 6 + 8 + 10)

//? Описание: Дан массив чисел. Напишите функцию squareNumbers, которая принимает этот массив и возвращает новый массив, в котором каждое число возведено в квадрат. Используйте метод forEach.
// function squareNumbers(arr) {
//   let newArr = []
//    arr.forEach(num => {
//    newArr.push(num * num)
//   });
//   return newArr
// }

// console.log(squareNumbers([1, 2, 3, 4, 5])); // Ожидаемый результат: [1, 4, 9, 16, 25]

//? Дан объект, представляющий информацию о книге. Напишите функцию isBookAvailable, которая принимает объект книги и возвращает true, если количество экземпляров книги больше 0, и false в противном случае.
// const book = {
//     title: "The Catcher in the Rye",
//     author: "J.D. Salinger",
//     availableCopies: 3
//   };
// function isBookAvailable(book) {
//     return book.availableCopies > 0
// }
//   console.log(isBookAvailable(book)); // Ожидаемый результат: true

//? Дан массив чисел. Напишите функцию doubleAndFilterEvenNumbers, которая удваивает значения четных чисел и возвращает новый массив, содержащий только положительные значения.
// const numbers = [1, 2, 3, 4, 5, 6];
// function doubleAndFilterEvenNumbers(arr) { 
//     return arr.filter(num => num % 2 === 0).map(num => num *= 2)
// }
// const result = doubleAndFilterEvenNumbers(numbers);
// console.log(result); // Ожидаемый результат: [4, 8, 12]

//? Описание: Дан массив объектов, представляющих продукты в корзине покупок. Каждый объект содержит поля name (строка) и price (число). Напишите функцию calculateTotalPrice, которая принимает массив продуктов и возвращает общую стоимость покупок.
// const products = [
//     { name: "Apple", price: 2.5 },
//     { name: "Banana", price: 1.5 },
//     { name: "Orange", price: 3 }
//   ];
//   function calculateTotalPrice(products) {
//     return products.reduce((acc, product) => acc + product.price, 0)
//   }
//   const totalPrice = calculateTotalPrice(products);
//   console.log(totalPrice); // Ожидаемый результат: 7

//? Описание: Напишите функцию compose, которая принимает массив функций и возвращает новую функцию. Эта новая функция должна применять все функции из массива поочередно, начиная с последней, к переданному ей аргументу.
// const addTwo = x => x + 2;
// const multiplyByThree = x => x * 3;
// const square = x => x ** 2;
// function compose(arrFunc) {
//  return (val) => {
//     let res = val;
//     for (let i = arrFunc.length - 1; i >= 0; i--) {
//         res = arrFunc[i](res)
//     }
//     return res
//  }
// }
// const composedFunction = compose([square, multiplyByThree, addTwo]);
// console.log(composedFunction(5)); // Ожидаемый результат: 411 (сначала 5 + 2, затем * 3, затем ** 2)

//? Описание: Дан массив чисел. Напишите функцию findLongestIncreasingSubarray, которая находит самый длинный возрастающий подмассив (последовательность чисел) и возвращает его длину. Подмассив должен быть строго возрастающим.
// const numbers = [1, 3, 2, 1, 4, 7, 8, 10];
// function findLongestIncreasingSubarray(arr) {
//     return arr.reduce((acc, num, i, array) => {
//         if (i > 0 && num > array[i - 1]) {
//             acc.currentLength += 1

//             acc.maxLength = Math.max(acc.maxLength, acc.currentLength)
//         } else {
//             acc.currentLength = 1
//         }
//         return acc
//     }, {currentLength: 1, maxLength: 1}).maxLength
// }
// const length = findLongestIncreasingSubarray(numbers);
// console.log(length); // Ожидаемый результат: 5 (последовательность: 2, 4, 7, 5, 10)

//? Описание: Напишите функцию findUniqueElements, которая принимает массив объектов и возвращает новый массив, содержащий только уникальные объекты. Два объекта считаются уникальными, если все их свойства имеют разные значения.
// const objects = [
//     { id: 1, name: 'Alice' },
//     { id: 2, name: 'Bob' },
//     { id: 1, name: 'Alice' },
//     { id: 3, name: 'Charlie' }
//   ];
//   function findUniqueElements(arr) {
//     return arr.filter((currentObj, currentIndex, array) => {
//       // Используем some для проверки, есть ли другие объекты с теми же свойствами
//       return !array.some((otherObj, otherIndex) => {
//         return (
//           currentIndex !== otherIndex &&
//           Object.keys(currentObj).every(
//             (key) => currentObj[key] === otherObj[key]
//           )
//         );
//       });
//     });
//   }
//   const uniqueObjects = findUniqueElements(objects);
// console.log(uniqueObjects);// Ожидаемый результат: [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }, { id: 3, name: 'Charlie' }]

//? Описание: Дан массив строк. Напишите функцию filterAndSortStrings, которая фильтрует строки, содержащие букву 'a', и сортирует их в алфавитном порядке.
// const strings = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
// function filterAndSortStrings(arr) {
//     return arr.filter(word => word.includes('a')).sort()
// }
// const result = filterAndSortStrings(strings);
// console.log(result); // Ожидаемый результат: ['apple', 'banana', 'grape', 'orange']

//? Описание: Напишите функцию idGenerator, которая возвращает новую функцию-генератор уникальных идентификаторов. Каждый вызов генератора должен возвращать новый уникальный идентификатор.
// function idGenerator() {
//     let id = 0;
//     return function() {
//         id += 1;
//         return `id_${id}`
//     }
// }
// const generateId = idGenerator();
// console.log(generateId()); // Ожидаемый результат: 'id_1'
// console.log(generateId()); // Ожидаемый результат: 'id_2'

//? Описание: Напишите функцию removeDuplicateNumbers, которая принимает массив чисел и возвращает новый массив, в котором удалены все дубликаты чисел.
// function removeDuplicateNumbers(arr) {
//    return arr.filter((el, index, array) => {
//     return array.indexOf(el) === index
//    })
// }
// const numbers = [1, 2, 3, 2, 4, 5, 3, 6];
// const result = removeDuplicateNumbers(numbers);
// console.log(result); // Ожидаемый результат: [1, 2, 3, 4, 5, 6]

//? Описание: Дан массив целых чисел. Напишите функцию findMaxSumSubarray, которая находит подмассив (последовательность чисел) с максимальной суммой и возвращает эту сумму.
// const numbers = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// function findMaxSumSubarray(arr) {
//     if (arr.length === 0) {
//         return 0
//     }

//     let currentSum = arr[0];
//     let maxSum = arr[0];

//     for (let i = 1; i < arr.length; i++) {
//         currentSum = Math.max(arr[i], currentSum + arr[i]);
//         maxSum = Math.max(maxSum, currentSum);
//     }
//     return maxSum
// }
// const maxSum = findMaxSumSubarray(numbers);
// console.log(maxSum); // Ожидаемый результат: 6 (подмассив: [4, -1, 2, 1])

//? Напишите функцию findFirstUniqueCharacter, которая принимает строку и возвращает первый уникальный символ в этой строке. Если такого символа нет, верните -1.
// const str = "leetcode";
// function findFirstUniqueCharacter(str) {
//     let count = {}
//     for (const char of str) {
//         count[char] = (count[char] || 0) + 1
//     }
//     for (const char of str) {
//         if (count[char] === 1) {
//             return char
//         }
//     }
//     return char -1
// }
// const result = findFirstUniqueCharacter(str);
// console.log(result); // Ожидаемый результат: 'l'

//? Описание: Дан массив чисел и целевое число. Напишите функцию findTwoNumbers, которая находит два числа в массиве, сумма которых равна целевому числу. Верните индексы этих чисел.
// const numbers = [2, 5, 3, 6, 11, 15];
// const target = 9;
// function findTwoNumbers(nums, target) {
//  const numIndices = new Map()

//  for (let i = 0; i < nums.length; i++) {
//     const complement = target - nums[i]
//     if (numIndices.has(complement)) {
//         return [numIndices.get(complement), i];
//     }
//     numIndices.set(nums[i], i)
//  }
//  return []
// }
// const indices = findTwoNumbers(numbers, target);
// console.log(indices); // Ожидаемый результат: [0, 1] (так как 2 + 7 = 9)

//? Описание: Напишите функцию reverseString, которая принимает строку и возвращает ее в обратном порядке.
// const str = "hello";
// function reverseString(str) {
//     let reveStr = ''
//     for (let i = str.length - 1; i >= 0; i--) {
//         reveStr += str[i]
//     }
//     return reveStr
// // return ste.split('').reverse().join('')
// }
// const reversed = reverseString(str);
// console.log(reversed); // Ожидаемый результат: 'olleh'

//? Напишите функцию isPalindrome, которая принимает строку и возвращает true, если строка является палиндромом, и false в противном случае. (Палиндром - это строка, которая читается одинаково вперед и назад, игнорируя пробелы, знаки препинания и регистр.)
// const str = "A man, a plan, a sd sacanal, Panama";
// function isPalindrome(str) {
//   let newStr = ''
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] !== ' ' && str[i] !== ',') {
//         newStr += str[i]
//     }
//     continue
//   }
//   let reverseStr = ''
//   for (let i = newStr.length - 1; i >= 0; i--) {
//     reverseStr += newStr[i]
//   }
//   if (reverseStr.toLowerCase() === newStr.toLowerCase()) {
//     return true
//   }
//   return false
//// const cleanStr = str.toLwerCase().replace(/[^a-zA-Z0-9]/g, '')
//// const reversedStr = cleanStr.split('').reverse().join()
//// return cleanStr === reversedStr
// }
// const result = isPalindrome(str);
// console.log(result); // Ожидаемый результат: true

//? Описание: Напишите функцию mergeArrays, которая принимает два отсортированных массива и возвращает новый массив, представляющий собой объединение этих массивов в отсортированном порядке.
// const arr1 = [1, 3, 5];
// const arr2 = [2, 4, 6];
// function mergeArrays(arr1, arr2) {
//     return arr1.concat(arr2).sort((a,b) => a - b)
// }
// const merged = mergeArrays(arr1, arr2);
// console.log(merged); // Ожидаемый результат: [1, 2, 3, 4, 5, 6]

//? Описание: Напишите функцию sortString, которая принимает строку из букв в нижнем регистре и сортирует ее в лексикографическом порядке.
// const str = "javascript";
// function sortString(str) {
//     return str.split('').sort().join('')
// }
// const result = sortString(str);
// console.log(result); // Ожидаемый результат: 'aacijprstv'

//? Описание: Напишите функцию findMaxElement, которая принимает массив чисел и возвращает максимальный элемент.
// const numbers = [5, 2, 8, 1, 9];
// function findMaxElement(arr) {
//     return Math.max(...arr)
// }
// const maxElement = findMaxElement(numbers);
// console.log(maxElement); // Ожидаемый результат: 9
 
//? Описание: Напишите функцию isEven, которая принимает число и возвращает true, если число четное, и false в противном случае.
// const number = 10;
// function isEven(num) {
//     if (num % 2 === 0) return true
//     return false
// }
// const result = isEven(number);
// console.log(result); // Ожидаемый результат: false

//? Описание: Напишите функцию truncateString, которая принимает строку и число n, и обрезает строку до длины n. Если строка была обрезана, добавьте к концу строки троеточие ("...").
// const inputStr = "Hello, World!";
// const maxLength = 5;
// function truncateString(str, maxLength) {
//     // return str.split('').splice(0, maxLength).join('').concat('...')
//     if (str.length <= maxLength) {
//         return str
//     } else {
//         return str.slice(0, maxLength) + '...'
//     }
// }
// const truncatedStr = truncateString(inputStr, maxLength);
// console.log(truncatedStr); // Ожидаемый результат: 'Hello...'

//? Описание: Напишите функцию removeDuplicates, которая принимает массив чисел и возвращает новый массив без повторяющихся элементов.
// const numbers = [1, 2, 3, 2, 4, 5, 3, 6];
// function removeDuplicates(arr) {
//     // let result = []
//     // let sortArr = arr.sort((a,b) => a - b)
//     // for (let i = 0; i < sortArr.length; i++) {
//     //     if (sortArr[i] !== sortArr[i + 1]) {
//     //         result.push(sortArr[i])
//     //     }
//     // }
//     // return result
//     return Array.from(new Set(arr));
// }
// const uniqueNumbers = removeDuplicates(numbers);
// console.log(uniqueNumbers); // Ожидаемый результат: [1, 2, 3, 4, 5, 6]

//? Описание: Напишите функцию findSubstring, которая принимает строку и подстроку, и возвращает индекс первого вхождения подстроки в строке. Если подстрока не найдена, верните -1.
// const mainString = "programming";
// const substring = "gram";
// function findSubstring(str, find) {
//     return str.indexOf(find)
// }
// const result = findSubstring(mainString, substring);
// console.log(result); // Ожидаемый результат: 3

//? Описание: Напишите функцию sumNumbers, которая принимает число N и возвращает сумму всех целых чисел от 1 до N.
// const N = 5;
// function sumNumbers(n) {
//     if (n > 0) {
//         return n + sumNumbers(n-1)
//     } else {
//         return n
//     }
// }
// const result = sumNumbers(N);
// console.log(result); // Ожидаемый результат: 15 (1 + 2 + 3 + 4 + 5)

//? Описание: Напишите функцию findMinNumber, которая принимает массив чисел и возвращает минимальное число.
// const numbers = [5, 2, 8, 1, 9];
// function findMinNumber(arr) {
//     return Math.min(...arr)
// }
// const minNumber = findMinNumber(numbers);
// console.log(minNumber); // Ожидаемый результат: 1

//? Описание: Напишите функцию sortColors, которая принимает массив строк, представляющих цвета ("red", "green", "blue") и сортирует их в порядке: сначала идут красные, затем зеленые, затем синие.
// const colors = ["blue", "green", "red", "green", "blue", "red"];
// function sortColors(colors) {
//     return colors.sort().reverse()
// const colorOrder = { "red": 0, "green": 1, "blue": 2}
// return colors.sort((a,b) => colorOrder[a] - colorOrder[b])
// }
// const sortedColors = sortColors(colors);
// console.log(sortedColors); // Ожидаемый результат: ["red", "red", "green", "green", "blue", "blue"]

//? Описание: Напишите функцию groupElementsByCount, которая принимает массив элементов и возвращает новый массив, где элементы сгруппированы по количеству их вхождений в исходном массиве. Каждый элемент нового массива - объект с полями value (значение элемента) и count (количество вхождений).
// const elements = [1, 2, 1, 3, 2, 4, 2, 5, 1];
// function groupElementsByCount(elements) {
//     const groupedArray = [];

//     elements.forEach((element) => {
//       const existingElement = groupedArray.find((grouped) => grouped.value === element);
  
//       if (existingElement) {
//         existingElement.count++;
//       } else {
//         groupedArray.push({ value: element, count: 1 });
//       }
//     });
  
//     return groupedArray;
// }
// const groupedElements = groupElementsByCount(elements);
// console.log(groupedElements);// Ожидаемый результат: [{ value: 1, count: 3 }, { value: 2, count: 3 }, { value: 3, count: 1 }, { value: 4, count: 1 }, { value: 5, count: 1 }]

//? Описание: Напишите функцию reverseStringWithoutDigitsChange, которая принимает строку, состоящую из букв и цифр, и возвращает строку, в которой буквы обращены, а цифры остались на своих местах.
// const str = "a1b2c3";
// function reverseStringWithoutDigitsChange(str) {
//   const letters = str.match(/[a-zA-Z]/g);

//   if (!letters) {
//     return str;
//   }

//   let reversedStr = "";
//   let letterIndex = 0;

//   for (let i = 0; i < str.length; i++) {
//     if (/[a-zA-Z]/.test(str[i])) {
//       reversedStr += letters[letters.length - 1 - letterIndex];
//       letterIndex++;
//     } else {
//       reversedStr += str[i];
//     }
//   }

//   return reversedStr;
// }
// const result = reverseStringWithoutDigitsChange(str);
// console.log(result); // Ожидаемый результат: "c3b2a1"

//? Напишите функцию countSubstrings, которая принимает строку и подстроку, и возвращает количество вхождений подстроки в строке.
// const mainString = "ababab";
// const substring = "ab";
// function countSubstrings(mainString, substring) {
//   if (!mainString || !substring) {
//     return 0
//   }
//   let count = 0
//   let index = mainString.indexOf(substring)

//   while (index !== - 1) {
//     count++
//     index = mainString.indexOf(substring, index + 1)
//   }
//   return count
// }
// const result = countSubstrings(mainString, substring);
// console.log(result); // Ожидаемый результат: 3

// const arr1 = [1, 2, 3];
// const arr2 = [2, 3, 4];
// function getUniqueElements(arr1, arr2) {
//  return [...new Set(arr1.concat(arr2))]
// }
// const result = getUniqueElements(arr1, arr2);
// console.log(result); // Ожидаемый результат: [1, 2, 3, 4]

//? Описание: Напишите функцию maxDifference, которая принимает массив чисел и возвращает максимальную разницу между двумя элементами массива, где больший элемент находится после меньшего.
// const numbers = [2, 8, 3, 10, 5, 6, 12, 50];
// function maxDifference(numbers) {
//   let res = 0
//   let prevRes = 0
//   for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] > numbers[i - 1]) {
//       res = numbers[i] - numbers[i - 1]
//     } else {
//       res = numbers[i - 1] - numbers[i] 
//     }

//     if (prevRes > res) {
//       res = prevRes
//     }

//     prevRes = res
//   }
//   return res
// }
// const result = maxDifference(numbers);
// console.log(result); // Ожидаемый результат: 7 (10 - 3)

//? Описание: Напишите функцию для глубокого копирования объекта, учитывая вложенные объекты и массивы.
// const original = { a: 1, b: { c: 2 }, d: [3, 4] };
// function deepCopy(obj) {
//     if (typeof  obj !== 'object') {
//         return obj
//     }
//
//     if (Array.isArray(obj)) {
//         return obj.map(deepCopy);
//     }
//     const result = {};
//     for (const key in obj) {
//         if (obj.hasOwnProperty(key)) {
//             result[key] = deepCopy(obj[key])
//         }
//     }
//     return result
// }
// const copy = deepCopy(original);
// copy.b.c = 5;
// console.log(original.b.c); // 2


// const objectsArray = [{ value: 5 }, { value: 2 }, { value: 8 }];
// function sortByValue(arr) {
//     return arr.sort((a, b) => a.value - b.value)
// }
// sortByValue(objectsArray);
// console.log(objectsArray); // [{ value: 2 }, { value: 5 }, { value: 8 }]

//?Описание: Напишите функцию, которая обрезает строку до заданной длины и добавляет многоточие ("..."), если строка была обрезана.
// function truncateString(str, num) {
//     return str.slice(0, num) + '...'
// }
// console.log(truncateString("Lorem ipsum dolor sit amet", 10)) // "Lorem ipsu..."
// console.log(truncateString("A quick brown fox", 15)); // "A quick brown..."

//? Описание: Напишите функцию, которая принимает несколько массивов и объединяет их в один массив, удаляя дубликаты.
// function mergeArrays(...arr) {
//     let newArr = []
//     arr.forEach((els) => {
//         els.forEach(el=>{
//             if (!newArr.includes(el)) {
//                 newArr.push(el)
//             }
//         })
//     })
//     return newArr
// }
// console.log(mergeArrays([1, 2, 3], [3, 4, 5], [5, 6, 7]))
// console.log(mergeArrays(["apple", "orange"], ["banana", "apple"]))

//Описание: У вас есть массив чисел от 1 до N, за исключением одного числа. Напишите функцию для нахождения пропущенного числа.
// function findMissingNumber(arr) {
//     const n = arr.length + 1; // Одно число пропущено, поэтому увеличиваем длину массива на 1
//     const expectedSum = (n * (n + 1)) / 2; // Сумма чисел от 1 до N по формуле
//     const actualSum = arr.reduce((sum, num) => sum + num, 0); // Сумма чисел в массиве
//
//     return expectedSum - actualSum;
// }
// console.log(findMissingNumber([1, 2, 4, 5])) // 3
// console.log(findMissingNumber([10, 8, 7, 6, 5, 4, 3, 2, 1]))

//  Напишите функцию, которая возвращает массив уникальных слов из заданной строки, игнорируя регистр букв.
// function uniqueWords(str) {
//     let arr = str.split(' ').map(word => word.toLowerCase())
//     return [... new Set(arr)]
// }
// console.log(uniqueWords("The quick brown fox Fox Fox"))
// console.log(uniqueWords("Hello hello world World"))

//? Описание: Напишите функцию для инвертирования связанного списка
// function reverseLinkedList(arr) {
//     return arr.reverse()
// }
// const reversedList = reverseLinkedList([1, 2, 3, 4, 5]);
// console.log(reversedList); // 5 -> 4 -> 3 -> 2 -> 1

//? Напишите функцию, которая принимает строку и возвращает ее "сжатую" версию. Если последовательные символы повторяются, замените их числом, обозначающим количество повторений. Если сжатая строка не короче оригинала, верните исходную строку.
// function compressString(str) {
//     let compressed = '';
//     let count = 1;
//     for (let i =0; i <str.length; i++) {
//         if (str[i] === str[i+1]) {
//             count++
//         } else {
//             compressed += str[i] + (count > 1 ? count : '')
//             count = 1
//         }
//
//     }
//     return compressed.length < str.length ? compressed : str
// }
// console.log(compressString("aabcccccaaa"))
// console.log(compressString("abcde"))

//? Описание: Напишите функцию, которая принимает строку и возвращает количество гласных букв в ней (a, e, i, o, u).
// function countVowels(str) {
//     let vowels = ['a', 'e', 'i', 'o', 'u']
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//        if(vowels.includes(str[i])) {
//            count++
//        }
//     }
//     return count
// }
//
// console.log(countVowels('Hello ii u ass World'));

//? Описание: Напишите функцию, которая принимает массив чисел и возвращает новый массив, содержащий те же числа, но отсортированные по убыванию.
// function sortDescending(numbers) {
//     return numbers.sort((a, b) => b - a).map(number => number)
// }
// console.log(sortDescending([3, 1, 7, 4, 2])); // [7, 4, 3, 2, 1]

//? Описание: Напишите функцию, которая принимает другую функцию и возвращает новую функцию с механизмом кэширования. Если функция вызывается с теми же аргументами, что и ранее, она должна возвращать закэшированный результат, а не вычислять его заново.
// function cacheFunction(f) {
//     const cashe = {}
//     return function (...args) {
//         const key = JSON.stringify(args)
//
//         if (key in cashe) {
//             console.log('Fetching result from cache')
//             return cashe[key]
//         }
//         console.log('Calculating result');
//         const result = f(...args)
//         cashe[key] = result
//         return result
//     }
// }
// const cachedSum = cacheFunction((a, b) => a + b);
// console.log(cachedSum(2, 3)); // должно вычислиться
// console.log(cachedSum(2, 3)); // должно взяться из кэша

//? Описание: Используя Promises или async/await, напишите функцию, которая делает два асинхронных запроса к серверам API и возвращает результат их обработки (например, сумму двух значений).
// function fetchDataFromAPI1() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(5)
//         }, 1000)
//     })
// }
// function fetchDataFromAPI2() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(10)
//         }, 1500)
//     })
// }
// function  processResult(data1, data2) {
//     return data1 + data2
// }
// async function fetchDataAndProcess() {
//     const data1 = await fetchDataFromAPI1();
//     const data2 = await fetchDataFromAPI2();
//     return processResult(data1, data2);
// }
//
// fetchDataAndProcess().then((result) => {
//     console.log('Обработанный результат', result)
// })

//? Описание: Напишите функцию, которая проверяет, является ли строка палиндромом (читается одинаково вперед и назад, игнорируя пробелы, знаки препинания и регистр).
// function isPalindrome(str) {
//     let regex = /[.,\s]/g;
//     let reverseStr = str.replace(regex, '').toLowerCase().split('').reverse().join('')
//     let newStr = str.replace(regex,'').toLowerCase()
//     return reverseStr === newStr
// }
// console.log(isPalindrome('A man, a plan, a canal, Panama')); //true

//Описание: Напишите функцию, которая принимает массив и возвращает новый массив, содержащий только уникальные элементы (без повторений).
// function findUniqueElements(arr) {
//     return [...new Set(arr)]
// }
// console.log(findUniqueElements([1, 2, 3, 4, 2, 1, 5])) // [1, 2, 3, 4, 5]

//? Описание: Напишите функцию, которая генерирует случайный пароль заданной длины. Пароль должен содержать буквы (в верхнем и нижнем регистре) и цифры.
// function generateRandomPassword(numLength) {
//     let reg = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
//     let pass = ''
//     for (let i = 0; i < numLength; i++) {
//         let randomNumber = Math.floor(Math.random() * reg.length)
//         pass += reg[randomNumber]
//     }
//     return pass
// }
// console.log(generateRandomPassword(8))

//? Описание: Напишите функцию, которая принимает число n и возвращает сумму факториалов всех чисел от 1 до n.
// function sumFactorials(n) {
//     function  factorial(num) {
//         if (num === 1 || num === 0) {
//             return 1
//         } else {
//             return num * factorial(num-1)
//         }
//     }
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//         sum += factorial(i)
//     }
//     return sum
// }
// console.log(sumFactorials(4)) //33

//? Описание: Напишите функцию, которая принимает число и возвращает true, если оно является простым числом, и false в противном случае.
// function isPrime(num) {
//     for (let i = 2; i<=num; i++) {
//         if (num % i === 0) {
//             if (i === num && num % i ===0) {
//                 return true
//             }
//                 return false
//         }
//     }
// }
//
// console.log(isPrime(50)) // true
//?Описание: Напишите функцию, которая принимает массив, содержащий вложенные массивы, и возвращает новый массив с раскрытыми элементами вложенных массивов.
// function flattenNestedArrays(arr) {
//    return arr.reduce((result, current) => {
//        return result.concat(Array.isArray(current) ? flattenNestedArrays(current) : current)
//    }, [])
// }
// console.log(flattenNestedArrays([1, [2, 3], [4, [5, 6]]])) //[1, 2, 3, 4, 5, 6]

// Описание: Напишите функцию, которая принимает строку и число n, и возвращает новую строку, обрезанную до n слов (если в строке больше слов).
// function truncateString(str, num) {
//     return  str.split(' ').slice(0,num).join(' ')
// }
// console.log(truncateString('Lorem ipsum dolor sit amet consectetur adipiscing elit', 5))

//Описание: Напишите функцию, которая принимает два числа (минимальное и максимальное) и возвращает случайное целое число включительно в этом диапазоне.
// function getRandomNumber(min, max) {
//     return Math.floor(Math.random() * (max-min) + min)
// }
// console.log(getRandomNumber(1, 10))

//?Описание: Напишите функцию, которая принимает два массива и возвращает новый массив, содержащий уникальные элементы из обоих массивов.
// function mergeArrays(arr1, arr2) {
//     return console.log([...new Set(arr1.concat(arr2))])
// }
// mergeArrays([1, 2, 3], [3, 4, 5]);

//? Описание: Напишите функцию, которая принимает аргумент и возвращает его тип данных (например, "number", "string", "object" и т.д.).
// function getDataType(val) {
//   return typeof val
// }
// console.log(getDataType(42))

//? Описание: Напишите функцию, которая принимает массив чисел и возвращает максимальное значение.
// function findMaxValue(arr) {
//     return console.log(Math.max(...arr))
// }
// findMaxValue([3, 7, 2, 9, 1]);

//? Описание: Напишите функцию, которая сравнивает два объекта и возвращает true, если они идентичны (имеют одни и те же ключи и значения), и false в противном случае.
// function areObjectsEqual(obj1, obj2) {
//     const keys1 = Object.keys(obj1);
//     const keys2 = Object.keys(obj2);
//     if (keys1.length !== keys2.length) return false
//     return keys1.every(key => {
//         const val1 = obj1[key];
//         const val2 = obj2[key];
//         if (typeof val1 === 'object' && typeof val2 === 'object') {
//             return areObjectsEqual(val1, val2)
//         }
//         return val1 === val2
//     })
// }
// const obj1 = { a: 1, b: {n: 4}, c: 3 };
// const obj2 = { a: 1, b: {n: 4}, c: 3 };
// console.log(areObjectsEqual(obj1, obj2))

//? Описание: Напишите функцию, которая принимает число n и возвращает сумму всех чисел Фибоначчи до или равно n.
// function sumFibonacciNumbers(n) {
//     let sum = 0;
//     let fibPrev = 0;
//     let fibCurr = 1;
//
//     while (fibCurr <= n) {
//         if (fibCurr % 2 !== 0) {
//             // Учитываем только нечетные числа Фибоначчи
//             sum += fibCurr;
//         }
//
//         const temp = fibPrev + fibCurr;
//         fibPrev = fibCurr;
//         fibCurr = temp;
//     }
//
//     return sum;
// }
// console.log(sumFibonacciNumbers(10)) // 23 // 1 + 1 + 2 + 3 + 5 + 8 = 23

//? Условие: Напиши функцию filterNumbers(arr, min, max), которая принимает массив чисел и возвращает новый массив, содержащий только те числа, которые находятся в пределах от min до max.
// function filterNumbers(arr, minV, maxV) {
//     let newArr = []
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] >= minV && arr[i] <= maxV) {
//             newArr.push(arr[i])
//         }
//     }
//     return console.log(newArr)
//return arr.filter(num => num >= minV && num <= maxV)
// }
// filterNumbers([5, 10, 3, 8, 15], 6, 12); //[10, 8]

//? Условие: Напиши функцию hasUniqueCharacters(str), которая проверяет, содержит ли заданная строка только уникальные символы (без повторений).
// function hasUniqueCharacters(str) {
//  const charSet = new Set();
//  for (const char of str) {
//      if (charSet.has(char)) {
//          return false
//      }
//      charSet.add(char)
//  }
//  return  true
// }
// console.log(hasUniqueCharacters("asabcdefg")) // true

//? Условие: Напиши функцию generateUniqueId(), которая возвращает строку-уникальный идентификатор. Идентификатор должен быть достаточно случайным, чтобы вероятность повторения была крайне низкой.
// function generateUniqueId() {
//    const timestamp = Date.now().toString(36) // Преобразование временной метки в строку
//     const randomStr = Math.random().toString(36).substr(2) // Генерация случайной строки
//     const hash = Math.random().toString(36).substr(2) // Генерация случайного хэша
//     return `${timestamp}-${randomStr}-${hash}`;
// }
// console.log(generateUniqueId()); // "2f5a1c3b-5ed8-43a9-86fb-6d2f0f012345"


// var timeLimit = function(fn, t) {
    
//     return async function(...args) {
//         return new Promise((resolve, reject) => {
//          let timerId = setTimeout(() => {
//                if (timerId < t) {
//                     resolve(fn(...args))
//                } else {
//                 reject(new Error("Time Limit Exceeded."))
//                } 
               
                 
//                 t})
//                 console.log(timerId);
//         })
        
//     }
// };


//  const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
//   limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms

// function min(val1, val2) {
//    return val1 > val2 ? val2 : val1 
// }

// console.log(min(0, -10));

//? Рекурсия
// function isEven(number) {
//  if (number == 0) {
//    return true
//  } else if (number == 1) {
//    return false
//  } else if (number < 1) {
//    return isEven(-number)
//  } 
//  else {
//    return isEven(number - 2)
//  }
// }

// console.log(isEven(50));
// // → true
// console.log(isEven(75));
// // → false
// console.log(isEven(-1));

//? Символ номер N строки можно получить, добавив к ней .charAt(N) ( "строчка".charAt(5) ) – схожим образом с получением длины строки при помощи .length. Возвращаемое значение будет строковым, состоящим из одного символа (к примеру, "к"). У первого символа строки позиция 0, что означает, что у последнего символа позиция будет string.length - 1. Другими словами, у строки из двух символов длина 2, а позиции её символов будут 0 и 1.
// function countChar(string, ch) {
//    let counted = 0;
//    for (let i = 0; i < string.length; i++) {
//      if (string[i] == ch) {
//        counted += 1;
//      }
//    }
//    return counted;
//  }
 
//  function countBs(string) {
//    return countChar(string, "B");
//  }
 
//  console.log(countBs("BBC"));
//  // → 2
//  console.log(countChar("kakkerlak", "k"));
//  // → 4
//? 
// function range(start, end, step = start < end ? 1 : -1) {
//   let array = [];
//
//   if (step > 0) {
//     for (let i = start; i <= end; i += step) array.push(i);
//   } else {
//     for (let i = start; i >= end; i += step) array.push(i);
//   }
//
//
//
//   return array;
// }
//
// function sum(arr) {
//   let result = 0;
//   for (let num of arr) {
//     result += num;
//   }
//   return result;
// }
//
//
// console.log(range(1, 5, -1));
// // → [5, 4, 3, 2]

//?
// function arrayToList(arr) {
//   let list = null
//   for (let i = arr.length - 1; i >= 0; i--) {
//     list = {value: arr[i], rest: list};
//   }
//   return list
// }
//
// function listToArray(list) {
//   let array = []
//   for (let node = list; node; node = node.rest) {
//     array.push(node.value)
//   }
//   return array
// }
//
// function prepend(value, list) {
//   return {value: value, rest: list}
// }
//
// function nth(list, element) {
//  if (!list) {
//    return undefined
//  } else if(element === 0) {
//    return list.value
//  } else  {
//    return nth(list.rest, element - 1)
//  }
// }
//
// // function nth(list, element) {
// //   while (list !== null && element > 0) {
// //
// //     list = list.rest
// //     element--
// //   }
// //   return list ? list.value : undefined;
// // }
//
// console.log(listToArray(arrayToList([10,20])))
// console.log(prepend(10, prepend(20, null)));
// // → {value: 10, rest: {value: 20, rest: null}}
// console.log(nth(arrayToList([10, 20, 30]), 2));
// // → 20

//? Глубокое сравнение
// function deepEqual(a, b) {
//   if (a === b) return true
//   if (a == null || typeof a != "object" ||
//       b == null || typeof b != "object") return false;
//  let keysA = Object.keys(a)
//   let keysB = Object.keys(b)
//
//   if (keysA.length !== keysB.length) return false
//
//   for (let key of keysA) {
//     if (!keysA.includes(key) || !deepEqual(a[key], b[key])) return false
//   }
//   return true
// }
// var obj = {here: {is: "an"}, object: 2};
// console.log(deepEqual(obj, obj));
// // → true
// console.log(deepEqual(obj, {here: 1, object: 2}));
// // → false
// console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// // → true

//? Используйте метод reduce в комбинации с concat для свёртки массива массивов в один массив, у которого есть все элементы входных массивов.
// var arrays = [[1, 2, 3], [4, 5], [6]];
// function concatReduce(arr) {
//     return arr.reduce((acc, currentArr) => {
//        return  acc.concat(currentArr)
//     }, [])
// }
//
// console.log(concatReduce(arrays))

//
// function every(arr, check) {
//     for (let element of arr) {
//         if (check(element)) {
//             return false
//         }
//     }
//     return  true
// }

// function some(arr, check) {
//     for (let element of arr) {
//         if (check(element)) {
//             return true
//         }
//     }
//     return false
// }
// console.log(every([NaN, NaN, NaN], isNaN));
// // → true
// console.log(every([NaN, NaN, 4], isNaN));
// // → false
// console.log(some([NaN, 3, 4], isNaN));
// // → true
// console.log(some([2, 3, 4], isNaN));
// // → false

//? Аналог forEach
// function forEach(array, fn) {
//     for (let i = 0; i < array.length; i++) {
//      fn(array[i], i, array)
//     }
// }
// function fn(el, index, array) {
//     console.log(el)
// }

// console.log(forEach([1,2,3,4,5], fn));

//? Аналог map
// function map(array, callback) {
//     let newArr = []
//     for (let i = 0; i < array.length; i++) {
//         newArr.push(callback(array[i], i, array))
//     }
//     return newArr
// }

// function callback(currentValue, index, array) {
//     return currentValue * 2
// }
// console.log(map([1,2,3], callback));

//? Аналог reduce
// function reduce(array, fn, initital) { 
//     const hasInitial = typeof initital !== 'undefined'
//     let prev = hasInitial ? initital : array[0]

//     for (let i = hasInitial ? 0 : 1; i < array.length; i++) {
//         prev = fn(prev, array[i], i, array)
//     }
//     return prev
  
// }

// function callback(acc, currentValue,  index, array) {
//     return acc += currentValue
// }

// console.log(reduce([1,2,3], callback, 0));

//? функция должна перебрать все свойства объекта, преобразовать их мена в  верхн регистр и вернуть в виде массива
// function upperPros(obj) {
//     // const arr = []

//     // for (let key in obj) {
//     //     arr.push(key.toUpperCase())
//     // }
//     // return arr

//     return Object.keys(obj).map(key => key.toUpperCase())
// }

// const obj = {
//     name: 'Valid',
//     lastname: 'MS',
// }
// console.log(upperPros(obj));

//? Функция должна принимать объект и вернуть Proxy для этого объекта
//? Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квардрат
// const obj = createProxy({})
// obj.foo = 2
// console.log(obj.foo);
// function createProxy(obj) {
//     return new Proxy(obj, {
//         set(target, prop, val) {
//             target[prop] = val ** 2
//             return true
//         }
//     })
// }

//? 1.1 Функция принимает массив и фильтрущую функция и должна вернуть true или false
//? Функция должна вернуть true только если fn вернула true для всех элементов массива
//? 1.2 Необходимо выбрасывать исключения в случаях:
//? -array не массив или пустой массив (с текстом "empty array")
//? - fn не является функцией (с текстом fn is not a function)
// console.log(isAllTrue([1,2,3,4,5], n => n < 10)); // true
// console.log(isAllTrue([100,2,3,4,5], n => n < 10)); // false
// function isAllTrue(arr, fn) {
//     if(!Array.isArray(arr) || !arr.length) {
//         return new Error('empty array')
//     }
//     if(typeof fn !== 'function') {
//         return new Error('fn is not a function')
//     }
    
//     for (let i = 0; i < arr.length; i++) {
//        let isTrue = fn(arr[i], i, arr) 
//        if (!isTrue) return false
//     }
//     return true
// }
// console.log(isAllTrue([1,2], 2)); // Err

//? isSome
// console.log(isAllTrue([10,2,30,40,50], n => n < 10)); // true
// console.log(isAllTrue([100,40,30,40,50], n => n < 10)); // false
// function isAllTrue(arr, fn) {
//     if(!Array.isArray(arr) || !arr.length) {
//         return new Error('empty array')
//     }
//     if(typeof fn !== 'function') {
//         return new Error('fn is not a function')
//     }
    
//     for (let i = 0; i < arr.length; i++) {
//        let isTrue = fn(arr[i], i, arr) 
//        if (isTrue) return true
//     }
//     return false
// }

//? Функция принимает заранее неизвестное количество аргументов, первым из которых является функция fn
//? ФУнкция должна поочередно запустить fn для каждого переданного аргумента (кроме самой fn)
//? ФУнкция должна вернуть массив аргументов, для которых fn Выбросила исключение
//? Необходимо выбрасывать исключение fn- не является функцикй ('fn is not a function')
// function returnBadArguments(fn, ...args) {
//     if (typeof fn !== 'function') {
//         return new Error('fn is not a function')
//     }
//     let bad = []
//     for (let el in args) {
//         try {
//             fn(el)
//         } catch {
//             bad.push(el)
//         }
//     }
//     return bad
// }

//? Функция иметт параметр number (по умолчанию 0)
//? Функция должна вернуть объект, у которого должгл быть нсколько методов:
// -sum - складывает number с переданными аргументами
// -dif - вычитает
// - div - делит. Результат делится на следующий аргумент (если передан) и т.д.
// - mul умножает. Результат умножается на следующий аргумент (если передан) и т.д.
//? Количество передаваемых в методоы неизвествено
//? Необходимо выбрасывать исключение number не число, div является 0
// function calculator(number = 0) {
//     if (!Number.isFinite(number)) {
//         throw new Error ('number is not a number')
//     }

//     return {
//         sum(...args) {
//            let result = number
//            for (const arg of args) {
//             result += arg
//            }
//            return result
//         },
//         dif(...args) {
//             let result = number
//             for (const arg of args) {
//              result -= arg
//             }
//             return result
//         },
//         div(...args) {
//             let result = number
//            for (const arg of args) {
//             if (arg === 0) {
//                 throw new Error('division by 0')
//             }
//             result /= arg
//            }
//            return result
//         },
//         mul(...args) {
//             let result = number
//             for (const arg of args) {
//              result *= arg
//             }
//             return result
//         }
//     }
// }

// console.log(calculator(6).div(2));

//? Функция должна создать элемент с тегом div
//? В созданный элемент необходимо поместить текст переданный в параметре text
// function createDivWithText(text) {
//     const div = document.createElement('div')
//     div.textContent = text
//     return div
// }
// console.log(createDivWithText('hi'));

//? Функция должна вставлять элемент, переданный в параметре what в начало элемента, переданного в параметре where
// console.log(prepend(document.querySelector('#one'), document.querySelector('#two')));

// function prepend(what, where) {
//     where.insertBefore(what, where.firstElementChild)
// }

//? Функция должна перебрать все дочерние элементы узла, переданного в параметре where
//? Функция должна вернуть массив, состоящий из тех дочерних элементов следующим соседом которым является элемент с тегом p
// console.log(findAllPSibling(document.body));
// function findAllPSibling(where) {
//     const sibl = []

//     for (let el of where.children) {
//         if(el.nextElementSibling && el.nextElementSibling.tagName === 'P') {
//            sibl.push(el)
//         }
//     }
//     return sibl
// }

//? Функция представленная ниже, перебирает все дочерние узлы типа "элемент" внутри узла переданного в параметре where и возвращает массив из текстового содержимого найденых элементов
//? Но похоже, что в код функции закралась ошибка и она рабботает не так как описана
// function findError(where) {
//     const result = []
//     for (const child of where.children) {
//         result.push(child.textContent)
//     }
//     return result
// }
// console.log(findError(document.body));

//? Функция должна перебрать все дочерние узлы элемента переданного в параметре where и удалить из него все текстовые узлы
//? Решать без рекурсии
//? дерево должно иметь вид без привет и Loftschool
// function deleteTextNodes(where) {
// // for (let el of where.children)
// //     el.textContent = ''
// // }
// for (let i = where.childNodes.length; i >= 0; i--) {
//     const el = where.childNodes[i]

//     if (el.nodeType === Node.TEXT_NODE) {
//         where.removeChild(el)
//     }
// }
// }
// deleteTextNodes(document.body)

//? Тоже самое только с рекурсией
// function deleteTextNodes(where) {
//     for (let i = where.childNodes.length; i >= 0; i--) {
//     const el = where.childNodes[i]

//     if (el.nodeType === Element.TEXT_NODE) {
//         where.removeChild(el)
//     } else if (el.nodeType === Element.ELEMENT_NODE) {
//         deleteTextNodes(el)
//     }
// }
// }

//? Необходимо собрать статистику по всем узлам внутри элемента переданного в параметре root и вернуть ее в виде объектов
//? Статистика должна содержать:
// Количестве текстовых узлов
// кол-во элементов каждого класса
// кол-во элементов каждого тега
// Для работы с классами использовать classList

// function collectDomStat(root) {
// const stat = {
//     tags: {},
//     classes: {},
//     texts: 0,
// }
// function scan(root) {
//     for (const child of root.childNodes) {
//         if (child.nodeName === '#text') {
//             stat.texts += 1
//         } else if (child.nodeType === Node.ELEMENT_NODE) {
//             if (child.tagName in stat.tags) {
//                 stat.tags[child.tagName]++
//             } else {
//                 stat.tags[child.tagName] = 1
//             }

//             for (const className of child.classList) {
//                 if (className in stat.classes) {
//                     stat.classes[className]++
//                 } else {
//                     stat.classes[className] = 1
//                 }
//             }
//             scan(child)
//         }

//     }
// }
// scan(root)
// return stat
// }

// console.log(collectDomStat(document.body));
// {
//     tags: {DIV: 1, B: 2},
//     classes: {some-class-1: 2, some-class-2: 1},
//     textst: 3
// }

//? Функция должна возвращать промис, котороый должен быть завершен через указанное количество секунд
// function delayPromise(seconds) {
//     return new Promise((resolve) => setTimeout(() => resolve, seconds * 1000))
// }

// console.log(delayPromise(3));

//? Функция должна вернуть Promise, котороый должен быть разрешен с массивом городов в качестве значений
 //? Элементы полученного массива должны быть отсортрованиы по имение города
//  function loadAndSortTowns() {
//     return fetch('https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json')
//     .then(res => res.json())
//     .then(towns => towns.sort((a,b) => a.name.localeCompare(b.name)))
//  }
//  loadAndSortTowns().then(towns => console.log(towns))

//? Список городов
const loadingBlock = document.querySelector('#loading-block')
const loadingFailed = document.querySelector('#loading-failed')
const retryBtn = document.querySelector('#retry-button')
const filterInput = document.querySelector('#filter-input')
const filterResult = document.querySelector('#filter-result')
const filterBlock = document.querySelector('#filter-block')

loadingFailed.classList.add('hidden')
filterBlock.classList.add('hidden')

 function loadAndSortTowns() {
    return fetch('https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json')
    .then(res => res.json())
    .then(towns => towns.sort((a,b) => a.name.localeCompare(b.name)))
 }

 function loadTowns() {
  return loadAndSortTowns()
 }

let towns = []

 async function tryLoadTowns() {
   try {
      towns = await loadTowns()
      loadingBlock.classList.add('hidden')
      loadingFailed.classList.add('hidden')
      filterBlock.classList.remove('hidden')
   } catch(e) {
      loadingBlock.classList.add('hidden')
      loadingFailed.classList.remove('hidden')
   }
 }

function isMatching(chars, town) {
   return town.toLowerCase().includes(chars.toLowerCase())
}

function filterTowns(chars) {
   filterResult.textContent = ''

   const fragment = document.createDocumentFragment()

   for (let town of towns) {
      if (chars && isMatching(chars, town.name)) {
         const div = document.createElement('div')
         div.textContent = town.name
         fragment.append(div)
      }
   }
   filterResult.append(fragment)
}

filterInput.addEventListener('input', function() {
   filterTowns(this.value);
})

retryBtn.addEventListener('click', function () {
   tryLoadTowns()
})


tryLoadTowns();
