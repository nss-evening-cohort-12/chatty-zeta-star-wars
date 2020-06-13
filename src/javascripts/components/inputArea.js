import moment from 'moment';
import messageData from '../helpers/data/messageData';
import displayMessages from './messageArea';

// import user from '../helpers/data/userData';

// const users = user.getUserData();
let messageId = 6;
const pushMessage = (e) => {
  document.getElementById('clearButton').disabled = false;
  // new Message object to push this in to messageData
  const newMessage = {};
  const timeNow = moment();
  // const userName = document.querySelector('input[type = radio]:checked').value;
  const userId = document.querySelector('input[type = radio]:checked').value;
  const messageBody = e.target.value;

  newMessage.id = messageId;
  newMessage.timestamp = timeNow;
  newMessage.body = messageBody;
  newMessage.userId = userId;
  // Called the function to push newMessage obj in to messageData
  messageData.setMessageData(newMessage);

  messageId += 1;

  displayMessages.displayMessages();
};

const codeListener = (e) => {
  const codeKey = e.keyCode;

  if (codeKey === 13) {
    pushMessage(e);
    document.getElementById('exampleFormControlTextarea1').value = '';
  }
};

const eventHandler = () => {
  document.querySelector('#exampleFormControlTextarea1').addEventListener('keypress', codeListener);
};

export default { eventHandler };
