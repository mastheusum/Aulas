import axios from "axios"

function CatalogarProduto(produto) {
  return axios({
    method: "POST",
    url: "http://localhost:4000/catalogar",
    data: {
      codigo: produto.codigo,
      marca: produto.marca,
      modelo: produto.modelo,
      preco: produto.preco,
      descricao: produto.descricao,
      imagens: produto.imagens,
      promocao: produto.promocao 
    }
  })
}

function ObterProdutos() {
  return axios({
    method: "GET",
    url: "http://localhost:4000/produtos"
  })
}

function ObterProdutoCodigo(codigo) {
  return axios({
    method: "GET",
    url: `http://localhost:4000/produto/${codigo}`
  })
}

function ObterPromocao() {
  return axios({
      method: "GET",
      url: "http://localhost:4000/promocao"
  })
}

export {
  CatalogarProduto,
  ObterProdutos,
  ObterProdutoCodigo,
  ObterPromocao
}