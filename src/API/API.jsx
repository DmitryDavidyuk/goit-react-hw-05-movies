import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const KEY = '0eaaf2516690b5ff52877c678f040000';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  api_key: KEY,
  language: 'en-US',
};

//Список самых популярных фильмов на сегодня
async function getPopularMovies(page) {
  try {
    const config = {
      url: `trending/movie/day`,
      params: { page },
    };
    const { data } = await axios(config, page);
    return data;
  } catch (error) {
    console.log('error', { error });
    return null;
  }
}

//Запрос полной информации о фильме
async function getMovieDetails(id) {
  try {
    const config = {
      url: `movie/${id}`,
    };
    const { data } = await axios(config, id);
    return data;
  } catch (error) {
    console.log('error', { error });
    return null;
  }
}

//Поиск фильмов по запросу
async function getSearchMovie(query) {
  try {
    const config = {
      url: `search/movie?api_key=${KEY}`,
      params: query,
    };
    const { data } = await axios(config, query);
    return data;
  } catch (error) {
    console.log('error', { error });
    return null;
  }
}

async function getCastInfo(id) {
  try {
    const config = {
      url: `movie/${id}/credits`,
    };
    const { data } = await axios(config, id);
    return data.cast;
  } catch (error) {
    console.log('error', { error });
    return null;
  }
}

async function getMovieReview(id) {
  try {
    const config = {
      url: `movie/${id}/reviews`,
    };
    const { data } = await axios(config, id);
    return data.results;
  } catch (error) {
    console.log('error', { error });
    return null;
  }
}

const apiServices = {
  getPopularMovies,
  getMovieDetails,
  getSearchMovie,
  getCastInfo,
  getMovieReview,
};

export default apiServices;
