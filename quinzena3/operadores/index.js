// Resultado dos exercicios de interpretação de código
/* 1 - a) false 
b) false
c) true
e) boolean*/

/* 2 - a) undefined
b) null
c) 11
d) exibirá uma mensagem de erro
e) exibirá uma mensagem de erro
f) exibirá uma mensagem de erro
 */

// Exercicios de escrita de código

// 1- Programa para ler idades itens a, b e c
/*
let idadeUsuario = Number(prompt("Qual sua idade? digite apenas números (Ex.: 19)"))
let idadeMelhorAmigo = Number(prompt("Qual a idade do seu melhor amigo? Informe apenas números (Ex.:19)"))

console.log("Sua idade é maior do que a do seu amigo?", idadeUsuario > idadeMelhorAmigo)
console.log("A diferença entre a sua idade e a do seu amigo é: ", idadeUsuario - idadeMelhorAmigo)
*/

//2 - Número par
/*
let numeroPar = Number(prompt("Digite um número par: "))
console.log(numeroPar % 2)*/ //As divisões de números pares por 2 possuem resto 0. E as divisões de números impares por 2 tem resto 1.

//3 - Itens a, b, c e d
/*
let listaDeTarefas = []
let tarefasUsuario1 = prompt("Insira uma tarefa: ")
let tarefasUsuario2 = prompt("Insira outra tarefa: ")
let tarefasUsuario3 = prompt("Insira mais uma tarefa: ")
listaDeTarefas = [tarefasUsuario1, tarefasUsuario2, tarefasUsuario3]

console.log(listaDeTarefas)

let tarefaConcluida = Number(prompt("Digite o número da tarefa concluída, de 0 a 2, sendo que 0 é sua primeira tarefa e 2 a sua última tarefa. "))
listaDeTarefas.splice(tarefaConcluida,1)
console.log(listaDeTarefas)*/

//4 - Email e nome do usuário
/*
const nomeUsuaraio = prompt("Informe seu nome: ")
const emailUsuario = prompt("Digite seu e-mail: ")

console.log("O email " + emailUsuario + " foi cadastrado com sucesso. Seja bem-vindo(a), " + nomeUsuaraio + "!")*/

//Desafios

// 1 - Converter temperatura
/* a)
 const grausFahrenheit = 77
 const converterFahrenheit = (grausFahrenheit - 32) * 5 / 9 + 273.15
 console.log(converterFahrenheit + " k")*/

 // b)
 /*
 const grausCelsius = 80
 const converterCelsius = (grausCelsius) *9 / 5 + 32
 console.log(converterCelsius + " °F")  

// c)

const grausCelsius1 = 30
const celsiusParaKelvin = grausCelsius1 + 273.15
console.log(celsiusParaKelvin + " K")

const celsiusParaFahrenheit = (grausCelsius1) * 9 / 5 + 32
console.log(celsiusParaFahrenheit + " °F")

// d)

const converterParaUsuario = Number(prompt("Informe a temperatura em graus Celsius que deseja converter: "))
console.log(converterParaUsuario + " °C em Fahrenheit: " + celsiusParaFahrenheit + " °F e em Kelvin é " + celsiusParaKelvin + " k")*/

// 2 - Consumo de energia 
/*
const quilowattHora = 280
const consumo = quilowattHora * 0.05

console.log("O valor a ser pago é de R$ " + consumo + ",00")

const calculoDesconto = 0.15 * consumo

//const desconto =  consumo - 2.1 

console.log("O valor a ser pago com 15% de desconto é de R$ ",consumo - calculoDesconto)*/

// 3 - Conversões
/*
 a) converter libra para kg
const libra = 20
const converterEmKg = libra / 2.205
console.log("20 lb equivalem a " + converterEmKg + " kg")

b) converter oz em kg
const onca = 10.5
const oncaEmKg = 10.5 / 3.527
console.log("10.5 oz equivalem a " + oncaEmKg + " kg")

 c) converter milhas em metros
const milha = 100
const milhaEmMetros = milha * 1609
console.log("100 mi equivalem a " + milhaEmMetros + " m")

d) converter pés em metros
const pe = 50
const peEmMetros = pe / 3.281
console.log("50 pes equivalem a " + peEmMetros+ " m")

e) converter galão em litros
const galao = 103.56
const galaoEmLitros = galao * 3.785
console.log("103.56 gal equivalem a " + galaoEmLitros + " l")

f) converter xicaras em litros
const xicaras = 450
const xicarasEmLitros = (xicaras * 6) / 25
console.log("450 xic equivalem a " + xicarasEmLitros + " l")

g) converter xicaras em litros para o usuário
let xicarasUsuario = Number(prompt("Informe em números a quantidade em xícaras que deseja converter para litros:"))
const converterXicaras = (xicarasUsuario * 6) / 25
console.log(xicarasUsuario + " xic equivalem a " + converterXicaras + " l")*/











