import '../styles/main.scss';
import 'bootstrap';
import displayMessages from './components/messageArea';
import keyEvent from './components/inputArea';
/* import darkMode from './components/darkMode'; */


const init = () => {
  displayMessages.displayMessages();
  /* darkMode.darkModeChecked();
  darkMode.darkModeCheckBox(); */
  keyEvent.eventHandler();
};

init();
