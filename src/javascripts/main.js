import 'bootstrap';
import displayMessages from './components/messageArea';
import keyEvent from './components/inputArea';
import clear from './components/clearBtn';
import darkMode from './components/darkMode';
import '../styles/main.scss'

const init = () => {
  displayMessages.displayMessages();
  keyEvent.eventHandler();
  clear.clearEvent();
  darkMode.darkModeCheckBox();
  darkMode.darkModeChecked();
};

init();
