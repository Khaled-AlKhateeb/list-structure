import library from "./library.js";

const getParents = (e, className) => {
  const result = [];
  let truthy = false;
  let parent = null;
  for (let p = e && e.parentElement; p; p = p.parentElement) {
    if (p.className.includes(className)) {
      truthy = true;
      parent = p;
    };
    result.push(p);
  }
  return parent;
}

const selectedItem = (e) => {
  const parentTarget = getParents(e.target, 'task-item');
  if (e.target && (e.target.className.includes('task-item') || parentTarget)) {

    if (e.target.className === 'label') {
      e.target.disabled = false;
    }
    let iconChange = parentTarget.getElementsByTagName('i');
    iconChange[0].className = 'fa-solid' + ' fa-trash';
  }
}

const editItem = (e) => {
  const parentTarget = getParents(e.target, 'task-item');

  for (let i = 0; i < library.taskArr.length; i++) {
    if (parentTarget.order === library.taskArr[i].index) {
      let edit = parentTarget.children[0].children[1];
      library.taskArr[i].description = edit.value;
    }
  }
  if (e.target.className === 'label') {
    e.target.disabled = true;
  }
  let iconChange = parentTarget.getElementsByTagName('i');
  iconChange[0].className = 'fa-solid' + ' fa-ellipsis-vertical';
  window.localStorage.setItem('tasks', JSON.stringify(library.taskArr));
}

export { selectedItem, getParents, editItem };