import React, { useState, useEffect } from 'react'
import axios from 'axios'

import background from './background-site.jpg'

import Titulo from './components/Titulo'
import Campo from './components/Campo'
import Conteudo from './components/Conteudo'

export default function Inicio() {

  const [ codigos, definirCodigos ] = useState([]) 
  const [ conteudos, definirConteudos ] = useState({})

  useEffect(function() {
    axios.get("http://localhost:4000/api")
    .then(function(resposta) {
      const dados = resposta.data 
      const lista = Object.keys(dados)

      console.log(lista)
      console.log(dados)
      
      definirCodigos(lista) 
      definirConteudos(dados) 

      console.log('----',codigos)
      console.log('----',dados)
    })
    .catch(function(erro) {
      console.log(erro)
    })
  });

  return (
    <div> 
      <Titulo nome="Acelerando no React" imagem={ background } />
      <Campo> 
        {/* {
          codigos.map(function(codigo) {
            return <Conteudo 
              key={ codigo }
              capa={ conteudos[codigo].capa }
              titulo={ conteudos[codigo].titulo }
              genero={ conteudos[codigo].genero }
              ano={ conteudos[codigo].ano }
              autor={ conteudos[codigo].autor }
              />    
          })
        } */}
      </Campo>
    </div>
  )
}
