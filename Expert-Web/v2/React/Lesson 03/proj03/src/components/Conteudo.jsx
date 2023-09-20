import React, { useState } from 'react'
import styled from 'styled-components'

const ModeloConteudo = styled.div` 
  background: #eee;
  margin-bottom: 16px;
  padding: 16px;
  text-align: center;
  text-decoration: none;
`

export default function Conteudo(props) {
  const [ feito, definirFeito ] = useState(false);

  function Alterar() {
    definirFeito(!feito);
  }

  return (
    <ModeloConteudo onClick={ Alterar } estado={ feito.toString() }>
      { props.texto }
    </ModeloConteudo>
  )
}
