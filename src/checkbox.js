import { getParents } from './selecteditems.js';
import library from './library.js';

const checkBox = (e) => {
  const parentTarget = getParents(e.target, 'task-item');
  if (parentTarget.firstChild.firstChild.checked) {
    for (let i = 0; i < library.taskArr.length; i += 1) {
      if (library.taskArr[i].index === parentTarget.order) {
        library.taskArr[i].completed = true;
      }
    }
  } else {
    for (let i = 0; i < library.taskArr.length; i += 1) {
      if (library.taskArr[i].index === parentTarget.order) {
        library.taskArr[i].completed = false;
      }
    }
  }
  window.localStorage.setItem('tasks', JSON.stringify(library.taskArr));
};

export default checkBox;
