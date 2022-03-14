var prompt = require("prompt-sync")();
console.clear();

console.log(
  "Um jovem samurai partiu em uma jornada em busca de salvação, ele precisava encontrar 5 talismãs que seriam a única salvação de seu povo, que estavam sendo extintos por uma doença, os 5 talismãs, seriam a única maneira de salvar seu povo, fazendo uma poção mágica de cura."
);

console.log(
  "\nDigite [sim] ou [nao] para as perguntas a baixo e determine sua jornada!\n"
);

let pergunta = [];

let i = 0;

pergunta.push(
  prompt("O jovem samurai encrontrou o talismã do tigre? ").toUpperCase()
);

while (pergunta[i] != "SIM" && pergunta[i] != "NAO") {
  console.log("O jovem samurai encrontrou o talismã do tigre? ");
  pergunta[i] = prompt("Responda com sim ou nao: ").toUpperCase();
  console.clear();
}

i++;

pergunta.push(
  prompt("O jovem samurai encrontrou o talismã do coelho? ").toUpperCase()
);

while (pergunta[i] != "SIM" && pergunta[i] != "NAO") {
  console.log("O jovem samurai encrontrou o talismã do coelho? ");
  pergunta[i] = prompt("Responda com sim ou nao: ").toUpperCase();
  console.clear();
}

i++;

pergunta.push(
  prompt("O jovem samurai encrontrou o talismã do cavalo? ").toUpperCase()
);

while (pergunta[i] != "SIM" && pergunta[i] != "NAO") {
  console.log("O jovem samurai encrontrou o talismã do cavalo? ");
  pergunta[i] = prompt("Responda com sim ou nao: ").toUpperCase();
  console.clear();
}

i++;

pergunta.push(
  prompt("O jovem samurai encrontrou o talismã da cobra? ").toUpperCase()
);

while (pergunta[i] != "SIM" && pergunta[i] != "NAO") {
  console.log("O jovem samurai encrontrou o talismã do cobra? ");
  pergunta[i] = prompt("Responda com sim ou nao: ").toUpperCase();
  console.clear();
}

i++;

pergunta.push(
  prompt("O jovem samurai encrontrou o talismã do macaco? ").toUpperCase()
);

while (pergunta[i] != "SIM" && pergunta[i] != "NAO") {
  console.log("O jovem samurai encrontrou o talismã do macaco? ");
  pergunta[i] = prompt("Responda com sim ou nao: ").toUpperCase();
  console.clear();
}

for (let j = 0; j < 5; j++) {
  if (pergunta[j] == "SIM") {
    pergunta[j] = 1;
  } else if (pergunta[j] == "NAO") {
    pergunta[j] = 0;
  }
  if (pergunta[j] == "SIM") {
    pergunta[j] = 1;
  } else if (pergunta[j] == "NAO") {
    pergunta[j] = 0;
  }
  if (pergunta[j] == "SIM") {
    pergunta[j] = 1;
  } else if (pergunta[j] == "NAO") {
    pergunta[j] = 0;
  }
  if (pergunta[j] == "SIM") {
    pergunta[j] = 1;
  } else if (pergunta[j] == "NAO") {
    pergunta[j] = 0;
  }
  if (pergunta[j] == "SIM") {
    pergunta[j] = 1;
  } else if (pergunta[j] == "NAO") {
    pergunta[j] = 0;
  }
}

const soma = pergunta[0] + pergunta[1] + pergunta[2] + pergunta[3] + pergunta[4];

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