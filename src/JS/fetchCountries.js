import errorsNotifications from './notification.js';
import cleaner from './cleanInput';

function fetchQuery(searchQuery) {
  const url = `https://restcountries.eu/rest/v2/name/${searchQuery}`;

  return fetch(url)
    .then(res => {
      if (res.ok) return res.json();
      throw new Error('Error feching data');
    })
    .catch(error => {
      errorsNotifications('Nothing has been found. Try again!');
      cleaner.cleanSearchCountry();
      leaner.cleanSearchCountries();
      return error;
    });
}

export default fetchQuery;
