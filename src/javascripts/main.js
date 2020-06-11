import 'bootstrap';
import displayMessages from './components/messageArea';
import darkMode from './components/darkMode'


const init = () => {
  displayMessages.displayMessages();
  darkMode.darkModeCheckBox();
};

init();
