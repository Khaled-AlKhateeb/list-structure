import library from './library.js';
import drowOnScreen from './drow-on-screen.js';

const localStorageOnLoad = () => {
  window.addEventListener('load', () => {
    const localStorageItem = window.localStorage.getItem('tasks');
    if (localStorageItem) {
      library.taskArr = JSON.parse(localStorageItem);
      library.taskArr.forEach((element) => {
        drowOnScreen(element);
      });
    }
  });
};

export default localStorageOnLoad;