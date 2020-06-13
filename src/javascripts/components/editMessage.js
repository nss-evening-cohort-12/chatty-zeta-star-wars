import messageData from '../helpers/data/messageData';
import inputArea from './inputArea';


const editMessage = (e) => {
  if (e.target.classList.contains('edit')) {
    const messages = messageData.getMessageData();
    const item = messages.findIndex((message) => message.id === Number(e.target.id));

    console.error(item);
    console.error(messages[item].body);
    document.querySelector('#exampleFormControlTextarea1').innerText = messages[item].body;
    inputArea.eventHandler();
  }
};

const eventHandler = () => {
  document.body.addEventListener('click', editMessage);
};


export default { eventHandler };
