import dom from '../helpers/utils';

const pushMessage = (e) => {
  const newMessage = e.target.value;
  let domString = '';

  domString += `
    <div>${newMessage}</div>
    `;
  dom.printToDom('#messageArea', domString);
};

const codeListener = (e) => {
  const codeKey = e.keyCode;

  if (codeKey === 13) {
    pushMessage(e);
  }
};

const eventHandler = () => {
  document.querySelector('#exampleFormControlTextarea1').addEventListener('keypress', codeListener);
};

export default { eventHandler };
