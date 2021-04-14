// Exercício 1 - Interpretação de código
// a) Será impresso no console os valores: 10 e 50
// b) A função realizaria os calculos mas não iria imprimir nada no console.

// Exercício 2 - Interpretação de código
// a) "Darvas", "Caio".
// b) "Amanda", "Caio".

// Exercício 3 - Interpretação de código
/*A função multiplica os elementos pares do array 
por ele mesmo e forma um novo array com esses resultados. Eu chamaria de "multiplicarPares()*/

// Exercício 4 - Escrita de código
// a)
/*
function apresentarEstudante(){
  console.log("Eu sou Jessica, tenho 28 anos, moro em Gravataí e sou estudante")
}
apresentarEstudante()*/

//b)
/*
let nome
let idade
let cidade
let estudante

function apresentarAlguem(name, age, city, student){
  nome = name
  idade = age
  cidade = city
  estudante = student 

  if(estudante === true){
    estudante = "sou estudante"
  } else if(estudante === false){
    estudante = "não sou estudante"
  }


}
apresentarAlguem('Jessica', 28, 'Gravataí', true)
console.log("Eu sou " + nome + ", tenho " + idade + " anos, moro em " + cidade + " e " + estudante)
*/

// Exercicio 5 - Escrita de código
// a)
/*
function somarValores(num1,num2){
  return num1 + num2
}
console.log("O resultado da soma dos numeros é " + somarValores(791,397))*/

// b)
/*
function compararValores(num1,num2){
  if(num1 >= num2){
    return true
  } else{
    return false
  }

}
console.log("O primeiro número é maior que o primeiro? " + compararValores(99,87))*/

// c)
/*
function imprimirMensagem(mensagem){
  for(let count = 0; count < 10; count++){
    console.log(mensagem)
  }
}
imprimirMensagem('Opa, essa mensagem será exibida 10x')*/

// Exercício 6 - Escrita de código
// a)
/*
const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

function contarElementosArray(){
  for(let i = 0; i <= array.length; i++){
    return array.length
  }

}
contarElementosArray()
console.log("Este array possui " + contarElementosArray(array) + " elementos")*/

// b)
/*
function verificarParidade(numero){
  if(numero % 2 === 0 ){
    return true
  } else if (numero % 2 === 1){
    return false
  }
}
console.log(verificarParidade(17))*/

// c)
/*
let arrayPares = []
const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

function contarPares(){
  for(let numero of array){
    if(numero % 2 === 0){
      arrayPares.push(numero)
    }
  }
  console.log("A quantidade de números pares no array do exercício é " + arrayPares.length)
}
contarPares()*/

// d)
/*
let arrayPares = []
const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

function contarPares(){
  for(let numero of array){
    if(verificarParidade(numero))
      arrayPares.push(numero)
    }
    
  console.log("A quantidade de números pares no array do exercício é " + arrayPares.length)
  }

contarPares()*/
