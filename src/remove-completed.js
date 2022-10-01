import library from './library.js';
import { initializeTasks } from './drow-on-screen.js';

const removeCompleted = () => {
  const filteredTasks = library.taskArr.filter((task) => !task.completed);
  library.taskArr = filteredTasks;
  window.localStorage.setItem('tasks', JSON.stringify(filteredTasks));
  initializeTasks();
};

export default removeCompleted;
