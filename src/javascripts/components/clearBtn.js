// import dom from '../helpers/utils';


const clearMsg = () => {
  document.querySelector('#messageArea').innerHTML = '';
  if ($('#messageArea').text().length <= 0) {
    document.getElementById('clearButton').disabled = true;
  }
};

const clearEvent = () => {
  $('body').on('click', '#clearButton', clearMsg);
};

export default { clearEvent };
