import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import GlobalStyle from './styles/GlobalStyle';
import App from './App';
import Home from './pages/Home/Home';

const rootElement = document.getElementById('root');
render(
  <BrowserRouter>
  <GlobalStyle />
    <Routes>
      <Route path="/" element={<App />} />
      <Route index element={<Home />} />
    </Routes>
  </BrowserRouter>,
  rootElement,
);
