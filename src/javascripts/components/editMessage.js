import messageData from '../helpers/data/messageData';
import inputArea from './inputArea';

const editMessage = (e) => {
  if (e.target.classList.contains('edit')) {
    const messages = messageData.getMessageData();
    const item = messages.findIndex((message) => message.id === Number(e.target.id));
    console.error(Number(e.target.id) - 1);
    console.error(item);
    console.error(messages[item].body);
    inputArea.eventHandler();
    document.querySelector('#exampleFormControlTextarea1').innerHTML = 'Nikhil';
  }
};

const eventHandler = () => {
  document.body.addEventListener('click', editMessage);
};


export default { eventHandler };
