import React from "react";
import { useParams } from "react-router-dom";

import Titulo from "../components/Titulo";
import Campo from "../components/Campo";
import Conteudo from "../components/Conteudo";

export default function Postagem() {

  const { nome, descricao } = useParams();

  return (
    <>
      <Titulo nome="Mergulhando no React"/>
      <Campo>
        <Conteudo 
          foto="/foto-homem.jpg" 
          nome={ "@" + nome }
          descricao={ descricao }
        />
      </Campo>
    </> 
  );
}