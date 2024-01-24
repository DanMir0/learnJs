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
const numbers = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
function findMaxSumSubarray(arr) {
    if (arr.length === 0) {
        return 0
    }

    let currentSum = arr[0];
    let maxSum = arr[0];

    for (let i = 1; i < arr.length; i++) {
        currentSum = Math.max(arr[i], currentSum + arr[i]);
        maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum
}
const maxSum = findMaxSumSubarray(numbers);
console.log(maxSum); // Ожидаемый результат: 6 (подмассив: [4, -1, 2, 1])