import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import apiServices from 'components/API/API';

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    apiServices.getPopularMovies().then(({ results }) => {
      setMovies(results);
    });
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={{ pathname: `/movie/${movie.id}` }}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
