import React from 'react';
import styled from 'styled-components';

import SalvarCarrinho from "../functions/SalvarCarrinho.js" 

const Modelo = styled.div`
  background: #fff;
  display: flex;
  margin: 32px 0;
  overflow: hidden;
`

const ModeloImagens = styled.div`
  display: flex;
  overflow-x: scroll;
  max-width: 480px;
`

const ModeloDados = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
`

export default function Exibidor(props) {
  return props.produto !== undefined > 0 ?
    <Modelo>
      <ModeloImagens>
        <img  
          src={ props.produto.imagens[0] } 
          alt="Foto do Produto" 
          height={ 450 }/>
        <img
          src={ props.produto.imagens[1] }
          alt="Foto do Produto"
          height={ 450 }/>
        <img
          src={ props.produto.imagens[2] }
          alt="Foto do Produto"
          height={ 450 }/>
      </ModeloImagens>
      <ModeloDados>
        <div> { props.produto.marca } </div>
        <div> { props.produto.modelo } </div>
        <div> R$ { props.produto.preco },00 </div>
        <div>
          { props.produto.descricao }
        </div>
        <button onClick={ () => SalvarCarrinho(props.produto.codigo) }>
          Adicionar ao Carrinho
        </button>
      </ModeloDados>
    </Modelo>
  :
    <Modelo>
      <ModeloDados> Produto não encontrado! </ModeloDados> 
    </Modelo>
}
