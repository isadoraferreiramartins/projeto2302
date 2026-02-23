import { listaProdutos } from "../dados/data";

function GestaoProdutos() {
  // Função para decidir a mensagem de inventário
  const verificarDisponibilidade = (quantidade) => {
    let mensagem = "";

    if (quantidade === 0) {
      mensagem = "Intem indisponível no momento!";
    } else if (quantidade < 5) {
      mensagem = "atenção: Estoque baixo!";
    } else {
      mensagem = "Produto em estoque.";
    }
    return mensagem;
  };


// Função para definir o Departamento.
const formatarCategoria = (cat) => {
  let textoFormatado = "";
  if (cat === "Periféricos") {
    textoFormatado = "Setor de Hardware e Entrada";
  } else if (cat === "Video") {
    textoFormatado = "Setor de Monitores e Tela";
  } else {
    textoFormatado = "Setor Geral";
  }

  return textoFormatado;
};

  // Verificação de segurança
  if (listaProdutos.length === 0) {
    return (
      <div>
        <h1>Aviso</h1>
        <p>Não existem produtos cadastrados.</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Painel de Inventário</h1>

      {listaProdutos.map((item) => (
        <div key={item.id}>
          <h3>Produto: {item.nome}</h3>

          <ul>
            <li>Quantidade: {item.estoque}</li>
            <li>Status: {verificarDisponibilidade(item.estoque)}</li>
            <li>Localização: {formatarCategoria(item.categoria)}</li>
          </ul>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default GestaoProdutos;