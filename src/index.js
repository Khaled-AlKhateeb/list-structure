import './style.css';
import { selectedItem, editItem } from './selecteditems.js';
import removeItem from './removeitem.js';
import localStorageOnLoad from './localstorage.js';
import getInputValues from './add-new-task.js';
import checkBox from './checkbox.js';
import removeCompleted from './remove-completed.js';

const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');
const clearBtn = document.getElementById('clearBtn');

todoList.addEventListener('change', (e) => { checkBox(e); });
addBtn.addEventListener('click', () => { getInputValues(); });
todoList.addEventListener('click', (e) => { selectedItem(e); removeItem(e); });
todoList.addEventListener('focusout', (e) => { editItem(e); });
clearBtn.addEventListener('click', () => { removeCompleted(); });

localStorageOnLoad();
