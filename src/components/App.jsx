import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import Movie from './pages/Movie';

export function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="Home" element={<Home />} />
          <Route path="Movie" element={<Movie />} />
        </Route>
      </Routes>
    </div>
  );
}
