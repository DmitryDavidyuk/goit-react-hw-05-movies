import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import apiServices from 'API/API';

const Home = () => {
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
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
