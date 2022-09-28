import './style.css';

const tasks = [
  {
    description: 'fix the car',
    completed: true,
    index: 0,
  },
  {
    description: 'go for a walk',
    completed: false,
    index: 1,
  },
  {
    description: 'build a tree house',
    completed: false,
    index: 2,
  },
];

const taskList = document.getElementById('todoList');

const newElement = (task) => {
  const todo = document.createElement('li');
  const division = document.createElement('div');
  const input = document.createElement('input');
  const label = document.createElement('label');
  const button = document.createElement('button');
  const icon = document.createElement('i');

  todo.classList.add('task-item');
  division.classList.add('form-container');
  button.classList.add('move-btn');
  icon.classList.add('fa-solid', 'fa-ellipsis-vertical');

  todo.setAttribute('key', task.index);
  input.setAttribute('type', 'checkbox');
  input.setAttribute('name', 'item1');
  input.setAttribute('id', 'item1');
  label.setAttribute('for', 'item1');
  button.setAttribute('type', 'button');
  if (task.completed) {
    input.checked = true;
  }

  label.innerHTML = task.description;

  button.appendChild(icon);
  division.appendChild(input);
  division.appendChild(label);
  todo.appendChild(division);
  todo.appendChild(button);
  taskList.appendChild(todo);
};

const drowOnScreen = () => {
  const taskListItems = tasks.sort((a, b) => a.index - b.index);
  taskListItems.forEach((element) => {
    newElement(element);
  });
};

document.addEventListener('DOMContentLoaded', drowOnScreen);