import './style.css';
import { selectedItem, editItem } from './selecteditems.js';
import removeItem from './removeitem.js';
import localStorageOnLoad from './localstorage.js';
import getInputValues from './add-new-task.js';

const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');

addBtn.addEventListener('click', () => { getInputValues(); });
todoList.addEventListener('click', (e) => { selectedItem(e); removeItem(e); });
todoList.addEventListener('focusout', (e) => { editItem(e); });

localStorageOnLoad();
