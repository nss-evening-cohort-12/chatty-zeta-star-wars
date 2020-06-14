import 'bootstrap';
import emojiPicker from './components/emojiPicker';
import displayMessages from './components/messageArea';
import keyEvent from './components/inputArea';
import clear from './components/clearBtn';
import darkMode from './components/darkMode';
import deleteMessage from './components/deleteMessage';
import largetext from './components/changeCss';
import gifs from './components/gif';
import '../styles/main.scss';
import editMessage from './components/editMessage';

const init = () => {
  displayMessages.displayMessages();
  keyEvent.eventHandler();
  clear.clearEvent();
  darkMode.darkModeChecked();
  deleteMessage.eventHandler();
  largetext.largeTextChecked();
  editMessage.eventHandler();
  emojiPicker.button();
  gifs.gifListen();
};

init();
