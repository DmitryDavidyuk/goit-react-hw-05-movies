import MovieDetails from 'page/MovieDetails';
import { useSearchParams } from 'react-router-dom';
// import { Link } from 'react-router-dom';

export default function Movie() {
  let [searchParams, setSearchParams] = useSearchParams();

  return (
    (
      <form>
        <input
          value={searchParams.get('query') || ''}
          type="text"
          onChange={e => {
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
    ) && <MovieDetails />
  );
}
