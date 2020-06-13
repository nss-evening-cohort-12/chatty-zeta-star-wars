import messageData from '../helpers/data/messageData';
import displayMessages from './messageArea';


const replaceMessage = (e) => {
  console.error('asdfasdfasdf');
  messageData.getMessageData();
  console.error(e.target.value);
  console.error(e.target.id);

  displayMessages.displayMessages();
};

const codeListener = (e) => {
  const codeKey = e.keyCode;

  if (codeKey === 13) {
    replaceMessage(e);
    document.getElementById('exampleFormControlTextarea1').value = '';
  }
};
const eventHandler2 = () => {
  document.querySelector('#exampleFormControlTextarea1').addEventListener('keypress', codeListener);
};


const showMessageInTextArea = (body, item) => {
  document.querySelector('.messageInput').innerHTML = `<textarea class="form-control" id="exampleFormControlTextarea1" rows="3">${body}</textarea>`;
  console.error(body, item);
  eventHandler2();
};


const editMessage = (e) => {
  if (e.target.classList.contains('edit')) {
    const messages = messageData.getMessageData();
    const item = messages.findIndex((message) => message.id === Number(e.target.id));
    showMessageInTextArea(messages[item].body, item);
  }
};

const eventHandler = () => {
  document.body.addEventListener('click', editMessage);
};


export default { eventHandler };
