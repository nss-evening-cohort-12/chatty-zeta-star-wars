const messageData = [
  {
    id: 1,
    timestamp: 'Timestamp goes here',
    body: 'Message goes here',
    userId: 1,
  },
  {
    id: 2,
    timestamp: 'Timestamp goes here',
    body: 'Message goes here',
    userId: 2,
  },
  {
    id: 3,
    timestamp: 'Timestamp goes here',
    body: 'Message goes here',
    userId: 3,
  },
  {
    id: 4,
    timestamp: 'Timestamp goes here',
    body: 'Message goes here',
    userId: 4,
  },
  {
    id: 5,
    timestamp: 'Timestamp goes here',
    body: 'Message goes here',
    userId: 5,
  },
];

const getMessageData = () => messageData;

const setMessageData = (newMessage) => {
  messageData.push(newMessage);
};

export default { getMessageData, setMessageData };
