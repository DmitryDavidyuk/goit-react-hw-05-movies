import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const KEY = '0eaaf2516690b5ff52877c678f040000';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  api_key: KEY,
  language: 'en-US',
};

async function getPopularMovies(page) {
  try {
    const config = {
      url: `trending/all/day`,
      params: { page },
    };
    const { data } = await axios(config, page);
    return data;
  } catch (error) {
    console.log('error', { error });
    return null;
  }
}

export default getPopularMovies;
