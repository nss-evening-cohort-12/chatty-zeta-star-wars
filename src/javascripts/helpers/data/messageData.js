const messageData = [
  {
    id: 1,
    timestamp: 'Fri Jun 12 2020 17:39:24 GMT-0500 (Central Daylight Time)',
    body: 'A legendary Jedi Master, Obi-Wan Kenobi was a noble man and gifted in the ways of the Force.',
    userId: 'obi1Kenobi',
  },
  {
    id: 2,
    timestamp: 'Fri Jun 12 2020 17:44:13 GMT-0500 (Central Daylight Time)',
    body: 'Sokan teaching revolved around using the environment itself to gain a tactical advantage in combat.',
    userId: 'TheHighGround',
  },
  {
    id: 3,
    timestamp: 'Fri Jun 12 2020 17:46:02 GMT-0500 (Central Daylight Time)',
    body: 'Message goes here',
    userId: 'hanShotFirst2019',
  },
  {
    id: 4,
    timestamp: 'Fri Jun 12 2020 17:59:13 GMT-0500 (Central Daylight Time)',
    body: 'Message Goes Here',
    userId: 'jar-jarSuck2020',
  },
  {
    id: 5,
    timestamp: 'Fri Jun 12 2020 18:02:32 GMT-0500 (Central Daylight Time)',
    body: 'Message goes here',
    userId: 'darksidehasCOOKI3S',
  },
];

const getMessageData = () => messageData;

const setMessageData = (newMessage) => {
  messageData.push(newMessage);
};

export default { getMessageData, setMessageData };
