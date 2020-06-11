import '../styles/main.scss';
import 'bootstrap';
import displayMessages from './components/messageArea';
import keyEvent from './components/inputArea';
import clear from './components/clearBtn';


const init = () => {
  displayMessages.displayMessages();
  keyEvent.eventHandler();
  clear.clearEvent();
};

init();
