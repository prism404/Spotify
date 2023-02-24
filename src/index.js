import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import Albums from './routes/albums';
import Genre from './routes/genre';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
   <Routes>
      <Route path="/" element={<App />} />
      <Route path="albums" element={<Albums />} />
      <Route path="genre" element={<Genre />} />
    </Routes>
  </BrowserRouter>
);

reportWebVitals();