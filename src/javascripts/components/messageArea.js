import messagedata from '../helpers/data/messageData';
import utils from '../helpers/utils';

const messages = messagedata.getMessageData();

const displayMessages = () => {
  let domString = '<div id="messageArea>';

  for (let i = 0; i < messages.length; i += 1) {
    domString += `
                <h2 class="${messages[i].user.name}">${messages[i].user.name}</h2>
                <h6 class="timestamp>${messages[i].timestamp}</h6>
                <p class="delete">X</p>
                <p class="message">${messages[i].body}</P>                    
                `;
  }
  domString += '</div>';

  utils.printToDom('#messageArea', domString);
};


export default { displayMessages };
