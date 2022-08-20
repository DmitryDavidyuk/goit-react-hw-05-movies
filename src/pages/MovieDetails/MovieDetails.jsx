import { useState, useEffect } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import apiServices from 'API/API';
import CSS from './MovieDetails.module.css';

export default function MovieDetails() {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    apiServices
      .getMovieDetails(movieId)
      .then(data => setMovie(data))
      .catch(error => console.log(error));
  }, [movieId]);

  return (
    <>
      <Link className={CSS.goBack} to={backLinkHref}>
        Go back
      </Link>
      <div className={CSS.moviesDetailsContainer}>
        <div className={CSS.poster}>
          {movie.poster_path && (
            <>
              <img
                width="250"
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
              />
            </>
          )}
        </div>
        <div className={CSS.about}>
          <h1>{movie.title}</h1>
          <p>User score: {Math.trunc(movie.vote_average * 10)}%</p>
          <h3>Owerviev</h3>
          <p>{movie.overview}</p>
          {movie.genres && (
            <>
              <h3>Genres</h3>
              <ul>
                {movie.genres.map(genre => (
                  <li key={genre.id}>{genre.name}</li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
      <div className={CSS.about}>
        <Link to="cast">Cast</Link> <Link to="reviews">Revies</Link>
        <Outlet />
      </div>
    </>
  );
}
