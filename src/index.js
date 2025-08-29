import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Garage from './App/Garage/Page';
import Winners from './App/Winners/Page';
import Layout from './Layout';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
         <Route path="/" element={<App />} />
          <Route path="/" element={<Garage />} />
          <Route path="/winners" element={<Winners />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
