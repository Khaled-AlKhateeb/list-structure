import tasks from ".";

class addTask {
  constructor() {
    this.description = "";
    this.completed = false;
    this.index = null;
  }
}

const newTask = new addTask();
const addInput = document.getElementById('addTask');
const addBtn = document.getElementById('addBtn');

addBtn.addEventListener('click', () => {
  newTask.description = addInput.value;
  tasks.push(newTask);
})

export default newTask;
