import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import apiServices from 'API/API';
import imgNotFound from '../img/profile_picture_user_icon_153847.png';

export default function Cast() {
  const { movieId } = useParams();
  const [actors, setActors] = useState(null);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    setStatus('pending');
    apiServices
      .getCastInfo(movieId)
      .then(cast => {
        if (cast.length === 0) {
          return;
        }
        setActors(cast);
        setStatus('resolved');
      })
      .catch(error => {
        console.log(error);
        setStatus('rejected');
      });
  }, [movieId, setStatus]);

  return (
    <>
      {status === 'pending' && <h2>Loading...</h2>}
      {status === 'rejected' && <h2>not found</h2>}
      {status === 'resolved' && (
        <ul>
          {actors.map(actor => (
            <li key={actor.id}>
              <img
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                    : imgNotFound
                }
                alt={actor.original_name}
              />
              <h4>{actor.original_name}</h4>
              <p>{actor.character}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
