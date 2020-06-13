import 'bootstrap';
import displayMessages from './components/messageArea';
import keyEvent from './components/inputArea';
import clear from './components/clearBtn';
import darkMode from './components/darkMode';
import deleteMessage from './components/deleteMessage';
import largetext from './components/changeCss';
import bot from './components/chatbot';
import '../styles/main.scss';

const init = () => {
  displayMessages.displayMessages();
  keyEvent.eventHandler();
  clear.clearEvent();
  darkMode.darkModeChecked();
  deleteMessage.eventHandler();
  largetext.largeTextChecked();
  bot.yodaBot();
};

init();
