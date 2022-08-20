import { Link, useSearchParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import apiServices from '../API/API';
import SearchBar from 'components/SearchBar';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const [status, setStatus] = useState('idle');
  const location = useLocation();

  useEffect(() => {
    if (!query) return;
    setStatus('idle');
    apiServices
      .getSearchMovie(searchParams)
      .then(({ results }) => {
        if (results.length === 0) {
          setStatus('rejected');
          return;
        }
        setMovies(results);
        setStatus('resolved');
      })
      .catch(error => console.log(error));
  }, [query, searchParams]);

  const updateQueryString = query => {
    const nextQuery = query !== '' ? { query } : {};
    setSearchParams(nextQuery);
  };

  return (
    <>
      <SearchBar onChange={updateQueryString} />
      {status === 'idle' && <h2>There is nothing here</h2>}
      {status === 'rejected' && <h2>oops nothing found</h2>}
      {status === 'resolved' && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
