import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import CSS from './App.module.css';
import Navigation from 'components/Navigation/Navigation';
import Home from 'pages/Home';
import MovieDetails from 'pages/MovieDetails/MovieDetails';
import Movies from 'pages/Movies';
import Cast from 'pages/Cast';
import Reviews from 'pages/Reviews';

export function App() {
  return (
    <div className={CSS.app}>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </div>
  );
}
