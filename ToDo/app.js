const tasks = [
  {
    _id: '5d2ca9e2e03d40b326596aa7',
    completed: true,
    body:
      'Occaecat non ea quis occaecat ad culpa amet deserunt incididunt elit fugiat pariatur. Exercitation commodo culpa in veniam proident laboris in. Excepteur cupidatat eiusmod dolor consectetur exercitation nulla aliqua veniam fugiat irure mollit. Eu dolor dolor excepteur pariatur aute do do ut pariatur consequat reprehenderit deserunt.\r\n',
    title: 'Eu ea incididunt sunt consectetur fugiat non.',
  },
  {
    _id: '5d2ca9e29c8a94095c1288e0',
    completed: false,
    body:
      'Aliquip cupidatat ex adipisicing veniam do tempor. Lorem nulla adipisicing et esse cupidatat qui deserunt in fugiat duis est qui. Est adipisicing ipsum qui cupidatat exercitation. Cupidatat aliqua deserunt id deserunt excepteur nostrud culpa eu voluptate excepteur. Cillum officia proident anim aliquip. Dolore veniam qui reprehenderit voluptate non id anim.\r\n',
    title:
      'Deserunt laborum id consectetur pariatur veniam occaecat occaecat tempor voluptate pariatur nulla reprehenderit ipsum.',
  },
  {
    _id: '5d2ca9e2e03d40b3232496aa7',
    completed: true,
    body:
      'Occaecat non ea quis occaecat ad culpa amet deserunt incididunt elit fugiat pariatur. Exercitation commodo culpa in veniam proident laboris in. Excepteur cupidatat eiusmod dolor consectetur exercitation nulla aliqua veniam fugiat irure mollit. Eu dolor dolor excepteur pariatur aute do do ut pariatur consequat reprehenderit deserunt.\r\n',
    title: 'Eu ea incididunt sunt consectetur fugiat non.',
  },
  {
    _id: '5d2ca9e29c8a94095564788e0',
    completed: false,
    body:
      'Aliquip cupidatat ex adipisicing veniam do tempor. Lorem nulla adipisicing et esse cupidatat qui deserunt in fugiat duis est qui. Est adipisicing ipsum qui cupidatat exercitation. Cupidatat aliqua deserunt id deserunt excepteur nostrud culpa eu voluptate excepteur. Cillum officia proident anim aliquip. Dolore veniam qui reprehenderit voluptate non id anim.\r\n',
    title:
      'Deserunt laborum id consectetur pariatur veniam occaecat occaecat tempor voluptate pariatur nulla reprehenderit ipsum.',
  },
];

