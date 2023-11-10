import React, { useState, useEffect } from "react"

import Navegacao from "../components/Navegacao"
import Janela from "../components/Janela"

import ObterCarrinho from "../functions/ObterCarrinho"
import Pagamento from "../functions/Pagamento"

import ProdutosExemplo from "../datas/ProdutosExemplo"

export default function Carrinho() {

  const [ carrinho, definirCarrinho ] = useState([])
  const [ preco, definirPreco ] = useState(0)

  useEffect(function() {
    const resultado = ObterCarrinho() 
    definirCarrinho(resultado)
  }, [])

  useEffect(function() {
    var total = 0

    carrinho.map(function(codigo) {
      for (const produto of ProdutosExemplo)
        if (produto.codigo == codigo)
          total += parseInt(produto.preco)
    })
    definirPreco(total)
  }, [carrinho])

  return (
    <>
      <Navegacao titulo="VITRINE">
        <a href="/"> Início </a>
        <a href="/promocao"> Promoção </a>
        <a href="/carrinho"> Carrinho </a>
      </Navegacao>

      <Janela>
      <table width="100%">
        <tbody>
          {
            carrinho.map(function(codigo, indice) {
              for (const produto of ProdutosExemplo) {
                if (produto.codigo == codigo)
                  return (
                    <tr key={ indice }>
                      <td> { produto.codigo } </td>
                      <td> { produto.modelo } </td>
                      <td> R$ { produto.preco }.00 </td>
                    </tr>
                  )
              }
            })
          }
        </tbody>
      </table>
      <h1> Total R$ { preco },00 </h1>
      <button onClick={ Pagamento }> 
        Pagamento por Pix
      </button>
      </Janela>
    </>
  )
}
