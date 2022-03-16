const prompt = require("prompt-sync")();

let continuar = "sim"

while (continuar == 'sim') {

let humano = 0

let computador = 0

let empate = 0

console.log("Vamos jogar pedra, papel e tesoura?\n");

const rodadas = +prompt("Quantas rodadas você quer jogar: ") + 1;

for (let i = 1; i < rodadas; i++) {
  console.log(`Escolha um número referente a opção:
[0] - Pedra
[1] - Papel
[2] - Tesoura\n`);

  const lista = ["Pedra", "Papel", "Tesoura"];

  let escolha = +prompt("Escolha uma opção: ");

  const escolha2 = Math.floor(Math.random() * 3);

  while (escolha > 2) {
    escolha = prompt("\nDigite um dos números correspondente: ");
  }
  console.log(`Você está na ${i} rodada`)
  console.log(`\nSua escolha foi ${lista[escolha]}\n`);
  console.log(`A escolha do computador foi ${lista[escolha2]}\n`);

  if (escolha == escolha2) {
    console.log("Empatou");
    empate = empate + 1
  } else if (escolha == 0 && escolha2 == 1) {
    console.log("O computador ganhou");
    computador = computador + 1
  } else if (escolha == 0 && escolha2 == 2) {
    console.log("Você ganhou");
    humano = humano + 1
  } else if (escolha == 1 && escolha2 == 0) {
    console.log("Você ganhou");
    humano = humano + 1
  } else if (escolha == 1 && escolha2 == 2) {
    console.log("o computador ganhou");
    computador = computador + 1
  } else if (escolha == 2 && escolha2 == 0) {
    console.log("O computador ganhou");
    computador = computador + 1
  } else {
    console.log("Você ganhou");
    humano = humano + 1
  }
}

console.log(`O computador fez ${computador} pontos
Você fez ${humano} pontos
E teve ${empate} empate(s)`)

if (computador > humano) {
    console.log('O computador foi o grande campeão')
} else if (computador == humano){
    console.log('As partidas acabaram empatadas')
} else {
    console.log('voce foi o grande campeão')
}
continuar = prompt('Digite [sim] para jogar novamente ou [nao] para sair: ').toLowerCase()

while (continuar != 'sim' && continuar != 'nao') {
    continuar = prompt('Digite [sim] para jogar novamente ou [nao] para sair: ').toLowerCase()
}
}

