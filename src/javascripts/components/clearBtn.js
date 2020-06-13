// import dom from '../helpers/utils';
import data from '../helpers/data/messageData';

// let messages = data.getMessageData();
const messages = data.getMessageData();
let newMess = messages;

const clearMsg = () => {
  document.querySelector('#messageArea').innerHTML = '';
  newMess = [];
  data.clearMessageData();
  if ($('#messageArea').text().length <= 0) {
    document.getElementById('clearButton').disabled = true;
  }
};

const clearEvent = () => {
  $('body').on('click', '#clearButton', clearMsg);
};

const getNewMess = () => newMess;
export default { clearEvent, getNewMess };
