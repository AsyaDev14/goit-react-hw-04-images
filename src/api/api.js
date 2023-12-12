import axios from "axios";

const BASE_URL = 'https://pixabay.com/api/';
const ApiKey = '33816653-3cca4f3926f281165d337bdaa';

export const fetchPicture = async (value, page) => {
  try {
  const res = await axios(`${BASE_URL}?q=${value}&page=${page}&key=${ApiKey}&image_type=photo&orientation=horizontal&per_page=12`)

    return res.data.hits
  } catch (error) {
    console.log("err", error);
  }

};
