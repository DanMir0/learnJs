//? Создать редактор cookie с возможностью фильтрации
// На странице должна быть таблица со списком имеющихся cookie. Таблица должна иметь следующие столбцы
// имя
// значение
// удалить

// На странице должна быть форма для добавления cookieю Форма должна содеражить поля
// имя
// значение
// добавить

// Если добавляется cookie с именем уже существующей cookie, то ее значение в браузере и таблицы должно обновиться

// На странице должно быть текстовое поле для фильтрации куки
// В таблице должны быть только те куки, в имени или значении которых, хотя бы частично, есть введенное значение
// Если в поле фильтра пусто, то должны выводиться все куки
// Если добавляемая куки не соответствует фильтру, то она должна быть добавлена только в браузер, но не в таблицу
// Если добавляемая куки, с именем уже существующей куки и ее новое значение не соответствует фильтру, то ее значение должно быть обноблено в браузере, а из таблицы куки должнабыть удалена

const addBtn = document.querySelector('#addBtn')
const filterInput = document.querySelector('#filterInput')
const listTable = document.querySelector('.table tbody')
const nameInput = document.querySelector('#nameCookie')
const valueInput = document.querySelector('#valueCookie')

const cookiesMap = getCookies()
let filterValue = ''

updateTable()

function getCookies() {
    return document.cookie.split(';')
    .filter(Boolean)
    .map((cookie) => cookie.match(/^([^=]+)=(.*)/))
    .reduce((obj, [name, value]) => {
        obj.set(name, value)

        return obj
    }, new Map())
}

filterInput.addEventListener('input', function() {
    filterValue = this.value
    updateTable()
})

addBtn.addEventListener('click', (e) => {
    e.preventDefault()
    const name = encodeURIComponent(nameInput.value.trim())
    const value = encodeURIComponent(valueInput.value.trim())

    if (!name) {
        return
    }

    document.cookie = `${name}=${value}`
    cookiesMap.set(name, value)

    updateTable()
})

listTable.addEventListener('click', (e) => {
    const {role, cookieName} = e.target.dataset

    if (role === 'remove-cookies') {
        cookiesMap.delete(cookieName)
        document.cookie = `${cookieName}=deleted; max-age=0`
        console.log('delte');
        updateTable()
    }
})

function updateTable() {
    const fragment = document.createDocumentFragment()
    let total = 0;

    listTable.innerHTML = ''

    for (const [name, value] of cookiesMap) {
        if (filterValue && !name.toLowerCase().includes(filterValue.toLowerCase()) && !value.toLowerCase().includes(filterValue.toLowerCase())) {
            continue
        }

        total++;

        const tr = document.createElement('tr')
        const nameTD = document.createElement('td')
        const valueTD = document.createElement('td')
        const removeTD = document.createElement('td')
        const removeButton = document.createElement('button')

        removeButton.dataset.role = 'remove-cookies'
        removeButton.dataset.cookieName = name
        removeButton.textContent = 'Удалить'
        nameTD.textContent = name
        valueTD.textContent = value
        valueTD.classList.add('value')
        tr.append(nameTD, valueTD, removeTD)
        removeTD.append(removeButton)

        fragment.append(tr)
    }

    if (total) {
        listTable.parentNode.classList.remove('hidden')
        listTable.append(fragment)
    } else {
        listTable.parentNode.classList.add('hidden')
    }
}