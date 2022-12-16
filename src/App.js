import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import NotFoundPage from './pages/NotFoundPage';
import Rental from './pages/Rental';

const App = () => {
  return (
<BrowserRouter>
<Routes>
  <Route path='*' element={<NotFoundPage />} />
  <Route path='/' element={<Home />} />
  <Route path='/about' element={<About />} />
  <Route path='/rental' element={<Rental />} />
</Routes>
</BrowserRouter>
  );
};

export default App;
