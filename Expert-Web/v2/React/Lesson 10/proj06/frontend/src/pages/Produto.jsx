import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"

import Navegacao from '../components/Navegacao'
import Exibidor from '../components/Exibidor'


//import ProdutosExemplo from "../datas/ProdutosExemplo" 
import { ObterProdutoCodigo } from "../functions/RequisicaoServidor"

export default function Produto() {
  
  const { codigo } = useParams()
  const [ produto, definirProduto ] = useState({})

  useEffect(function() {
    ObterProdutoCodigo(codigo)
      .then(function(resposta) {
        if (resposta.status === 200) {
          definirProduto( resposta.data )
        }
      })
      .catch(function(erro) {
        console.log(erro)
      })
  }, [codigo])

  return (
    <>
      <Navegacao titulo="Vitrine">
        <a href="/"> Início </a>
        <a href="/promocao"> Promoção </a>
        <a href="/carrinho"> Carrinho </a>
      </Navegacao>

      <Exibidor produto={ produto }/>
    </>
  )
}
