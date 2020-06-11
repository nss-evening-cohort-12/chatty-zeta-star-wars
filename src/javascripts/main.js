import '../styles/main.scss';
import 'bootstrap';
import displayMessages from './components/messageArea';
import keyEvent from './components/inputArea';


const init = () => {
  displayMessages.displayMessages();
  keyEvent.eventHandler();
};

init();
