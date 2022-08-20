import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import apiServices from 'API/API';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

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
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
