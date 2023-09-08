import React from "react";

import Titulo from "../components/Titulo" ;
import Campo from "../components/Campo";
import Conteudo from "../components/Conteudo";

export default function Inicio() {
  return (
    <>
      <Titulo nome="Mergulhando no React"/>

      <Campo>
        <Conteudo 
          foto="/foto-mulher.jpg" 
          nome="@mulher" 
          descricao="Lorem ipsum dolor sit amet consectetur adipisicing elit." 
        />

        <Conteudo 
          foto="/foto-homem.jpg" 
          nome="@homem" 
          descricao="Lorem ipsum dolor sit amet consectetur adipisicing elit." 
        />
      </Campo>
    </>
  );
}