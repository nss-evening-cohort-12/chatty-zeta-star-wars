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
  let domString = '<div id="addedMessage">';


  for (let i = 0; i < messages.length; i += 1) {
    const cleanTime = moment(messages[i].timestamp).format('MMMM Do YYYY, h:mm:ss a');
    domString += `
                <div class="d-flex">
                <h5  class="${messages[i].userId}">${messages[i].userId}</h5>
                <h6 class="pl-1 timestamp">${cleanTime}</h6>
                <button id="${messages[i].id}" class="btn btn-outline-warning btn-sm ml-auto delete">X</button>
                </div>                                
                <p class="message">${messages[i].body}</p>
                <hr class="line">                    
                `;
  }
  domString += '</div>';

  utils.printToDom('#messageArea', domString);
  messageLimit();
};


export default { displayMessages };
