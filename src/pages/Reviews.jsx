import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import apiServices from 'API/API';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    apiServices
      .getMovieReview(movieId)
      .then(results => {
        if (results.length === 0) {
          setStatus('idle');
          return;
        }
        setReviews(results);
        setStatus('resolved');
      })
      .catch(error => {
        setStatus('rejected');
      });
  }, [movieId]);

  return (
    <>
      {status === 'idle' && <p>We don't have any reviews for this movie.</p>}
      {status === 'resolved' && (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <h2>Author: {review.author}</h2>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