(function(arrOfTasks) {
  const objOfTasks = arrOfTasks.reduce((acc, task) => {
    acc[task._id] = task;
    return acc;
  }, {})

  const themes = {
    default: {
      '--base-text-color': '#212529',
      '--header-bg': '#007bff',
      '--header-text-color': '#fff',
      '--default-btn-bg': '#007bff',
      '--default-btn-text-color': '#fff',
      '--default-btn-hover-bg': '#0069d9',
      '--default-btn-border-color': '#0069d9',
      '--danger-btn-bg': '#dc3545',
      '--danger-btn-text-color': '#fff',
      '--danger-btn-hover-bg': '#bd2130',
      '--danger-btn-border-color': '#dc3545',
      '--input-border-color': '#ced4da',
      '--input-bg-color': '#fff',
      '--input-text-color': '#495057',
      '--input-focus-bg-color': '#fff',
      '--input-focus-text-color': '#495057',
      '--input-focus-border-color': '#80bdff',
      '--input-focus-box-shadow': '0 0 0 0.2rem rgba(0, 123, 255, 0.25)',
    },
    dark: {
      '--base-text-color': '#212529',
      '--header-bg': '#343a40',
      '--header-text-color': '#fff',
      '--default-btn-bg': '#58616b',
      '--default-btn-text-color': '#fff',
      '--default-btn-hover-bg': '#292d31',
      '--default-btn-border-color': '#343a40',
      '--default-btn-focus-box-shadow':
        '0 0 0 0.2rem rgba(141, 143, 146, 0.25)',
      '--danger-btn-bg': '#b52d3a',
      '--danger-btn-text-color': '#fff',
      '--danger-btn-hover-bg': '#88222c',
      '--danger-btn-border-color': '#88222c',
      '--input-border-color': '#ced4da',
      '--input-bg-color': '#fff',
      '--input-text-color': '#495057',
      '--input-focus-bg-color': '#fff',
      '--input-focus-text-color': '#495057',
      '--input-focus-border-color': '#78818a',
      '--input-focus-box-shadow': '0 0 0 0.2rem rgba(141, 143, 146, 0.25)',
    },
    light: {
      '--base-text-color': '#212529',
      '--header-bg': '#fff',
      '--header-text-color': '#212529',
      '--default-btn-bg': '#fff',
      '--default-btn-text-color': '#212529',
      '--default-btn-hover-bg': '#e8e7e7',
      '--default-btn-border-color': '#343a40',
      '--default-btn-focus-box-shadow':
        '0 0 0 0.2rem rgba(141, 143, 146, 0.25)',
      '--danger-btn-bg': '#f1b5bb',
      '--danger-btn-text-color': '#212529',
      '--danger-btn-hover-bg': '#ef808a',
      '--danger-btn-border-color': '#e2818a',
      '--input-border-color': '#ced4da',
      '--input-bg-color': '#fff',
      '--input-text-color': '#495057',
      '--input-focus-bg-color': '#fff',
      '--input-focus-text-color': '#495057',
      '--input-focus-border-color': '#78818a',
      '--input-focus-box-shadow': '0 0 0 0.2rem rgba(141, 143, 146, 0.25)',
    },
  };
  let lastSelectedTheme = localStorage.getItem('app_theme') || 'default';

  let filter = {
    showOnlyIncomlete: false,
    showAll: true,
    showOnlyComplete: false,
  }

  // Elements UI
  const listContainer = document.querySelector('.tasks-list-section .list-group');
  const form = document.forms['addTask'];
  const inputTitle = form.elements['title'];
  const inputBody = form.elements['body'];
  const themeSelect = document.getElementById('themeSelect')
  const incompleteTasksBtn = document.querySelector('.incompleteTask-btn');
  const allTasksBtn = document.querySelector('.allTask-btn');
  const completedBtn = document.querySelector('.completedTasks-btn');

  // Events
  setTheme(lastSelectedTheme);
  renderAllTasks();
  form.addEventListener('submit', onFormSubmitHandler);
  listContainer.addEventListener('click',onDeleteHandler);
  themeSelect.addEventListener('change', onThemeSelectHandler);
  listContainer.addEventListener('click', onCompleteHandler);
  incompleteTasksBtn.addEventListener('click', onIncompleteTasksHandler);
  allTasksBtn.addEventListener('click', onShowAllTasks);
  completedBtn.addEventListener('click', onCompletedTaskHandler);

  // Render HTML
  function renderAllTasks() {

    while (listContainer.lastElementChild) {
      listContainer.removeChild(listContainer.lastElementChild);
    }

    let tasksList = filterTasks();

    if (isEmptyTasks(tasksList)) {
      alertFromEmptyTasks();
    } else {
      deleteAlertFromEmptyTasks();
    }

    const fragment = document.createDocumentFragment();
    Object.values(tasksList).forEach(task => {
      const li = listItemTemplate(task);
      fragment.appendChild(li);
      completeTaskFromHtml(task.completed, li);
    });
    
    listContainer.appendChild(fragment);
  }

  function completeTaskFromHtml(completed, el) {
    if (!completed) {
      el.style.backgroundColor = '#fff';
    } else {
      el.style.backgroundColor = '#5DD4BB';
    }
    
  }

  function listItemTemplate({ _id, title, body}) {
    const li = document.createElement('li');
    li.classList.add('list-group-item', 'd-flex', 'align-items-center', 'flex-wrap', 'mt-2');
    li.setAttribute('data-task-id', _id);

    const span = document.createElement('span');
    span.textContent = title;
    span.style.fontWeight = 'bold';

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete task';
    deleteBtn.classList.add('btn', 'btn-danger', 'delete-btn');

    const completeBtn = document.createElement('button');
    completeBtn.textContent = 'Complete task';
    completeBtn.classList.add('btn', 'btn-success', 'complete-btn');

    const groupBtn = document.createElement('div');
    groupBtn.classList.add('d-flex', 'flex-wrap', 'justify-content-between', 'w-100');
    groupBtn.appendChild(completeBtn);
    groupBtn.appendChild(deleteBtn);

    const article = document.createElement('p');
    article.textContent = body;
    article.classList.add('mt-2', 'w-100');

    li.appendChild(span);
    li.appendChild(article);
    li.appendChild(groupBtn);

    return li;
  }

  function deleteTaskFromHtml(confirmed, el) {
    if (!confirmed) return;
    el.remove(); 
  }

  function alertFromEmptyTasks() {
    const alertEmpty = document.createElement('div');
    alertEmpty.classList.add('alert', 'alert-info', 'alert-empty', 'mt-1');
    alertEmpty.textContent = `The task list is empty.`

    listContainer.appendChild(alertEmpty);
}
 
  // Functional
  function setTheme(name) {
    const selectedThemeObj = themes[name];
    Object.entries(selectedThemeObj).forEach(([key, value]) => {
      document.documentElement.style.setProperty(key, value);
    });
  }

  function isEmptyTasks(task) {
    if (Object.keys(task).length !== 0) {
      return false;
    } 
    return true
  }

  function deleteAlertFromEmptyTasks() {
    let alertElem =  document.querySelector('.alert-empty');
    if (alertElem === null) return;
    alertElem.remove();
  }

  function completeTask(id) {

    if (objOfTasks[id].completed) {
      objOfTasks[id].completed = false;
    } else {
      objOfTasks[id].completed = true;
    }
    return objOfTasks[id].completed;
  }

  function createNewTask(title, body) {
    const newTask = {
      title,
      body,
      completed: false,
      _id: `task-${Math.random()}`,
    };

    objOfTasks[newTask._id] = newTask;
    
    let isEmpty = isEmptyTasks(objOfTasks);

    if (!isEmpty) {
      deleteAlertFromEmptyTasks()
    }

    return { ... newTask };
  }

  function deleteTask(id) {
    const { title } = objOfTasks[id]
    const isConfirm = confirm(`Вы точно хотите удалить задачу: ${title} ?`);
    if (!isConfirm) return isConfirm;
    delete objOfTasks[id];
    return isConfirm;
  }

  function filterTasks(){
    
    const keysArray = Object.keys(objOfTasks);

    keysArray.sort((a, b) => objOfTasks[a].completed - objOfTasks[b].completed);

    const sortedTaskObj = {};
    keysArray.forEach(key => {
      sortedTaskObj[key] = objOfTasks[key]
    })

    return Object.values(sortedTaskObj).filter(item=>{
      if (filter.showAll) {
        return sortedTaskObj;
      } else if (filter.showOnlyIncomlete && item.completed === false) {
        return item;
      } else if (filter.showOnlyComplete && item.completed) {
        return item;
      }
     })
  }

  // onHandler
  function onCompleteHandler({ target }) {
    if (target.classList.contains('complete-btn')) {
      const parent = target.closest('[data-task-id]');
      const id = parent.dataset.taskId;
      const completed = completeTask(id);
      completeTaskFromHtml(completed, parent);
      renderAllTasks();
    }
  }

  function onDeleteHandler({ target }) {
    if (target.classList.contains('delete-btn')) {
      const parent = target.closest('[data-task-id]');
      const id = parent.dataset.taskId;
      const confirmed = deleteTask(id);
      deleteTaskFromHtml(confirmed, parent);
      renderAllTasks();
    }
  }

  function onThemeSelectHandler(e) {
    const selectedTheme = themeSelect.value;
    const isConfirmed = confirm(`Вы действительно хотите изменить тему ${selectedTheme} ?`);
    if (!isConfirmed) {
      themeSelect.value = lastSelectedTheme;
      return;
    };
    setTheme(selectedTheme);
    lastSelectedTheme = selectedTheme;
    localStorage.setItem('app_theme', selectedTheme);
  }

  function onIncompleteTasksHandler() {
    filter.showAll = false;
    filter.showOnlyComplete = false;
    filter.showOnlyIncomlete = true;

    renderAllTasks();
  }

  function onShowAllTasks() {
    filter.showAll = true;
    filter.showOnlyIncomlete = false;

    renderAllTasks();
  }

  function onFormSubmitHandler(e) {
    e.preventDefault();
    const titleValue = inputTitle.value;
    const bodyValue = inputBody.value;

    if (!titleValue || !bodyValue) {
      alert("Пожалуйста введите title и body");
      return;
    }

    createNewTask(titleValue, bodyValue);
    renderAllTasks()
    form.reset();
  }

  function onCompletedTaskHandler() {
    filter.showOnlyComplete = true;
    filter.showOnlyIncomlete = false;
    filter.showAll = false;

    renderAllTasks();
  }

 
})(tasks);
