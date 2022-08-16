import { Link, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import apiServices from '../API/API';
import SearchBar from 'components/SearchBar';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    apiServices.getSearchMovie(query).then(({ results }) => setMovies(results));
  }, [query]);

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
            <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
