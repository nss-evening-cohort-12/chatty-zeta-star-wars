import messagedata from '../helpers/data/messageData';
import messageArea from './messageArea';

const removeMessage = (e) => {
  if (e.target.classList.contains('delete')) {
    const messages = messagedata.getMessageData();
    const item = messages.findIndex((message) => message.id === Number(e.target.id));
    messages.splice(item, 1);
    if (messages.length === 0) {
      document.querySelector('#messageArea').innerHTML = '';
    }
    messageArea.displayMessages();
  }
};

const eventHandler = () => {
  document.body.addEventListener('click', removeMessage);
};


export default { eventHandler };
