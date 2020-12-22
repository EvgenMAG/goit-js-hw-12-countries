import errorsNotifications from './notification.js';

import templateList from '../templates/list.hbs';

import countryInfo from '../templates/countriesDescription.hbs';

import refs from './refs';

import cleaner from './cleanInput';

function checkFetchResponse(result) {
  if (result.length > 10) {
    errorsNotifications(
      'Too manu matches found! Please enter more specific query!',
    );
    return;
  }
  if (result.length > 2) {
    renderCountriesPage(result);
    return;
  }
  if (result.length === 1) {
    renderCountryPage(result);
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

export default checkFetchResponse;