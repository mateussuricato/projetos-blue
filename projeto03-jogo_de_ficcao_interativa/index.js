//Você so vai conseguir ganhar o game se escolher o ataque mais forte sempre, e as vezes mesmo assim se não tiver sorte vai passar sufoco no freeza e no cell, até parece que o sorteio dos números estão viciados, mas não estão kkkkkk

const prompt = require("prompt-sync")();

let Vegeta = {
  nome: "Vegeta",
  poder: 10001,
  vida: 200,
};

let Freeza = {
  nome: "Freeza",
  poder: 100001,
  vida: 300,
};

let Cell = {
  nome: "Cell",
  poder: 1000001,
  vida: 400,
};

let MajinBoo = {
  nome: "Majin Boo",
  poder: 10000001,
  vida: 500,
};

let goku = {
  nome: "Goku",
  poder: 9000,
  vida: 100,
};

let saibaman = {
  nome: "saibaman",
  vida: 100,
};

// o tempo passa por essa variavel a baixo, o tempo do jogo passa por fases. Essa variavel i é de um for e está no escopo local da function brigaVilao()
let i = 0;

const personagem = "Goku";

const viloes = [Vegeta, Freeza, Cell, MajinBoo];

const trans = [
  "Kaioken",
  "Super Sayajin",
  "Super Sayajin 2",
  "Super Sayajin 3",
];

const bot = "saibaman";

let ataque;

let decisao;

let restart;

const vida = 100;

const vidaViloes = [200, 300, 400, 500];

const ataqueGoku = [
  `[1] - Ataque Básico (20 de dano)
[2] - Kamehameha (30 de dano)
[3] - Genki Dama (40 de dano)`,
  `[1] - Ataque Básico (40 de dano)
[2] - Kamehameha (60 de dano)
[3] - Genki Dama (80 de dano)`,
  `[1] - Ataque Básico (60 de dano)
[2] - Kamehameha (80 de dano)
[3] - Genki Dama (150 de dano)`,
  `[1] - Ataque Básico (80 de dano)
[2] - Kamehameha (100 de dano)
[3] - Genki Dama (180 de dano)`,
];

const ataqueGoku0 = [20, 40, 60, 80];
const ataqueGoku1 = [30, 60, 80, 100];
const ataqueGoku2 = [40, 80, 150, 250];

const ataqueViloes = [
  `[1] - Soco (10 de dano)
[2] - Chute (10 de dano)
[3] - Galick Ho (30 de dano)`,
  `[01 - Soco (20 de dano)
[2] - Chute (20 de dano)
[3] - Super Nova (40 de dano)`,
  `[1] - Soco (30 de dano)
[2] - Chute (30 de dano)
[3] - Perfect Barrier (50 de dano)`,
  `[1] - Soco (40 de dano)
[2] - Chute (40 de dano)
[3] - Raio Transmutador (60 de dano)`,
];

const ataqueViloes0e1 = [10, 20, 30, 40];
const ataqueViloes2 = [30, 40, 50, 60];

const historia = [
  "Vegeta veio para terra com uma nave espacial, para matar o goku e destruir o planeta terra, ele já matou alguns amigos de goku e está pronto para atacar",
  "Freeza é um alienigena assassino que destruir o planeta onde Goku tinha nascido, ele fez 3 tranformações e ja matou o Vegeta, Kurilin e deixou picolo muito ferido, ajude goku a derrotar ele",
  "Cell é um Android criado pelo Dr. Gero, ele é muito mais forte que o Freeza e já engoliu os Androids 17 e 18, ele está na sua Perfect Form, criou uma arena de batalha para derrotar todos os gueiros Z, Goku ajude Gohan a derrotar ele",
  "Majin Boo a entidade mais forte de toda a serie de Dragon Ball Z. Após Super Boo perder Boo gordo, ele assume sua forma Pura novamente. Após uma batalha com Goku, Vegeta, e Boo gordo no Planeta Sagrado de Kaiohshin, Goku salve o planeta novamente",
];

