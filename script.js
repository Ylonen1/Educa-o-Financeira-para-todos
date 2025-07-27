function calcular() {
const valor = parseFloat(document.getElementById("valor").value);
const prazo = parseInt(document.getElementById("prazo").value);
const tipo = document.getElementById("tipo").value;

let taxa;

switch (tipo) {
case "selic":
taxa = 0.15;
break;
case "cdb":
taxa = 0.149;
break;
case "lci":
taxa = 0.12;
break;
case "poupança":
taxa = 0.05;
break;
default:
taxa = 0.1;
}

const montante = valor * Math.pow(1 + taxa / 12, prazo);
document.getElementById("resultado").innerText =
`Rendimento estimado: R$ ${montante.toFixed(2)}`;

desenharGrafico(valor, montante);
}

function desenharGrafico(inicial, final) {
const canvas = document.getElementById("grafico");
const ctx = canvas.getContext("2d");

ctx.clearRect(0, 0, canvas.width, canvas.height);

const margem = 30;
const alturaMaxima = canvas.height - margem;
const maiorValor = Math.max(inicial, final);

const alturaInicial = (inicial / maiorValor) * alturaMaxima;
const alturaFinal = (final / maiorValor) * alturaMaxima;

// Barra do valor inicial
ctx.fillStyle = "#172d7b";
ctx.fillRect(50, canvas.height - alturaInicial, 50, alturaInicial);

// Barra do valor final
ctx.fillStyle = "#1976d2";
ctx.fillRect(150, canvas.height - alturaFinal, 50, alturaFinal);

// Legendas
ctx.fillStyle = "#fff";
ctx.fillText("Inicial", 50, canvas.height - 5);
ctx.fillText("Final", 150, canvas.height - 5);
}