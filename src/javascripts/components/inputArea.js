import moment from 'moment';
import dom from '../helpers/utils';
import messageData from '../helpers/data/messageData';
// import user from '../helpers/data/userData';

// const users = user.getUserData();

const pushMessage = (e) => {
  const timeNow = moment().format();
  document.getElementById('clearButton').disabled = false;
  const userName = document.querySelector('input[type = radio]:checked').value;
  const newMessage = e.target.value;
  const id = e.target.id;

  let domString = '';

  domString += `
    <div><h4>${userName}</h4></div>
    <div>X</div>
    <div>${newMessage}</div>
    `;
  dom.printToDom('#messageArea', domString);
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
