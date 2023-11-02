import React from 'react'

import Navegacao from '../components/Navegacao'
import Exibidor from '../components/Exibidor'

import ProdutosExemplo from '../datas/ProdutosExemplo'

export default function Promocao() {
  return (
    <>
      <Navegacao titulo="VITRINE">
        <a href="/"> Início </a>
        <a href="/promocao"> Promoção </a>
        <a href="/carrinho"> Carrinho </a>
      </Navegacao>
      {
        ProdutosExemplo.map(function(produto, indice) {
          if (produto.promocao === true)
            return <Exibidor 
              key={ indice }
              produto={ produto }/>
        })
      }
    </>
  )
}
