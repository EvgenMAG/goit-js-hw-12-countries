import errorsNotifications from './notification.js';
import templateList from '../templates/list.hbs';
import countryInfo from '../templates/countriesDescription.hbs';
import refs from './refs';
import cleaner from './cleanInput';

const errorMessage = 'Nothing has been found. Try again!';
const overLimitMessage =
  'Too manu matches found! Please enter more specific query!';

function checkFetchResponse(result) {
  if (result.message == 'Error') {
    handelErrorAndClean(errorMessage);
    return;
  }
  if (result.length > 10) {
    handelErrorAndClean(overLimitMessage);
    return;
  }
  if (result.length === 1) {
    cleaner.cleanSearchCountry();
    renderCountryPage(result);
    return;
  }
  if (result.length > 1) {
    cleaner.cleanSearchCountries();
    renderCountriesPage(result);
    return;
  }
}

function onDoubleCheckFetchResponse(result) {
  if (result.length === 1) {
    cleaner.cleanSearchCountry();
    renderCountryPage(result);
    return;
  }
  if (result.length > 1) {
    let firstCountry = result.slice(0, 1);
    cleaner.cleanSearchCountry();
    renderCountryPage(firstCountry);
    return;
  }
}

function renderCountryPage(country) {
  const markupCountry = countryInfo(country);
  refs.countryDescription.insertAdjacentHTML('beforeend', markupCountry);
  cleaner.cleanSearchCountries();
}

function renderCountriesPage(countries) {
  const markupList = templateList(countries);
  refs.listCountries.insertAdjacentHTML('beforeend', markupList);
  cleaner.cleanSearchCountry();
}

function handelErrorAndClean(message) {
  errorsNotifications(message);
  cleaner.cleanSearchCountry();
  cleaner.cleanSearchCountries();
}

export default { checkFetchResponse, onDoubleCheckFetchResponse };
