import React, { useState } from 'react'

import Formulario from "../components/Formulario"

import ProdutoInicial from '../datas/ProdutoInicial'

import { CatalogarProduto } from "../functions/RequisicaoServidor"

export default function Catalogar() {
  
  const [ produto, definirProduto ] = useState(ProdutoInicial)

  function MudarTexto(evento) {
    const valor = evento.target.value 
    const campo = evento.target.name 
    definirProduto({ ...produto, [campo]: valor })
  }

  function MudarPromo(evento) {
    const valor = evento.target.checked 
    definirProduto( { ...produto, "promocao": valor } )
  }

  function MudarImagem(evento) {
    const indice = evento.target.id 
    const imagens = produto.imagens 
    imagens[indice] = evento.target.value 
    definirProduto({ ...produto, "imagens": imagens })
  }

  function Catalogar(evento) {
    evento.preventDefault()
    CatalogarProduto(produto)
    definirProduto(ProdutoInicial)
  }

  return (
    <Formulario onSubmit={ Catalogar }>
      <input value={ produto.codigo } onChange={ MudarTexto }
          type="text" name="codigo" placeholder="Código do produto" required />
      <input value={ produto.marca } onChange={ MudarTexto }
          type="text" name="marca" placeholder="Marca do produto" required />
      <input value={ produto.modelo } onChange={ MudarTexto }
          type="text" name="modelo" placeholder="Modelo do produto" required />
      <input value={ produto.preco } onChange={ MudarTexto }
          type="number" name="preco" placeholder="R$ 1,000.00" required />
      <input value={ produto.descricao } onChange={ MudarTexto }
          type="text" name="descricao" placeholder="Descrição do produto" required />
      <input value={ produto.imagens[0] } onChange={ MudarImagem }
          type="url" name="imagens" id="0" placeholder="Imagem 1 do produto" required />
      <input value={ produto.imagens[1] } onChange={ MudarImagem }
          type="url" name="imagens" id="1" placeholder="Imagem 2 do produto" required />
      <input value={ produto.imagens[2] } onChange={ MudarImagem }
          type="url" name="imagens" id="2" placeholder="Imagem 3 do produto" required />
      <div>
        <label htmlFor="promocao"> Promoção? </label>
        <input
          checked={ produto.promocao }
          onChange={ MudarPromo }
          type="checkbox" name="promocao"
          id="promocao" />
      </div>
      <input type="submit" value="Catalogar" />
    </Formulario>
  )
}
