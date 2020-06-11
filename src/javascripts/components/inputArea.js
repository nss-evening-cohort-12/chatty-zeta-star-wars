import dom from '../helpers/utils';
// import user from '../helpers/data/userData';

// const users = user.getUserData();

const pushMessage = (e) => {
  document.getElementById('clearButton').disabled = false;
  const userName = document.querySelector('input[type = radio]:checked').value;
  const newMessage = e.target.value;
  let domString = '';

  domString += `
    <div>
    <div><h4>${userName}</h4></div>
    <div>X</div>
    <p>${newMessage}</p>
    </div>
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
