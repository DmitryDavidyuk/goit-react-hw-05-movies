import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'App';
// import Movies from 'pages/Movies';
// import Home from 'pages/Home';
// import MovieDetails from 'pages/MovieDetails';
// import Cast from 'pages/Cast';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