function inicio() {
  console.log(`⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡴⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⢤⠀⢀⡠⠀⠀⠀⣀⠠⢄⠂⠀⠀⠀⠀⢀⢔⠍⢀⢁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡠⡞⢡⡧⠀⠁⣁⠠⠒⠝⢈⢴⠂⣀⠤⢄⢒⠈⠑⠁⠀⠌⣸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀⢠⢊⠊⠀⣴⠀⠀⢐⠁⠊⠀⠤⢡⡫⠑⣄⠃⠁⢀⠄⢀⠀⣈⠀⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣔⡃⠀⡔⢁⠂⠀⢸⢸⢊⠔⠁⠀⠠⢊⣡⠽⢊⢽⠃⡀⠀⠁⠠⠂⣐⠆⠘⣇⢴⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡘⢸⢠⠎⠀⠂⠀⠀⠈⢸⠔⠀⢀⠠⡣⠁⠀⡠⡢⡷⠊⠀⢀⠔⢀⢌⠊⣠⠘⢡⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠰⠀⢻⡌⠀⢸⠀⠀⠀⢀⠈⡠⠂⠁⠈⠀⠄⡐⡑⠈⠀⠀⣠⠋⣠⠡⠓⠔⠁⡠⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠇⠀⡄⡇⠀⢸⠀⠀⡀⠘⡔⠠⠊⠀⠀⠌⡐⠀⠐⠀⠀⡞⠃⠋⠀⠈⠀⠀⢔⠍⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⠀⠀⢀⠁⠀⢸⡀⠀⡇⡘⡬⠁⠀⠀⠈⠠⠀⣁⠃⠈⠀⠀⢀⠀⠂⠁⢀⣪⡎⠠⢤⡴⢒⡖⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣌⡀⠈⣠⠀⠘⠃⠀⠱⠰⠂⠀⠀⡌⠀⠀⢂⢉⢠⠰⠔⠂⠀⠀⠠⡢⡫⢗⢐⠍⠁⢀⠍⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣄⠢⠕⠖⡆⠏⡩⡰⠝⠀⠀⠀⠀⠀⠨⠀⠀⠰⣄⠃⠁⠀⠀⣀⠀⡔⠵⢚⠩⣰⡫⢂⡴⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⢎⣤⢆⠔⠀⠠⠊⠀⠀⢀⠄⠂⠐⠁⠀⠀⢉⠄⠀⠸⠀⠠⠀⠀⠈⠀⠀⠂⡠⡪⢁⣴⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡾⠃⡅⠀⡀⡄⠀⠀⠀⠀⠀⠀⠁⠀⠓⠀⠀⠀⢠⠀⠀⠁⠀⠀⠀⡀⢀⠄⢈⢜⠨⠊⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢌⠕⠈⠀⠀⠀⠀⡀⠀⠀⡀⠀⠇⠀⣀⠜⠇⠀⣠⢁⠂⠑⢈⢀⠔⠋⠉⡁⡐⠖⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⠖⠁⠀⣰⠠⢅⠁⡄⠀⠐⠋⠠⢠⡤⡒⣥⡠⡤⠊⠘⡄⢰⠘⢌⠰⠀⠋⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⡈⠈⡌⢀⠊⠁⢂⣀⡈⠀⠀⠘⠁⠴⢔⠔⠤⠖⣨⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠐⣄⣀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⡦⠊⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⠀⢀⣑⡔⠀⠀⠀⡀⠄⡀⠀⠀⠀⢰⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡆⠒⠂⠈⡣⡫⣂⠡⠑⢡⠀⠁⡠⠊⠄⠀⠀⠀⠸⠀⠈⠒⢄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⡐⠈⠀⠠⢊⠊⠁⠀⠄⠃⠈⡠⠊⢀⠜⠀⠀⠀⠀⠀⠀⠂⠀⠀⠑⠄⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣔⢃⠀⠀⠀⠂⡬⠌⠁⠪⠼⠀⠚⠒⠂⢈⠀⠒⠂⠠⢀⡀⠀⠀⠐⠒⠠⠀⠀⠈⠐⢄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠰⠁⠀⡐⠀⠘⢰⠀⠀⠐⠁⠀⠀⠀⠀⠀⠀⠀⠈⠑⠢⢄⢨⠂⠐⢦⠀⠀⠀⠱⡄⠀⠀⢣⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡆⠸⠀⠁⠁⠂⡄⠈⠰⠒⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡁⠀⠀⠀⠀⠀⠀⠀⠈⡀⠀⠀⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣁⡀⠀⢸⠀⠀⠃⠀⡇⠀⠀⠀⠀⠀⠀⠀⢀⠀⠀⠁⠂⠤⣁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀`)

  console.log("DRAGON BALL Z - TERMINAL\n");

  console.log(
    `Durante nossa jornada você irá enfrentar os 4 principais vilões de Dragon Ball Z (${viloes[0].nome}, ${viloes[1].nome}, ${viloes[2].nome} e ${viloes[3].nome}). Esse jogo terá 4 fases, cada fase correspondente a um vilão. Boa sorte!\n`
  );
  let continuar = prompt("Para continuar sempre aperte ENTER ");
  console.log(
    `\nOi eu sou o ${personagem}, e preciso que você me ajude com suas escolhas, a derrotar o inimigo!`
  );
  prompt("\nENTER...\n");
  console.log(
    "Nosso primeiro inimigo é o Vegeta, um alienigena que veio de outro planeta, ele pertence a raça sayajin e seu poder é de mais de 8 mil, tome as melhores decisões e me ajude a salvar o planeta Terra."
  );
  prompt("\nENTER...");
}

