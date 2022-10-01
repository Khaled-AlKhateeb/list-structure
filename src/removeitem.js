import { getParents } from './selecteditems.js';
import library from './library.js';

const removeItem = (e) => {
  const removeTarget = getParents(e.target, 'task-item');
  const addTask = document.getElementById('todoList');
  if (e.target && (e.target.className.includes('task-item') || removeTarget)) {
    const rmvBtn = removeTarget.children[1];
    rmvBtn.addEventListener('click', () => {
      removeTarget.remove();
      library.remove(removeTarget.order - 1);
      for (let i = 0; i < addTask.children.length + 1; i += 1) {
        addTask.children[i].order = i + 1;
        library.taskArr[i].index = i + 1;
      }
    });
    window.localStorage.setItem('tasks', JSON.stringify(library.taskArr));
  }
};

export default removeItem;