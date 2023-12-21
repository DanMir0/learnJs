const users = [
  {
    _id: "5d220b10e8265cc978e2586b",
    isActive: true,
    balance: 2853.33,
    age: 20,
    name: "Buckner Osborne",
    gender: "male",
    company: "EMPIRICA",
    email: "bucknerosborne@empirica.com",
    phone: "+1 (850) 411-2997",
    registered: "2018-08-13T04:28:45 -03:00",
    nestedField: { total: 300 },
  },
  {
    _id: "5d220b10144ef972f6c2b332",
    isActive: true,
    balance: 1464.63,
    age: 38,
    name: "Rosalie Smith",
    gender: "female",
    company: "KATAKANA",
    email: "rosaliesmith@katakana.com",
    phone: "+1 (943) 463-2496",
    registered: "2016-12-09T05:15:34 -02:00",
    nestedField: { total: 400 },
  },
  {
    _id: "5d220b1083a0494655cdecf6",
    isActive: false,
    balance: 2823.39,
    age: 40,
    name: "Estrada Davenport",
    gender: "male",
    company: "EBIDCO",
    email: "estradadavenport@ebidco.com",
    phone: "+1 (890) 461-2088",
    registered: "2016-03-04T03:36:38 -02:00",
    nestedField: { total: 200 },
  },
  {
    _id: "5d220b10144ef972f6c2b332",
    isActive: true,
    balance: 2464.63,
    age: 38,
    name: "Rossadasdaie Smith",
    gender: "female",
    company: "KATAKANA",
    email: "rosaliesmith@katakana.com",
    phone: "+1 (943) 463-2496",
    registered: "2016-12-09T05:15:34 -02:00",
    nestedField: { total: 400 },
  },
];

const tableSchema = {
  index: "#",
  name: "Name",
  email: "Email",
  balance: "Balance",
};

const sortBtn = document.querySelector('.sort-btn');
const arrowAsc = document.querySelector('.asc');
const arrowDesc = document.querySelector('.desc');
let sort = 'asc';
let sortUsers = users.slice().sort((prevUser, nextUser) => {
    return nextUser.balance - prevUser.balance;
})

function generateThead(tableSchema) {
    const thead = document.createElement('thead');
    const tr = generateTr(tableSchema, 'th');
    thead.appendChild(tr);
    return thead
};

function generateTr(tableSchema, tagName = 'td') {
    const tr = document.createElement('tr');
    Object.values(tableSchema).forEach(val => {
        const td = document.createElement(tagName);
        td.textContent = val;
        tr.appendChild(td);
    })

    return tr;
};

function generateTbody(tableSchema, items) {
    const tbody = document.createElement('tbody');
    items.forEach((item, index) => {
        item.index = index + 1;
        const itemShema = generateItemsSchema(tableSchema, item);
        const tr = generateTr(itemShema, 'td');
        tbody.appendChild(tr);
    })
    return tbody
};

function generateItemsSchema(tableSchema, item) {
    const itemShema = {};
    Object.keys(tableSchema).forEach(key => {
        itemShema[key] = item[key];
    });

    return itemShema;
};

function generateTableTemplate() {
    const table = document.createElement('table');
    table.classList.add('table');
    return table;
};

function generateTotalBalance(tableSchema, items) {
    const total = items.reduce((acc, item) => {
       return acc + parseFloat(item.balance)
    }, 0);
    const tr = document.createElement('tr');
    const td = document.createElement('td');
    const columnCounts = Object.keys(tableSchema).length;

    td.insertAdjacentHTML('beforeend', `Total balance: <b>${total}</b>`);
    td.setAttribute('colspan', columnCounts);
    td.setAttribute('align', 'right');

    tr.appendChild(td);

    return tr;
}

function initTable(tableSchema, items) {
    const container = document.querySelector('.table-container');

    if (container.children.length > 0) {
        while (container.lastElementChild) {
            container.lastElementChild.remove();
        }
    }
    

    const table = generateTableTemplate();
    const header = generateThead(tableSchema);
    const body = generateTbody(tableSchema, items);
    const total = generateTotalBalance(tableSchema, items);

    table.appendChild(header);
    table.appendChild(body);

    table.appendChild(total);

    container.appendChild(table);
};

function sortUsersFromBalance(sort) {
    let ascSort = users.slice().sort((prevUser, nextUser) => {
        return prevUser.balance - nextUser.balance;
    })

    let descSort = users.slice().sort((prevUser, nextUser) => {
        return nextUser.balance - prevUser.balance;
    })

    if (sort === 'asc') {
        return ascSort;
    } else {
        return descSort;
    }
}

sortBtn.addEventListener('click', (e) => {
    let sortUsers = [];
  if (sort === 'asc') {
    arrowAsc.classList.remove('d-none')
    arrowDesc.classList.add('d-none');
    sort = 'desc';
  } else {
    arrowDesc.classList.remove('d-none')
    arrowAsc.classList.add('d-none');
   sort = 'asc';
  }
  
  sortUsers = sortUsersFromBalance(sort);
  
  initTable(tableSchema, sortUsers);
  
})

initTable(tableSchema, sortUsers);