function parabens() {
  console.log(`
  ██████╗  █████╗ ██████╗  █████╗ ██████╗ ███████╗███╗   ██╗███████╗
  ██╔══██╗██╔══██╗██╔══██╗██╔══██╗██╔══██╗██╔════╝████╗  ██║██╔════╝
  ██████╔╝███████║██████╔╝███████║██████╔╝█████╗  ██╔██╗ ██║███████╗
  ██╔═══╝ ██╔══██║██╔══██╗██╔══██║██╔══██╗██╔══╝  ██║╚██╗██║╚════██║
  ██║     ██║  ██║██║  ██║██║  ██║██████╔╝███████╗██║ ╚████║███████║
  ╚═╝     ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═════╝ ╚══════╝╚═╝  ╚═══╝╚══════╝
                                                                    
  `)
  console.log(
    `\nVOCÊ CONSEGUIU AJUDAR O GOKU SALVAR A TERRA DE TODAS AS AMEAÇAS, VOCÊ ESCOLHEU OS MELHORES ATAQUES E VENCEU TODOS COM MAESTRIA!`
  );
}

function briga(nome, nome2) {
  restart = "s";

  while (restart == "s") {
    console.log(
      `\nO ${bot} partiu pra cima, você tem a opção de defender ou atacar\n`
    );
    decisao = +prompt(`Digite [1] para Defender [2] para Atacar: `);
    while (decisao > 2 || decisao < 1 || isNaN(decisao)) {
      decisao = +prompt(`Digite [1] para Defender [2] para Atacar: `);
    }

    if (decisao == 1) {
      console.log(`\nVocê defendeu, sua vida é de ${nome2.vida}%`);
      prompt(`\nDigite ENTER para atacar... `);
    }

    while (nome.vida > 1 && nome2.vida > 1) {
      console.log(`\nVocê tem 3 opções de ataque:

[1] - Ataque Básico (20 de dano)
[2] - Kamehameha (30 de dano)
[3] - Genki Dama (40 de dano)\n`);

      ataque = +prompt(`Digite o número correspondente ao ataque: `);
      while (ataque > 3 || ataque < 1 || isNaN(ataque)) {
        ataque = +prompt(`Digite o número correspondente ao ataque: `);
      }
      if (ataque == 1) {
        nome.vida = nome.vida - 20;
        console.log(
          `\nVocê causou 20 de dano e a vida do ${bot} agora é ${nome.vida}`
        );
      } else if (ataque == 2) {
        nome.vida = nome.vida - 30;
        console.log(
          `\nVocê causou 30 de dano e a vida do ${bot} agora é ${nome.vida}`
        );
      } else if (ataque == 3) {
        nome.vida = nome.vida - 40;
        console.log(
          `\nVocê causou 40 de dano e a vida do ${bot} agora é ${nome.vida}`
        );
      }

      console.log(`\nVez do ${bot} te atacar, os ataques dele são: 
  
[1] - Soco (10 de dano)
[2] - Chute (10 de dano)
[3] - Energia de ki (40 de dano)`);
      ataqueVilao = Math.floor(Math.random() * 3) + 1;
      if (ataqueVilao == 1 || ataqueVilao == 2) {
        nome2.vida = nome2.vida - 10;
        console.log(`\nO ${bot} escolheu o número ${ataqueVilao} como ataque`);
        console.log(`Você tomou 10 de dano sua vida agora é ${nome2.vida}`);
      } else if (ataqueVilao == 3) {
        nome2.vida = nome2.vida - 40;
        console.log(`\nO ${bot} escolheu o número ${ataqueVilao} como ataque`);
        console.log(`Você tomou 40 de dano sua vida agora é ${nome2.vida}`);
      }
    }
    if (nome.vida < 1 && nome2.vida < 1) {
      console.log(`EMPATOU`);
      console.log(
        `\nSeu poder continua menor que o do vegeta você vai precisar lutar até derrotar o ${bot} e aumentar seu poder\n`
      );
      prompt("Digite ENTER para lutar... ");
      nome2.vida = vida;
      nome.vida = vida;
    } else if (nome.vida < 1) {
      console.log(`Você VENCEU a batalha`);
      restart = "n";
      nome2.poder = nome2.poder + 1000;
      nome2.vida = vida;
      nome.vida = vida;
      console.log(
        `\nToda vez que você matar um ${bot} seu poder aumenta em 1000`
      );
      console.log(`O poder atual do GOKU é de ${nome2.poder}`);
    } else if (nome2.vida < 1) {
      console.log(`Você PERDEU`);
      console.log(
        `\nSeu poder continua menor que o do vegeta você vai precisar lutar até derrotar o ${bot} e aumentar seu poder\n`
      );
      prompt("Digite ENTER para lutar... ");
    }
    nome2.vida = vida;
    nome.vida = vida;
  }
  console.clear();
}

