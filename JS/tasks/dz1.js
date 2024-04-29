//? 1 Функция должна добавлять обработчик fn события eventName к событию target
// пример: addListener('click', documentQuerySelector('a'), () => console.log(...)// - кол кликов) 
// addListener('click', document.querySelector('a'), () => console.log('click'))

// function addListener(evenName, target, fn) {
//     target.addEventListener(evenName, fn)
// }

//? 2 Функция должна удалять у элемента target обработчик события eventName
// пример: removeListener('click', document.querySelector('a'), someHandler)
// removeListener('click', document.querySelector('a'), someHandler)

// function removeListener(evenName, target, fn) {
//     target.removeEventListener(evenName, fn)
// }

//? 3 Функция должна добавить к элементу taget такой обработчик на события eventName, чтобы он отменял действия по умолчанию
// function skipDefault(evenName, taget) {
//     taget.addEventListener(evenName, (e) => {
//         e.preventDefault();
//     })
// }

// skipDefault('click', document.querySelector('a'))

//? 4 Функция должна эмулировать событие click для элемента target
// Пример emulateClick(document.querySelector('a')) // должно быть сэмулировано событие

// function emulateClick(taget) {
//     const event = new Event('click')
//     taget.dispatchEvent(event)
// }

//? 5 Функиця должна добавлять такой обработчик кликов к элементу target,
//? который реагирует (вызывает fn) только на клики по элеентам button внутри target

// function delegate(taget, fn) {
//     taget.addEventListener('click', (e) => {
//         if (e.target.tagName === 'BUTTON') {
//             fn()
//         }
//     })
// }
// delegate(document.body, () => console.log('button'))

//? 6 Функция должна добавить такой обработчик кликов к элементу target,
//? который сработает только один раз и удалится (перестанет срабатывать для последующих кликов по элементу)
// пример once(document.querySelector('button'), () => console.log('обработчик'))
// once(document.querySelector('button'), () => console.log('обработчик'))

// function once(taget, fn) {
//     let event = false

//         taget.addEventListener('click', (e) => {
//             if (!event) {
//                 fn()
//                 event = true
//             }
//         })

// }

//? drop and drog
const btn = document.querySelector('button')

function random(from, to) {
    return parseInt(from + Math.random() * to -from)
} 

let currentDrag;
let startX = 0;
let startY = 0;

function createDiv() {
    const div = document.createElement('div')
    const minSize = 20;
    const maxSize = 200;
    const maxColor = 0xffffff;

    div.className = 'draggable-div'
    div.style.background = '#' + random(0, maxColor).toString(16)
    div.style.top = random(0, window.innerHeight) + 'px';
    div.style.left = random(0, window.innerWidth) + 'px';
    div.style.width = random(minSize, maxSize) + 'px';
    div.style.height = random(minSize, maxSize) + 'px';

    div.addEventListener('mousedown', (e) => {
        currentDrag = div;
        startX = e.offsetX;
        startY = e.offsetY;
    })
    div.addEventListener('mouseup', () => currentDrag = false)

    return div
}

btn.addEventListener('click', () => {
  const div = createDiv()
  document.body.appendChild(div)
})

document.addEventListener('mousemove', (e) => {
    if(currentDrag) {
        currentDrag.style.top = e.clientY - startY + 'px'
        currentDrag.style.left = e.clientX - startX + 'px'
    }
})