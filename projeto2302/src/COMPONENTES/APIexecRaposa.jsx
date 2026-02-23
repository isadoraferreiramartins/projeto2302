import "../CSS/raposadog.css";

function APIexecRaposa() {
  function buscarRaposa() {
    let status = document.getElementById("status-raposa");
    let imagem = document.getElementById("foto-raposa");

    status.innerText = "Buscando Raposa...";
    imagem.style.display = "none";

    fetch("https://randomfox.ca/floof/")
      .then(res => res.json())
      .then(dados => {
        imagem.src = dados.image;
        imagem.style.display = "block";
        status.innerText = "Raposa carregada com sucesso!";
      })
      .catch(() => {
        status.innerText = "A raposa fugiu.";
      });
  }

  function buscarCachorro() {
    let status = document.getElementById("status-cachorro");
    let imagem = document.getElementById("foto-cachorro");

    status.innerText = "Buscando Cachorrinho...";
    imagem.style.display = "none";

    fetch("https://dog.ceo/api/breeds/image/random")
      .then(res => res.json())
      .then(dados => {
        imagem.src = dados.message;
        imagem.style.display = "block";
        status.innerText = "Cachorrinho carregado com sucesso!";
      })
      .catch(() => {
        status.innerText = "O cachorro saiu pra passear.";
      });
  }

  return (
    <div className="raposa-container">
      <h2>API Externa: Raposa e Cachorro</h2>

      <div className="botoes-raposa">
        <button onClick={buscarRaposa} className="btn-raposa">
          Ver Raposa
        </button>

        <button onClick={buscarCachorro} className="btn-cachorro">
          Ver Cachorrinho
        </button>
      </div>

      <p id="status-raposa" className="status-raposa">
        Aguardando comando...
      </p>
        <p id="status-cachorro" className="status-cachorro">
        Aguardando comando...
      </p>

      <img
        id="foto-raposa"
        alt="Animal"
        className="imagem-raposa"
      />
        <img
        id="foto-cachorro"
        alt="Animal"
        className="imagem-cachorro"
      />
    </div>

  );
}

export default APIexecRaposa;