const fetchQuery = async searchQuery => {
  try {
    const url = `https://restcountries.eu/rest/v2/name/${searchQuery}`;

    const result = await fetch(url);
    if (!result.ok) throw new Error('Error');

    const data = await result.json();
    return data;
  } catch (error) {
    return error;
  }
};

export default fetchQuery;
