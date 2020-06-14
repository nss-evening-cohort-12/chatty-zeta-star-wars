/* eslint-disable arrow-parens */
// import utils from '../helpers/utils';


const testSearch = () => {
  const searchTerm = document.querySelector('.gifSearch').value;
  const api = 'https://api.giphy.com/v1/gifs/search?';
  const apiKey = 'api_key=qfI5Wo6vzOcyU8NhyesGf77c63gw29P3';
  const query = `&q=$${searchTerm}$limit=10`;
  const url = api + apiKey + query;

  fetch(url)
    .then(response => response.json())
    .then(data => console.error(data));
  // console.error(searchTerm);
  // document.querySelector('.gifSearch').value = '';
};

$('body').on('click', '.pleasework', testSearch);
