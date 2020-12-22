import './styles.css';
import fetchQuery from './JS/fetchCountries.js';
import checkFetchResponse from './JS/renderPage.js';
import debounce from 'lodash.debounce';
import refs from './JS/refs';

import cleaner from './JS/cleanInput';

refs.input.addEventListener('input', debounce(findCountry, 500));
refs.input.addEventListener('click', handelCleaner);
refs.listCountries.addEventListener('click', openCountryFromList);

function findCountry(e) {
  const inputValue = e.target.value;
  if (!inputValue) {
    return;
  }
  if (inputValue == '') {
    cleaner.onCleanInput(e);
    return;
  }

  fetchQuery(inputValue).then(checkFetchResponse);
}

function handelCleaner(e) {
  console.log(e.target.value);
  if (e.target.value !== '') {
    cleaner.onCleanInput(e);
  }
}

function openCountryFromList(e) {
  const chosenCountry = e.target.textContent;
  refs.input.value = chosenCountry;
  fetchQuery(chosenCountry).then(checkFetchResponse);
}
