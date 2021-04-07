// Exercicios de interpretação de código:

/* 1- O código testa se um número informado pelo usuário é par ou impar, verificando o resto da divisão do número por 2.
Se um numero for par, ele imprime: Passou no teste, se for ímpar: Não passou no teste.

2- 
a) O código mostra o preço de algumas frutas informadas pelo usuário.
b) Caso o usuario quisesse saber o preço da Maçã, a seguinte mensagem seria impressa:
"O preço da fruta Maçã é R$ 2.25".
c) Se retirarmos o break do case Pêra, o preço dessa fruta seria o default (5).

3 -
a) A primeira linha está pedindo um numero para o usuario digitar.
b) Caso o usuario digitasse 10 a mensagem: Esse numero passou no teste, seria exibida no console.
Se o numero informado fosse -10, ocorreria um erro.
c) Sim, ocorreria um erro porque a variavel "mensagem" foi declarada dentro do bloco if, mas foi 
utilizada em um console.log fora desse escopo.

// Exercicios de escrita de código:

4 -
/*
const idadeUsuario = Number(prompt("Informe sua idade: (informe apenas números, ex.: 18)"))

if(idadeUsuario >= 18){
    console.log("Você pode dirigir")
} else{
    console.log("Você não pode dirigir")
}
*/


/*
5 - 


const turnoAluno = prompt("Olá, informe qual turno você estuda: (M -> manhã, V -> vespertino ou N -> noite)")
if(turnoAluno ==="M"){
    console.log("Bom dia!")
} else if (turnoAluno === "V"){
    console.log("Boa tarde!")
} else  {
    console.log("Boa noite!")
} 
*/

/*
6-

const turnoAluno = prompt("Olá, informe qual turno você estuda: (M -> manhã, V -> vespertino ou N -> noite)")
switch (turnoAluno){
    case "M":
        console.log("Bom dia!")
        break
    case "V":
        console.log("Boa tarde!")
        break
    case "N":
        console.log("Boa noite!")
        break
    default:
        console.log("Turno não encontrado. Tente digitar com letras maiúsculas.")
}
*/

/*
7-

const generoFilme = prompt("Qual gênero vamos assistir? ")
const precoFilme = Number(prompt("Qual o valor do ingresso?"))
const snackFilme = prompt("Qual snack você irá comprar?")

if(generoFilme === "fantasia" && precoFilme <= 15){
    console.log("Bom filme :D\n...com", snackFilme + " hmmm")
} else {
    console.log("Escolha outro filme")
}
*/

  






