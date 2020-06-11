import dom from '../helpers/utils';

const newMessage = document.getElementById('#exampleFormControlTextarea1');

const pushMessage = (e) => {
  console.error(e.target);
  let domString = '';

  domString += `
    <div>${newMessage().value}</div>
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
