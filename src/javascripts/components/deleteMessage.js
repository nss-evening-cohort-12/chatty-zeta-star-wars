import messagedata from '../helpers/data/messageData';
import messageArea from './messageArea';

const removeMessage = (e) => {
  if (e.target.classList.contains('delete')) {
    const messages = messagedata.getMessageData();
    const item = messages.findIndex((message) => message.id === Number(e.target.id));
    messages.splice(item, 1);
    messages.forEach((message) => {
      console.error(message);
    });
    messageArea.displayMessages();
  }
};

const eventHandler = () => {
  document.body.addEventListener('click', removeMessage);
};


export default { eventHandler };
