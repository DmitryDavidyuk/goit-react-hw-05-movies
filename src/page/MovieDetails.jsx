import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import apiServices from 'components/API/API';

export default function MovieDetails() {
  const [movie, setMovie] = useState({});
  const { movieid } = useParams();

  useEffect(() => {
    apiServices
      .getMovieDetails(movieid)
      .then(data => setMovie(data))
      .catch(error => console.log(error));
  }, [movieid]);

  return (
    <div>
      <button type="button">Go back</button>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt=""
      />
      <h1>{movie.title}</h1>
    </div>
  );
}
