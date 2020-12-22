import refs from './refs.js';

function onCleanInput(e) {
  const currentInput = e.target;
  currentInput.value = '';
  cleanSearchCountry();
  cleanSearchCountries();
}

function cleanSearchCountry() {
  refs.countryDescription.innerHTML = '';
}

function cleanSearchCountries() {
  refs.listCountries.innerHTML = '';
}

export default { onCleanInput, cleanSearchCountry, cleanSearchCountries };
