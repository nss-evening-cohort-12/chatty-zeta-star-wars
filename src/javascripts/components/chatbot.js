import messages from '../helpers/data/messageData';


// const yoda = [
//   {
//     id: 6,
//     name: 'Baby Yoda',
//   },
// ];

// const respondTo = ['Yoda is tiny'];

// const response = ['Judge me by my size, do you?'];

const yodaBot = () => {
  const chats = messages.getMessageData();
  for (let i = 0; i < chats.length; i += 1) {
    console.error(chats[i]);
  }
};

export default { yodaBot };
