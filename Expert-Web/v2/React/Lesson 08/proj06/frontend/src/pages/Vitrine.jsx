import React from 'react'

import Navegacao from '../components/Navegacao'
import Principal from '../components/Principal'

import ProdutosExemplo from '../datas/ProdutosExemplo'

export default function Vitrine() {
  return (
    <>
      <Navegacao titulo="Vitrine">
        <a href="/"> Início </a>
        <a href="/promocao"> Promoção </a>
        <a href="/carrinho"> Carrinho </a>
      </Navegacao>

      <Principal produtos={ ProdutosExemplo }/>
    </>
  )
}
