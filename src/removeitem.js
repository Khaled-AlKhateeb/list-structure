import { getParents } from "./selecteditems.js";
import library from "./library.js";

export const removeItem = (e) => {
  const removeTarget = getParents(e.target, 'task-item');
  if (e.target && (e.target.className.includes('task-item') || removeTarget)) {
    if (e.target.className === 'task-item') {
      console.log(e.target.parentNode);
    }
    let rmvBtn = removeTarget.children[1];
    rmvBtn.addEventListener('click', () => {
      removeTarget.remove();
      library.remove(removeTarget.order);
    })
    for (let i = 0; i < addTask.children.length; i++) {
      addTask.children[i].order = i + 1;
      task.index = i;
    }
    window.localStorage.setItem('tasks', JSON.stringify(library.taskArr));
  }
};
