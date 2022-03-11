var prompt = require("prompt-sync")();
console.clear();

console.log(
  "Um jovem samurai partiu em uma jornada em busca de salvação, ele precisava encontrar 5 talismãs que seriam a única salvação de seu povo, que estavam sendo extintos por uma doença, os 5 talismãs, seriam a única maneira de salvar seu povo, fazendo uma poção mágica de cura."
);

console.log(
  "\nDigite [sim] ou [nao] para as perguntas a baixo e determine sua jornada!\n"
);

let pergunta1 = prompt(
  "O jovem samurai encrontrou o talismã do tigre? "
).toUpperCase();
let pergunta2 = prompt(
  "O jovem samurai encrontrou o talismã do coelho? "
).toUpperCase();
let pergunta3 = prompt(
  "O jovem samurai encrontrou o talismã do cavalo? "
).toUpperCase();
let pergunta4 = prompt(
  "O jovem samurai encrontrou o talismã da cobra? "
).toUpperCase();
let pergunta5 = prompt(
  "O jovem samurai encrontrou o talismã do macaco? "
).toUpperCase();

if (pergunta1 == "SIM") {
  pergunta1 = 1;
} else {
  pergunta1 = 0;
}
if (pergunta2 == "SIM") {
  pergunta2 = 1;
} else {
  pergunta2 = 0;
}
if (pergunta3 == "SIM") {
  pergunta3 = 1;
} else {
  pergunta3 = 0;
}
if (pergunta4 == "SIM") {
  pergunta4 = 1;
} else {
  pergunta4 = 0;
}
if (pergunta5 == "SIM") {
  pergunta5 = 1;
} else {
  pergunta5 = 0;
}

const soma = pergunta1 + pergunta2 + pergunta3 + pergunta4 + pergunta5;

if (soma == 0) {
  console.log("\nO samurai falhou miseravelmente. ");
} else if (soma == 1 || soma == 2) {
  console.log("\nO samurai conseguiu salvar 25% da população da aldeia");
} else if (soma == 3) {
  console.log("\nO samurai conseguiu salvar 50% da população da aldeia");
} else if (soma == 4) {
  console.log("\nO samurai conseguiu salvar 75% da população da aldeia");
} else {
  console.log("\nO samurai conseguiu completar sua missão com perfeição");
}