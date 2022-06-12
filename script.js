let x;
let y;
let z;

function selecionarPrato(elemento) {
  pratoSelecionado = elemento.querySelector(".descricao");
  let botaoClicado = document.querySelector(".pratos .borda");
  if (botaoClicado !== null) {
    let botaoClicado2 = botaoClicado.querySelector(".ion");

    botaoClicado.classList.remove("borda");
    botaoClicado2.classList.add("escondido");
  }

  elemento.classList.add("borda");
  elemento.querySelector(".ion").classList.remove("escondido");

  confirmarPedido();
}

function selecionarBebida(elemento2) {
  bebidaSelecionada = elemento2.querySelector(".descricao");
  let botaoClicado = document.querySelector(".bebidas .borda");
  if (botaoClicado !== null) {
    let botaoClicado2 = botaoClicado.querySelector(".ion");

    botaoClicado.classList.remove("borda");
    botaoClicado2.classList.add("escondido");
  }

  elemento2.classList.add("borda");
  elemento2.querySelector(".ion").classList.remove("escondido");

  confirmarPedido();
}

function selecionarSobremesa(elemento3) {
  sobremesaSelecionada = elemento3.querySelector(".descricao");
  let botaoClicado = document.querySelector(".sobremesas .borda");

  if (botaoClicado !== null) {
    let botaoClicado2 = botaoClicado.querySelector(".ion");

    botaoClicado.classList.remove("borda");
    botaoClicado2.classList.add("escondido");
  }

  elemento3.classList.add("borda");
  elemento3.querySelector(".ion").classList.remove("escondido");
  confirmarPedido();
}
function confirmarPedido() {
  if (pratoSelecionado && bebidaSelecionada && sobremesaSelecionada) {
    let finalizacao = document.querySelector(".finalizar");
    finalizacao.innerHTML = "Fechar pedido";
    finalizacao.classList.add("corfundo");
  }
}

function whatsapp() {
  let prato = pratoSelecionado.querySelector("div :nth-child(1)").innerHTML;
  let bebida = bebidaSelecionada.querySelector("div :nth-child(1)").innerHTML;
  let sobremesa = sobremesaSelecionada.querySelector("div :nth-child(1)").innerHTML;
  let valorPrato = pratoSelecionado
    .querySelector("div :nth-child(3)")
    .innerHTML.split("R$ ")[1]
    .replace(",", ".");

  let valorBebida = bebidaSelecionada
    .querySelector("div :nth-child(3)")
    .innerHTML.split("R$ ")[1]
    .replace(",", ".");
  let valorSobremesa = sobremesaSelecionada
    .querySelector("div :nth-child(3)")
    .innerHTML.split("R$ ")[1]
    .replace(",", ".");
  let total = Number(valorBebida) + Number(valorPrato) + Number(valorSobremesa);

  let url = "https://wa.me/5521998957110?text=";
  let mensagem = `Olá, gostaria de fazer o pedido:
  - Prato: ${prato}
  - Bebida: ${bebida}
  - Sobremesa: ${sobremesa}
  Total: R$ ${total.toFixed(2)}
  `;

  let encoded = encodeURIComponent(mensagem);

  window.open(`${url}${encoded}`);
}
