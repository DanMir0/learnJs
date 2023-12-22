//? Класс Clock написан в функциональном стиле. Перепишите его, используя современный синтаксис классов.
// function Clock({ template }) {

//     let timer;

//     function render() {
//       let date = new Date();

//       let hours = date.getHours();
//       if (hours < 10) hours = '0' + hours;

//       let mins = date.getMinutes();
//       if (mins < 10) mins = '0' + mins;

//       let secs = date.getSeconds();
//       if (secs < 10) secs = '0' + secs;

//       let output = template
//         .replace('h', hours)
//         .replace('m', mins)
//         .replace('s', secs);

//       console.log(output);
//     }

//     this.stop = function() {
//       clearInterval(timer);
//     };

//     this.start = function() {
//       render();
//       timer = setInterval(render, 1000);
//     };

//   }

//   let clock = new Clock({template: 'h:m:s'});
//clock.start();

//   class Clock {
//     constructor({ template }) {
//         this.template = template
//     }

//     render() {
//         let date = new Date();

//         let hours = date.getHours();
//         if (hours < 10) hours = '0' + hours;

//         let mins = date.getMinutes();
//         if (mins < 10) mins = '0' + mins;

//         let secs = date.getSeconds();
//         if (secs < 10) secs = '0' + secs;

//         let output = this.template
//           .replace('h', hours)
//           .replace('m', mins)
//           .replace('s', secs);

//         console.log(output);
//       }

//     stop = function() {
//         clearInterval(this.timer);
//       };

//     start = function() {
//         this.render();
//         this.timer = setInterval(() => this.render(), 1000);
//       };

//   }
//   let clock = new Clock({template: 'h:m:s'});

//   console.log(clock.start());

//? В коде ниже класс Rabbit наследует Animal. К сожалению, объект класса Rabbit не создаётся. Что не так? Исправьте ошибку.
// class Animal {

//     constructor(name) {
//       this.name = name;
//     }

//   }

//   class Rabbit extends Animal {
//     constructor(name) {
//       super(name)
//       this.created = Date.now();
//     }
//   }

//   let rabbit = new Rabbit("Белый кролик"); // Error: this is not defined
//   alert(rabbit.name);

//? У нас есть класс Clock. Сейчас он выводит время каждую секунду
//?Создайте новый класс ExtendedClock, который будет наследоваться от Clock и добавьте параметр precision – количество миллисекунд между «тиками». Установите значение в 1000 (1 секунда) по умолчанию.
//? Сохраните ваш код в файл extended-clock.js
//? Не изменяйте класс clock.js. Расширьте его.
// class Clock {
//   constructor({ template }) {
//     this.template = template;
//   }

//   render() {
//     let date = new Date();

//     let hours = date.getHours();
//     if (hours < 10) hours = "0" + hours;

//     let mins = date.getMinutes();
//     if (mins < 10) mins = "0" + mins;

//     let secs = date.getSeconds();
//     if (secs < 10) secs = "0" + secs;

//     let output = this.template
//       .replace("h", hours)
//       .replace("m", mins)
//       .replace("s", secs);

//     console.log(output);
//   }

//   stop() {
//     clearInterval(this.timer);
//   }

//   start() {
//     this.render();
//     this.timer = setInterval(() => this.render(), 1000);
//   }
// }

//? Создайте класс FormatError, который наследует от встроенного класса SyntaxError.
//? Класс должен поддерживать свойства message, name и stack.
//? Пример использования:
// class FormatError extends SyntaxError {
//     constructor(message) {
//         super(message);
//         this.name = 'FormatError'
//     }
// }

// let err = new FormatError("ошибка форматирования");

// alert( err.message ); // ошибка форматирования
// alert( err.name ); // FormatError
// alert( err.stack ); // stack

// alert( err instanceof FormatError ); // true
// alert( err instanceof SyntaxError ); // true (потому что наследует от SyntaxError)

