//? С помощью свойства __proto__ задайте прототипы так, чтобы поиск любого свойства выполнялся по следующему пути: pockets → bed → table → head. Например, pockets.pen должно возвращать значение 3 (найденное в table), а bed.glasses – значение 1 (найденное в head).
// let head = {
//     glasses: 1
//   };
  
//   let table = {
//     __proto__: head,
//     pen: 3
//   };
  
//   let bed = {
//     __proto__: table,
//     sheet: 1,
//     pillow: 2
//   };
  
//   let pockets = {
//     __proto__: bed,
//     money: 2000
//   };

//   console.log(pockets.pen); // 3
//   console.log(bed.glasses); // 1

//? Когда мы кормим одного хомяка, второй тоже наедается. Почему? Как это исправить?
// let hamster = {
//     stomach: [],
  
//     eat(food) {
//       this.stomach.push(food);
//     }
//   };
  
//   let speedy = {
//     __proto__: hamster,
//     stomach: [],
//   };
  
//   let lazy = {
//     __proto__: hamster,
//     stomach: [],
//   };
  
//   // Этот хомяк нашёл еду
//   speedy.eat("apple");
//   alert( speedy.stomach ); // apple
  
//   alert( lazy.stomach ); // apple => [];


//? Добавьте всем функциям в прототип метод defer(ms), который вызывает функции через ms миллисекунд.
// function f() {
//     alert("Hello!");
//   }

//   Function.prototype.defer = function(ms) {
//     setTimeout(this, ms)
//   }

//   f.defer(1000); // выведет "Hello!" через 1 секунду

//? Добавьте всем функциям в прототип метод defer(ms), который возвращает обёртку, откладывающую вызов функции на ms миллисекунд.
// function f(a, b) {
//     alert( a + b );
//   }
  
//   Function.prototype.defer = function defer(ms) {
//     let fn = this;
//     return function(...args) {
//         setTimeout(() => fn.apply(this, args), ms)
//     }
//   }

//   f.defer(1000)(1, 2); // выведет 3 через 1 секунду.

//? Добавьте ему метод dictionary.toString(), который должен возвращать список ключей, разделённых запятой. Ваш toString не должен выводиться при итерации объекта с помощью цикла for..in.

let dictionary = Object.create(null, {
    toString: {
        value() {
            return Object.keys(this).join();
        }
    }
});

// ваш код, который добавляет метод dictionary.toString


// добавляем немного данных
dictionary.apple = "Apple";
dictionary.__proto__ = "test"; // здесь __proto__ -- это обычный ключ

// только apple и __proto__ выведены в цикле
for(let key in dictionary) {
  alert(key); // "apple", затем "__proto__"
}

// ваш метод toString в действии
alert(dictionary.toString()); // "apple,__proto__"