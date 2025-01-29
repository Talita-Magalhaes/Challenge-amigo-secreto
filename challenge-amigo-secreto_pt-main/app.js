// Array para armazenar os amigos
let amigos = [];

// Função para adicionar amigos à lista
function adicionarAmigo() {
  // Captura o valor do campo de entrada
  let nomeAmigo = document.getElementById("amigo").value;

  if (nomeAmigo === "") {
    alert("Por favor, insira um nome.");
    return;
  }

  amigos.push(nomeAmigo);

  document.getElementById("amigo").value = "";

  atualizarListaAmigos();
}

function atualizarListaAmigos() {
  let listaExibicao = document.getElementById("listaAmigos");

  listaExibicao.innerHTML = "";

  for (let amigo of amigos) {
    let li = document.createElement("li");
    li.textContent = amigo; // Define o nome como o conteúdo do <li>
    listaExibicao.appendChild(li); // Adiciona o <li> à lista
  }
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Por favor, adicione amigos antes de sortear.");
    return;
  }

  let indiceSorteado = Math.floor(Math.random() * amigos.length);

  let amigoSorteado = amigos[indiceSorteado];

  let resultado = document.getElementById("resultado");
  resultado.innerHTML = `<li>Amigo sorteado: ${amigoSorteado}</li>`;
}
