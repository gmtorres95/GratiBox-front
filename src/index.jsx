import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import GlobalStyle from './styles/GlobalStyle';
import App from './App';
import Home from './pages/Home/Home';
import SignUp from './pages/SignUp/SignUp';

const rootElement = document.getElementById('root');
render(
  <BrowserRouter>
  <GlobalStyle />
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="sign-up" element={<SignUp />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement,
);