function brigaVilao(nome2) {
  for (i = 0; i < 4; i++) {
    restart = "s";

    while (restart == "s") {
      console.log(
        `\nVocê liberou o ${trans[i]} está pronto para enfrentar o ${viloes[i].nome}`
      );

      prompt("\nENTER...\n");

      console.log(historia[i]);

      prompt("\nENTER...");

      console.log(
        `\nA vida do ${viloes[i].nome} é de ${viloes[i].vida} e seu poder é de ${viloes[i].poder}`
      );

      console.log(
        `\nO ${viloes[i].nome} partiu pra cima, você tem a opção de defender ou atacar`
      );

      console.log();

      if (i == 0) {
        console.log("Essa é a primeira fase de quatro fases. 1/4");
      } else if (i == 1) {
        console.log("Essa é a segunda fase de quatro fases. 2/4");
      } else if (i == 2) {
        console.log("Essa é a terceira fase de quatro fases. 3/4");
      } else {
        console.log("Essa é a quatra fase de quatro fases. 4/4");
      }

      console.log();

      decisao = +prompt(`Digite [1] para Defender [2] para Atacar: `);
      while (decisao > 2 || decisao < 1 || isNaN(decisao)) {
        decisao = +prompt(`Digite [1] para Defender [2] para Atacar: `);
      }

      if (decisao == 1) {
        console.log(`\nVocê defendeu, sua vida é de ${nome2.vida}%`);
        prompt(`\nDigite ENTER para atacar... `);
      }

      while (viloes[i].vida > 1 && nome2.vida > 1) {
        console.log(`\nVocê tem 3 opções de ataque:

${ataqueGoku[i]}\n`);

        ataque = +prompt(`Digite o número correspondente ao ataque: `);
        while (ataque > 3 || ataque < 1 || isNaN(ataque)) {
          ataque = +prompt(`Digite o número correspondente ao ataque: `);
        }
        if (ataque == 1) {
          viloes[i].vida = viloes[i].vida - ataqueGoku0[i];
          console.log(
            `\nVocê causou ${ataqueGoku0[i]} de dano e a vida do ${viloes[i].nome} agora é ${viloes[i].vida}`
          );
        } else if (ataque == 2) {
          viloes[i].vida = viloes[i].vida - ataqueGoku1[i];
          console.log(
            `\nVocê causou ${ataqueGoku1[i]} de dano e a vida do ${viloes[i].nome} agora é ${viloes[i].vida}`
          );
        } else if (ataque == 3) {
          viloes[i].vida = viloes[i].vida - ataqueGoku2[i];
          console.log(
            `\nVocê causou ${ataqueGoku2[i]} de dano e a vida do ${viloes[i].nome} agora é ${viloes[i].vida}`
          );
        }

        console.log(`\nVez do ${viloes[i].nome} te atacar, os ataques dele são: 
  
${ataqueViloes[i]}`);
        ataqueVilao = Math.floor(Math.random() * 3) + 1;
        if (ataqueVilao == 1 || ataqueVilao == 2) {
          nome2.vida = nome2.vida - ataqueViloes0e1[i];
          console.log(
            `\nO ${viloes[i].nome} escolheu o número ${ataqueVilao} como ataque`
          );
          console.log(
            `Você tomou ${ataqueViloes0e1[i]} de dano sua vida agora é ${nome2.vida}`
          );
        } else if (ataqueVilao == 3) {
          nome2.vida = nome2.vida - ataqueViloes2[i];
          console.log(
            `\nO ${viloes[i].nome} escolheu o número ${ataqueVilao} como ataque`
          );
          console.log(
            `Você tomou ${ataqueViloes2[i]} de dano sua vida agora é ${nome2.vida}`
          );
        }
      }
      if (viloes[i].vida < 1 && nome2.vida < 1) {
        console.log(`EMPATOU`);
        restart = prompt("Deseja reiniciar a batalha [S/N]? ").toLowerCase();
        while (restart != "s" && restart != "n") {
          restart = prompt("Deseja reiniciar a batalha [S/N]? ").toLowerCase();
        }
        nome2.vida = vida;
        viloes[i].vida = vidaViloes[i];
        console.clear();
      } else if (viloes[i].vida < 1) {
        console.log(`Você VENCEU a batalha`);
        restart = "";
        nome2.poder = nome2.poder * 10;
        nome2.vida = vida;
        viloes[i].vida = vidaViloes[i];
        console.log(
          `\nToda vez que você matar um Vilão(personagem) seu poder multiplica por 10`
        );
        console.log(`O poder atual do GOKU é de ${nome2.poder}`);
      } else if (nome2.vida < 1) {
        console.log(`Você PERDEU`);
        restart = prompt("Deseja reiniciar a batalha [S/N]? ").toLowerCase();
        while (restart != "s" && restart != "n") {
          restart = prompt("Deseja reiniciar a batalha [S/N]? ").toLowerCase();
        }
        nome2.vida = vida;
        viloes[i].vida = vidaViloes[i];
        console.clear();
      }
    }
    if (restart == "n") {
      console.log(`
      ██████╗  █████╗ ███╗   ███╗███████╗     ██████╗ ██╗   ██╗███████╗██████╗ 
     ██╔════╝ ██╔══██╗████╗ ████║██╔════╝    ██╔═══██╗██║   ██║██╔════╝██╔══██╗
     ██║  ███╗███████║██╔████╔██║█████╗      ██║   ██║██║   ██║█████╗  ██████╔╝
     ██║   ██║██╔══██║██║╚██╔╝██║██╔══╝      ██║   ██║╚██╗ ██╔╝██╔══╝  ██╔══██╗
     ╚██████╔╝██║  ██║██║ ╚═╝ ██║███████╗    ╚██████╔╝ ╚████╔╝ ███████╗██║  ██║
      ╚═════╝ ╚═╝  ╚═╝╚═╝     ╚═╝╚══════╝     ╚═════╝   ╚═══╝  ╚══════╝╚═╝  ╚═╝
                                                                                                                                                                       
`)
      break;
    }
    console.clear();
  }
}

function luta(nome, nome2) {
  while (nome.poder > nome2.poder) {
    console.log(
      `\nVocê ainda não é capaz de derrotar o ${nome.nome}, o poder dele é de ${nome.poder} e o seu é de ${nome2.poder}, para aumentar seu poder você vai precisar matar alguns ${bot}`
    );
    console.log("\nVamos lá");
    prompt("Digite ENTER... ");

    restart = "s";

    briga(saibaman, goku);
  }
}

inicio();
luta(Vegeta, goku);
brigaVilao(goku);

if (restart == "") {
  parabens();
}
