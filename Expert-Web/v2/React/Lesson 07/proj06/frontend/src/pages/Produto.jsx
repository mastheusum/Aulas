import React from 'react'

import Navegacao from '../components/Navegacao'
import Exibidor from '../components/Exibidor'

import ProdutosExemplo from '../datas/ProdutosExemplo'

export default function Produto() {
  return (
    <>
      <Navegacao titulo="Vitrine">
        <a href="/"> Início </a>
        <a href="/produto/1234"> Promoção </a>
        <a href="/carrinho"> Carrinho </a>
      </Navegacao>

      <Exibidor produto={ ProdutosExemplo[0] }/>
    </>
  )
}
