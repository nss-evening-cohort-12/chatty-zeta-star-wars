// import dom from '../helpers/utils';
import data from '../helpers/data/messageData';

// let messages = data.getMessageData();

const clearMsg = () => {
  document.querySelector('#messageArea').innerHTML = '';
  console.error(data.getMessageData());
  if ($('#messageArea').text().length <= 0) {
    document.getElementById('clearButton').disabled = true;
  }
};

const clearEvent = () => {
  $('body').on('click', '#clearButton', clearMsg);
};

export default { clearEvent };
