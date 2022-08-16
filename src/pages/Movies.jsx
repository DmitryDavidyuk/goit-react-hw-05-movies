import { Outlet, useSearchParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import apiServices from '../API/API';
// import { Link } from 'react-router-dom';

export default function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    apiServices.getSearchMovie(searchParams).then(data => setMovies(data));
  }, [searchParams]);

  return (
    <>
      <form>
        <input
          value={searchParams.get('query') || ''}
          type="text"
          onChange={e => {
            e.preventDefault();
            const query = e.target.value;
            if (query) {
              setSearchParams({ query });
            } else {
              setSearchParams({});
            }
          }}
        />
        <button type="buuton">search</button>
      </form>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
      <Outlet />{' '}
    </>
  );
}
