import "../CSS/combustivel.css";


function Combustivel() {
  function verificarTanque() {
    var nivel = document.getElementById("input-litros").value;
    var painel = document.getElementById("visor");

if (nivel < 20) {
    painel.innerText = "🔴 Alerta: Abasteça agora!";
}else if (nivel <= 50) {
    painel.innerText = "🟡 Atenção: Nível médio.";
  } else {
    painel.innerText = "🟢 Tanque cheio. Boa Viagem!";
  }
}

    return (
        <div className="container-combustivel">
          <h2>Logística TRANSPORTADORA - Nível de Combustível</h2>
          <input type="number" id="input-litros" placeholder="Digite o nível de litros" />
          <button onClick={verificarTanque}>Verificar</button>
          <div id="visor"></div>
        </div>
    );
}

export default Combustivel;
