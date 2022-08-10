import MovieDetails from 'page/MovieDetails';
import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import Movie from './pages/Movie';

export function App() {
  return (
    <div className="App">
      <Layout />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="movie/:movieid" element={<MovieDetails />}></Route>
      </Routes>
    </div>
  );
}
