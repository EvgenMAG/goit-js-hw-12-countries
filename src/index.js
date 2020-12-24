import './styles.css';
import fetchQuery from './JS/fetchCountries.js';
import checkAndRender from './JS/renderPage.js';
import debounce from 'lodash.debounce';
import refs from './JS/refs';

import cleaner from './JS/cleanInput';

refs.input.addEventListener('input', debounce(findCountry, 500));
refs.input.addEventListener('click', handelCleaner);
refs.listCountries.addEventListener('click', openCountryFromList);

function findCountry(e) {
  const inputValue = e.target.value;

  if (inputValue == '') {
    cleaner.cleanSearchCountry();
    cleaner.cleanSearchCountries();
    return;
  }

  fetchQuery(inputValue).then(checkAndRender.checkFetchResponse);
}

function handelCleaner(e) {
  if (e.target.value !== '') {
    cleaner.onCleanInput(e);
  }
}

function openCountryFromList(e) {
  const chosenCountry = e.target.textContent;
  console.log(chosenCountry);
  refs.input.value = chosenCountry;
  fetchQuery(chosenCountry).then(checkAndRender.onDoubleCheckFetchResponse);
}
