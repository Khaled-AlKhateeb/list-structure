import { initializeTasks } from './drow-on-screen.js';

const localStorageOnLoad = () => {
  window.addEventListener('load', () => {
    initializeTasks();
  });
};

export default localStorageOnLoad;
