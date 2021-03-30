// Respostas dos exercícios de interpretação de código da aula de JavaScript

/* 1 - para o primeiro console.log, será exibido 10 e para
o segundo comando console.log será exibido o valor de a = 10 e o valor
de b = 5*/

//2 - será impresso os seguintes valores: 10, 10, 10

// Respostas dos exercícios de escrita de código da aula de JavaScript
// 1) 
let nome
let idade
console.log(typeof nome)
console.log(typeof idade) //Retornou undefined porque as variaveis (nome e idade) estão vazias, não foi atribuído nenhum valor.

nome = prompt("Qual seu nome, abençoad@?")
idade = prompt("Quantos anos você tem?")
console.log(typeof nome)
console.log(typeof idade) //Agora que as variaveis receberam valores, retornaram como sendo do tipo string.

console.log("Olá", nome, "você tem", idade,"anos.")

//2)

let tipoDefilmePreferido = prompt("Que tipo de filme você gosta?")
console.log("1.Que tipo de filme você gosta?")
console.log("Resposta:", tipoDefilmePreferido)

let profissao = prompt("Qual sua profissão?")
console.log("2.Qual sua profissão?")
console.log("Resposta:", profissao)

let cidade = prompt("Qual sua cidade?")
console.log("3.Qual sua cidade?")
console.log("Resposta:", cidade)

let habilitacao = prompt("Você possui habilitação?")
console.log("4.Você possui habilitação?")
console.log("Resposta:",habilitacao)

let tipoSanguineo = prompt("Qual seu tipo sanguíneo?")
console.log("5.Qual seu tipo sanguíneo?")
console.log("Resposta:", tipoSanguineo)

//3 - 

let comidasPreferidas = ["massas","hamburguer","bolo","sorvete","batata doce"]
console.log(comidasPreferidas)
console.log("Essas são algumas de minhas comidas preferidas:")
console.log(comidasPreferidas[0])
console.log(comidasPreferidas[1])
console.log(comidasPreferidas[2])
console.log(comidasPreferidas[3])
console.log(comidasPreferidas[4])

//c)
let comidaPreferidaDoUsuario = prompt("Qual sua comida preferida?")
comidasPreferidas = ["massas",comidaPreferidaDoUsuario,"bolo","sorvete","batata doce"]
console.log(comidasPreferidas)
console.log(comidasPreferidas[0])
console.log(comidasPreferidas[1])
console.log(comidasPreferidas[2])
console.log(comidasPreferidas[3])
console.log(comidasPreferidas[4])

//4 -

let arrayComPerguntas = ["Você tem animais de estimação?", "Você gosta de rock?", "Você é menor de idade?"]
let arrayComRespostas = [true, true, false]
console.log(arrayComPerguntas[0], arrayComRespostas[0])
console.log(arrayComPerguntas[1], arrayComRespostas[1])
console.log(arrayComPerguntas[2], arrayComRespostas[2])








