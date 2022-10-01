import tasks from '.';

class AddTask {
  constructor() {
    this.description = '';
    this.completed = false;
    this.index = null;
  }
}

const newTask = new AddTask();
const addInput = document.getElementById('addTask');
const addBtn = document.getElementById('addBtn');

addBtn.addEventListener('click', () => {
  newTask.description = addInput.value;
  tasks.push(newTask);
});

export default newTask;
