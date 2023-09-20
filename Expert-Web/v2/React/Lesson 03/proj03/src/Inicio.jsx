import React from "react";
import Titulo from "./components/Titulo";
import Campo from "./components/Campo";
import Conteudo from "./components/Conteudo";

export default function Inicio() {
  return(
    <>
      <Titulo nome="Velejando com o React" />
      <Campo id='1'>
        Teste
      </Campo>
      <Campo id='2'>
        <Conteudo texto="Tirar o lixo" />
        <Conteudo texto="Fazer o café" />
      </Campo>
    </>
  );
}