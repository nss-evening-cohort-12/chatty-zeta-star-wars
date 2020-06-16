import messageData from '../helpers/data/messageData';
import displayMessages from './messageArea';
import inputArea from './inputArea';

const switchTextArea = () => {
  document.querySelector('.messageInput').innerHTML = '<textarea class="form-control editText" id="exampleFormControlTextarea1" rows="3"></textarea>';
  inputArea.eventHandler();
};


const codeListener = (e) => {
  const codeKey = e.keyCode;

  if (codeKey === 13) {
    console.error('asdfasdfasdf');
    const messages = messageData.getMessageData();
    const modifiedMessageindex = e.target.id;
    const modifiedMessageBody = e.target.value;
    messages[modifiedMessageindex].body = modifiedMessageBody;
    displayMessages.displayMessages();
    document.querySelector('textarea.editText').value = '';
    switchTextArea();
  }
};


const showMessageInTextArea = (body, item) => {
  document.querySelector('.messageInput').innerHTML = `<textarea class="form-control editText" id="${item}" rows="3">${body}</textarea>`;
  document.querySelector('textarea.editText').addEventListener('keypress', codeListener);
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
