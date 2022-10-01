import library from './library.js';
import drowOnScreen from './drow-on-screen.js';

const getInputValues = () => {
  const taskEntries = {
    description: '',
    completed: false,
    index: null,
  };
  const descriptionInput = document.getElementById('addTask');
  taskEntries.description = descriptionInput.value;

  library.add(taskEntries);

  descriptionInput.value = '';

  drowOnScreen(taskEntries);
};

export default getInputValues;