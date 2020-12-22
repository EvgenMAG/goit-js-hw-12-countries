import './styles.css';

import fetchQuery from './JS/fetchCountries.js';

import checkFetchResponse from './JS/renderPage.js';

import debounce from 'lodash.debounce';
import refs from './JS/refs';

import cleaner from './JS/cleanInput';

refs.input.addEventListener('input', debounce(findCountry, 500));
refs.input.addEventListener('click', handelClean);

function findCountry(e) {
  const inputValue = e.target.value;

  fetchQuery(inputValue).then(checkFetchResponse);
}

function handelClean(e) {
  console.log(e.target.value);
  if (e.target.value !== '') {
    cleaner.onCleanInput(e);
  }
}
