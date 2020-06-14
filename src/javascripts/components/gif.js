import axios from 'axios';
import utils from '../helpers/utils';


const testSearch = () => {
  const searchTerm = document.querySelector('.gifSearch').value;
  const api = 'https://api.giphy.com/v1/gifs/search?';
  const apiKey = 'api_key=****PUT API KEY HERE****';
  const query = `&q=$${searchTerm}$limit=10`;
  const url = api + apiKey + query;

  axios.get(url).then((results) => {
    const image = results.data.data[0].images.downsized.url;
    const domstring = `<img src="${image}">`;
    utils.printToDom('#exampleFormControlTextarea1', domstring);
  });
  document.querySelector('.gifSearch').value = '';
};

const gifListen = () => {
  $('body').on('click', '.pleasework', testSearch);
};

$('body').on('click', '.pleasework', testSearch);
export default { gifListen };
