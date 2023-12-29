// function User(name) {
//     let userName = name;

//     return {
//         getName() {
//             return userName;
//         },
//         setName(name) {
//             userName = name;
//         }
//     }
// }

//! Реализация приватности 
//? Теперь Нельзя изменить метод!
// function User(name) {
//     let userName = name;

//     return Object.freeze({
//         getName() {
//             return userName;
//         },
//         setName(name) {
//             userName = name;
//         }
//     });
// }

//? Пример 2
function User(name) {
    const symbol = Symbol();

    return {
        [symbol]: name,
        getName() {
            return this[symbol];
        },
        setName(name) {
            this[symbol] = name;
        }
    };
}