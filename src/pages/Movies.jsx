import { Link, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import apiServices from '../API/API';
import SearchBar from 'components/SearchBar';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!query) return;
    apiServices
      .getSearchMovie(searchParams)
      .then(({ results }) => setMovies(results))
      .catch(error => console.log(error));
  }, [query, searchParams]);

  const updateQueryString = query => {
    const nextQuery = query !== '' ? { query } : {};
    setSearchParams(nextQuery);
  };

  return (
    <>
      <SearchBar onChange={updateQueryString} />
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
