import moment from 'moment';
import messagedata from '../helpers/data/messageData';
import utils from '../helpers/utils';

const messages = messagedata.getMessageData();

const messageLimit = () => {
  if (messages.length > 19) {
    messages.splice(0, 1);
  }
};

const displayMessages = () => {
  let domString = '<div id="messageArea>';

  for (let i = 0; i < messages.length; i += 1) {
    const cleanTime = moment(messages[i].timestamp).format('MMMM Do YYYY, h:mm:ss a');
    domString += `
                <h2 class="${messages[i].userId}">${messages[i].userId}</h2>
                <h6 class="timestamp">${cleanTime}</h6>
                <p class="delete">X</p>
                <p class="message">${messages[i].body}</P>                    
                `;
  }
  domString += '</div>';

  utils.printToDom('#messageArea', domString);
  messageLimit();
};


export default { displayMessages };
