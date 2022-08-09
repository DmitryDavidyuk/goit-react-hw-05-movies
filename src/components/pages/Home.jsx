import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import getPopularMovies from 'components/API/API';

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getPopularMovies().then(({ results }) => {
      setMovies(results);
    });
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <ul>
        {movies.map(movie => (
          <li>
            <Link to="/movie:id">{movie.original_title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
