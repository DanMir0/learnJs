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

//! ES5
//? Создать наследника от Planet, который будет называться PlanetWithSatellite и будет
//? принимать, кроме name, название спутника (satelliteName). Переопределите метод
//? getName для PlanetWithSatellite так, чтобы он возвращал ту же самую строчку +
//? дополнительный текст 'The satellite is' + satelliteName.

// function Planet(name) {
//     this.name = name;
//     this.getName = function () {
//         return 'Planet name is ' + this.name;
//     }
// }

// function PlanetWithSatellite(name, satelliteName) {
//     Planet.call(this, satelliteName);

//     this.getName = function() {
//         return `Planet name is ${this.name}. The satellite is ${satelliteName}`;
//     }
//     this.satelliteName = satelliteName;
// }

// PlanetWithSatellite.prototype = Object.create(Planet.prototype)
// PlanetWithSatellite.prototype.cunstructor = Planet;

// let earth = new PlanetWithSatellite('earth', 'moon');
// console.log(earth.getName()); // 'Planet name is earth. The satellite is moon’
// let mars = new Planet('mars');
// console.log(mars.getName());

//? Создайте класс “Здание” (пусть у него будет имя, количество этажей, метод “получить количество этажей” и метод “установить количество этажей”).
//? Создайте наследников этого класса:
//? классы “Жилой дом” и “Торговый центр”. Используйте функциональное наследование 
//? У жилого дома появится свойство “количество квартир на этаже”, а метод “получить количество этажей” должен вернуть объект вида {этажи: 5, всегоКвартир: 5 * количествоКвартир}
//? У торгового центра появится свойство “количество магазинов на этаже”, а метод “получить количество этажей” должен вернуть объект вида {этажи: 3, всегоМагазинов: 3 * количествоМагазинов}
//? От каждого класса создать экземпляр (дом, торговый центр)

// function Building(name, countFloors) {
//     this.name = name;
//     this.countFloors = countFloors;

//     this.getCountFloors = function() {
//         return `Этажей: ${this.countFloors}`
//     }

//     this.setCountFloors = function(count) {
//         this.countFloors = count;
//     }
// }

// function LivingHouse(name, countFloors, countApartmensOfFloor) {
//     Building.apply(this, arguments);

//     this.countApartmensOfFloor = countApartmensOfFloor;
//     this.getCountFloors = function() {
//         return {
//             countFloors: this.countFloors,
//             allApartmens: this.countFloors * this.countApartmensOfFloor
//         }
//     }
// }

// let livingHouse = new LivingHouse('first', 3, 5);
// console.log(livingHouse.getCountFloors());
// console.log(livingHouse.name);
// livingHouse.setCountFloors(10);
// console.log(livingHouse.getCountFloors());

// function Mall(...arguments) {
//     Building.apply(this, arguments);

//     this.numberStoresOnFloor = arguments[2];
//     this.getCountFloors = function() {
//         return {
//             'Этажи': this.countFloors,
//             'Всего магазинов': this.countFloors * this.numberStoresOnFloor,
//         }
//     }
// }

// let secondMall = new Mall('second', 3, 10);
// console.log(secondMall.getCountFloors());

//? Создать класс “Мебель” с базовыми свойствами “имя”, “цена” и методом “получить информацию” (метод должен вывести имя и цену). Метод должен быть объявлен с помощью прототипов (Func.prototype...). 
//? Создайте наследника класса “Мебель” под названием “ОфиснаяМебель”. Придумайте ему несколько свойству, которые будут характерны только для этого класса. Метод “получить информацию” должен учитывать и добавленное вами новое свойство.
//? Задача на переопределение метода у экземпляров класса.

// function Furniture(name, price) {
//     this.name = name;
//     this.price = price;
// }

// Furniture.prototype.getInfo = function() {
//     return `Наименование: ${this.name}, Цена: ${this.price}`;
// }

// let closet = new Furniture('шкаф', 250);
// console.log(closet.getInfo());

// function OfficeFurniture(name, price, countFurniture) {
//     Furniture.apply(this, arguments)
//     this.countFurniture = countFurniture;
// }

// OfficeFurniture.prototype = Object.create(Furniture.prototype);
// OfficeFurniture.prototype.constructor = OfficeFurniture;

