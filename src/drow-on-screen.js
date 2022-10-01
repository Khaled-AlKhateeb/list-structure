import library from "./library.js";

const drowOnScreen = (task) => {
  const addTask = document.getElementById('todoList');
  const todo = document.createElement('li');
  const division = document.createElement('div');
  const input = document.createElement('input');
  const inputLabel = document.createElement('input');
  const button = document.createElement('button');
  const icon = document.createElement('i');

  todo.classList.add('task-item');
  inputLabel.classList.add('label');
  division.classList.add('task-checkbox');
  button.classList.add('rmv-btn');
  icon.classList.add('fa-solid', 'fa-ellipsis-vertical');

  inputLabel.value = task.description;

  input.setAttribute('type', 'checkbox');
  inputLabel.setAttribute('id', 'edit');
  button.setAttribute('type', 'button');
  inputLabel.setAttribute('type', 'text');
  inputLabel.setAttribute('disabled', 'true');
  button.appendChild(icon);
  division.appendChild(input);
  division.appendChild(inputLabel);
  todo.appendChild(division);
  todo.appendChild(button);
  addTask.appendChild(todo);

  for (let i = 0; i < addTask.children.length; i++) {
    addTask.children[i].order = i + 1;
    task.index = i + 1;
  }

  window.localStorage.setItem('tasks', JSON.stringify(library.taskArr));
}


export default drowOnScreen;