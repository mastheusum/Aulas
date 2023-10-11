import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Vitrine from './pages/Vitrine';

export default function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route inde path='/' element={ <Vitrine /> } />
      </Routes>
    </BrowserRouter>
  )
}