// OfficeFurniture.prototype.getInfo = function() {
//     return `Наименование: ${this.name}, Цена: ${this.price}, Всего ${this.name}: ${this.countFurniture}`
// };

// let closetOffice = new OfficeFurniture('шкаф', 200, 10);
// console.log(closetOffice.getInfo());

//? Создать класс “Пользователь” с базовыми свойствами “имя”, “дата регистрации” и методом “получить информацию” (метод должен вывести имя и дату регистрации). Метод должен быть объявлен с помощью прототипов (Func.prototype...) Создать два наследника класса “Пользователь”: класс “Админ” и класс “Гость”.
//? У класса “Админ” должно быть дополнительное свойство “суперАдмин” (может быть
//? true/false, должно быть скрытым). Свойства определяются в момент вызова
//? конструктора.
//? У класса “Гость” должно быть свойство “срокДействия” (validDate, например), содержащее дату (например, одну неделю от момента регистрации).
//? У классов-наследников метод “получить информацию” должен так же содержать информацию о дополнительных свойствах (“суперАдмин” и “срокДействия”)
    
// function User(name, dateRegistration) {
//     this.name = name;
//     this.dateRegistration = dateRegistration;
// }
// User.prototype.getInfo = function() {
//     return {
//         'Имя': this.name,
//         'Дата регистрации': this.dateRegistration,
//     }
// }

// function Admin( name, dateRegistration, superAdmin) {
//     User.apply(this, arguments);

//     var _superAdmin = superAdmin;

//     this.getSuperAdmin = function() {
//         return _superAdmin;
//     }

//     this.setSuperAdmin = function(value) {
//         _superAdmin = value;
//     };
// }

// Admin.prototype = Object.create(User.prototype);
// Admin.prototype.constructor = Admin;
// Admin.prototype.getInfo = function() {
//     return {
//         'Имя': this.name,
//         'Дата регистрации': this.dateRegistration,
//         'Супер админ': this.getSuperAdmin(),
//     }
// }

// let admin = new Admin('lso', new Date("2023.12.27").toDateString(), false)
// console.log(admin.getInfo());

// function Guest(name, dateRegistration) {
//     User.apply(this, arguments)

//     let newDate = new Date(dateRegistration)
//     this.validDate = new Date(newDate.setDate(newDate.getDate() - 7));
// }

// Guest.prototype = Object.create(User.prototype);
// Guest.prototype.constructor = Guest;

// Guest.prototype.getInfo = function() {
//     return {
//         'Имя': this.name,
//         'Дата регистрации': this.dateRegistration,
//         'Valid date': this.validDate.toString().slice(0, 10),
//     }
// }

// let guest = new Guest('assa', new Date())
// console.log(guest.getInfo());

//! ES 6 
//? Реализовать конструктор в ES6 синтаксисе (также используйте аргументы по умолчанию):
// class Component {
//     constructor(tagName) {
//         this.tagName = tagName || 'div';
//         this.node = document.createElement(tagName)
//     }
// }
// const comp = new Component();
// console.log(comp.node);

//? Реализовать конструктор и методы в ES6 синтаксисе:
// class Component {
//     constructor(tagName) {
//         this.tagName = tagName || 'div';
//         this.node = document.createElement(tagName);
//     }

//     setText(text) {
//         this.node.textContent = text;
//     }
// }
// const comp = new Component('h1');
// comp.setText('Very good!');
// console.log(comp.node);

//? Создать класс калькулятора который будет принимать стартовое значение и у него будут методы сложить, вычесть, умножить , разделить. Также у него должны быть геттер и сеттер для получения и установки текущего числа с которым производятся вычисления.
class Calculator {
    constructor(value) {
        this._value = value;
    }

    add(num) {
        return this.value += num;
    }

    subtract(num) {
        return this.value -= num;
    }

    mult(num) {
        return this.value *= num;
    }

    divide(num) {
        return this.value /= num;
    }

    get value() {
        return this._value
    }

    set value(val) {
        this._value = val
    }
}

let calc = new Calculator(2);
console.log(calc.add(2));
console.log(calc.subtract(2));
console.log(calc.mult(3));
console.log(calc.divide(2));
console.log(calc.value);
console.log(calc.value = 10);
