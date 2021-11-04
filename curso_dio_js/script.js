/*

//declarando variaveis

let hoje; // melhor maneira de declarar variavel
const sol = true; // declaraçao de constante

var a = "hoje a noite não tem luar"; //nao usual

// objetos com varios elementos de chave e valor
let frutas = {
  banana: true,
  cafe: false,
  pera: true,
};
//dicionario
let carne = [{ alcatra: 29.99 }, { cupim: 32.0 }, { picanha: 52.0 }];
///Array
let semana = [
  "segunda",
  "terça",
  "quarta",
  "quinta",
  "sexta",
  "sabado",
  "domingo",
];
// monstrando na tela input
//hoje = prompt("digite o dia da semana de hoje:");


//escrevendo na tela com js
document.write(`'<h2> testando algo ${hoje}</h2>'`);
// popup na tela
alert(carne[1]);
//imprimindo no console
console.log(carne[0]);


//replace troca uma palavra por outra == python
document.getElementById("h1").innerHTML = a.replace("hoje", "Amanhã");

// aumenta  todas as letra para maiusculo
console.log(a.toUpperCase());

// diminui td para minusculo
console.log(a.toLowerCase());

// imprimindo lista
console.log(semana);

// colocando um itemna lista de itens
console.log(semana.push("domingo"));

console.log(semana);

//removendo utimo item
console.log(semana.pop());

//qtd de itens total
console.log(semana.length);

// mudando as posiçoes dos itens detras para frente
console.log(semana.reverse());

// toString - retona a lista como string
console.log(semana.toString());

// join adciona um separador na string
console.log(semana.join("--"));

//declarando variaveis
let idade = prompt("qual sua idade");

// condicional
if (idade < 10) {
  alert("ta novo");
} else if (idade > 10 && idade < 30) {
  alert("jovem");
} else {
  alert("velho");
}

// repetiçao usando while
let i = 0;
while (i < idade) {
  console.log(
    `'qual sua idade mesmo ${idade} a eu tenho ${i} sou ${
      idade - i
    } mais novo '`
  );
  i++;
}
// usando for
let idade = prompt("qual sua idade");
for (let count = 5; idade > count; count++) {
  console.log(`oi ${count}`);
}

// funçoes ****

function setReplace(frase, nome, novo_nome) {
  return frase.replace(nome, novo_nome);
}

console.log(setReplace("Bem amigos aqui da rede globo", "globo", "SBT"));

function valid(idade) {
  var valida;
  if (idade >= 18) {
    valida = true;
  } else {
    valida = false;
  }
  return valida;
}
let idade;
idade = prompt("Qual sua idade?");
console.log(valid(idade));
*/
// acessando tags pelo id
function clica() {
  let clica = document.getElementById("h1");
  clica.innerHTML = "<h1>voçe clicou no botao eu vi!!!</h1>";
}
function mudatexto() {
  let clica = document.getElementById("h1");
  clica.innerHTML = "<h1>serio...........!!!</h1>";
  clica.style.color = "green";
  clica.style.backgroundColor = "black";
}
function noclica() {
  let clica = document.getElementById("btn2");
  clica.style.color = "#fff";
  clica.style.fontSize = "80px";
}
function mudaclica() {
  let clica = document.getElementById("btn3");

  clica.style.color = "silver";
  clica.style.fontSize = "40px";
}
function muda1() {
  let text1 = document.getElementById("mousemove1");
  text1.innerHTML = "ainda vai levar um tempo";
}
function muda2() {
  let text1 = document.getElementById("mousemove2");
  text1.innerHTML = "uma menina me ensinou";
}
