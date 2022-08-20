import Container from 'components/Container/Container';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './components/SharedLayout';

const createAsyncComponent = path => lazy(() => import(path));

const Home = createAsyncComponent('./pages/Home');
const MovieDetails = createAsyncComponent('./pages/MovieDetails/MovieDetails');
const Movies = createAsyncComponent('./pages/Movies');
const Cast = createAsyncComponent('./pages/Cast');
const Reviews = createAsyncComponent('./pages/Reviews');

export function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </Container>
  );
}
