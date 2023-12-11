const BASE_URL = 'https://pixabay.com/api/';
const ApiKey = '33816653-3cca4f3926f281165d337bdaa';

export const fetchPicture = (value, page) => {
  return (
    fetch(`${BASE_URL}?q=${value}&page=${page}&key=${ApiKey}&image_type=photo&orientation=horizontal&per_page=12`)
      .then(res => res.json())
      .then(res => res)
  );
};
