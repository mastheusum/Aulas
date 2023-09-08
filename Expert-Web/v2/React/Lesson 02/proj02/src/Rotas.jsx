import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom" 

import Inicio from "./pages/Inicio";
import Postagem from "./pages/Postagem";

export default function Rotas() {
  return (
    <BrowserRouter>
      <Routes>

        <Route index path='/' element={ <Inicio /> } />
        <Route path="/postagem/:nome/:descricao" element={ <Postagem /> } />

      </Routes>
    </BrowserRouter>
  );
}