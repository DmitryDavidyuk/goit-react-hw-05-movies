import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { App } from 'App';
import Movies from 'pages/Movies';
import Home from 'pages/Home';
// import MovieDetails from 'pages/MovieDetails';
// import Cast from 'pages/Cast';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="movies" element={<Movies />}>
            {/* <Route path=":movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
            </Route> */}
          </Route>
          <Route
            path="*"
            element={
              <main style={{ padding: '1rem' }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
