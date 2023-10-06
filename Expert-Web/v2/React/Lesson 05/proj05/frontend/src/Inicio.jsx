import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'

const ModeloFormulario = styled.form`
    background: white;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 32px;
    width: 420px;
`

export default function Inicio() {

  const dadosInicio = { usuario: "", email: "", senha: "", nascimento: "" }
  const [dados, definirDados] = useState(dadosInicio)

  function Mudar(evento) {
    const valor = evento.target.value
    const campo = evento.target.name
    definirDados({ ...dados, [campo]: valor })
  }

  async function Adicionar(event){
    event.preventDefault()
    await axios.post("http://localhost:4000/", dados)
    definirDados(dadosInicio);
  }

  return (
    <ModeloFormulario onSubmit={ Adicionar }>
      <input
        onChange={Mudar}
        value={dados.nome}
        type="text" name="usuario"
        placeholder="Nome" required />
      <input
        onChange={Mudar}
        value={dados.email}
        type="email" name="email"
        placeholder="Email@mail.com" required />
      <input
        onChange={Mudar}
        value={dados.senha}
        type="password" name="senha"
        placeholder="******" required />
      <input
        onChange={Mudar}
        value={dados.nascimento}
        type="date" name="nascimento"
        required />
      <input type="submit" value="Cadastrar" />
    </ModeloFormulario>
  )
}
