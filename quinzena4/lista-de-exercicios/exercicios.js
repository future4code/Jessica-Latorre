//Exercício 1

function inverteArray(array) {
  // implemente sua lógica aqui
  return array.reverse([1,2,3,4,5,6,7])
}


//Exercício 2

function retornaNumerosParesElevadosADois (array) {
   // implemente sua lógica aqui
   let arrayParesAoQuadrado =[]
   for(let numero of array){
      
      if(numero % 2 === 0){
         numero *= numero
        arrayParesAoQuadrado.push(numero)
      }
   }
   return arrayParesAoQuadrado
}

//Exercício 3

function retornaNumerosPares (array) {
   // implemente sua lógica aqui
   let arrayPares = []
   for(let numero of array){
      if(numero % 2 === 0){
         arrayPares.push(numero)
      }
   }
   return arrayPares

}

//Exercício 4

function retornaMaiorNumero(array) {
   // implemente sua lógica aqui
  let maiorNumero = 0 
  for(let numero of array){
     if(numero > maiorNumero){
        maiorNumero = numero
     }
  }
  return maiorNumero
}

//Exercício 5

function retornaQuantidadeElementos (array) {
   // implemente sua lógica aqui
   let count = 0
   for(let elemento of array){
      count += 1
   }
   return count
}

//Exercício 6

function retornaExpressoesBooleanas() {
   // implemente sua lógica aqui
  const resposta = [false,false,true,true,true]
  return resposta

}

//Exercício 7

function retornaNNumerosPares(n) {
   // implemente sua lógica aqui
   let apenasNPares = []
 for(let numero = 0; apenasNPares.length < n; numero ++){
    if( numero % 2 ===0){
       apenasNPares.push(numero)
    }
 }
 return apenasNPares
}

// Exercício 8

function checaTriangulo(a, b, c) {
  // implemente sua lógica aqui
  let tipoTriangulo
  if(a === b && b === c){
    
   tipoTriangulo = 'Equilátero'
   
} else if (a != b && b != c && c != a){
   tipoTriangulo = 'Escaleno'
   
} else if (a === b || a === c || c != a){
   tipoTriangulo = 'Isósceles'
   
   
}
return tipoTriangulo
}

 


// Exercício 9

function comparaDoisNumeros(num1, num2) {
   // implemente sua lógica aqui
  let maiorNumero
  let menorNumero
   if(num1 > num2){
       maiorNumero = num1
       menorNumero = num2
   } else if(num1 < num2){
      maiorNumero = num2
      menorNumero = num1
   }
  if(maiorNumero % menorNumero === 0){
    maiorDivisivelporMenor = true
  } else {
     maiorDivisivelporMenor = false
  }
  let subtracao = maiorNumero - menorNumero
  diferenca = subtracao
 
  let objeto = {
     maiorNumero: maiorNumero,
     maiorDivisivelporMenor: maiorDivisivelporMenor,
     diferenca: diferenca
  }   
  return objeto

}
// Exercício 10

function segundoMaiorEMenor(array) {
   // implemente sua lógica aqui
   let numeroMaior = 0
   let numeroMenor = Infinity
   let segundoMaior = 0
   let segundoMenor = Infinity
   let segundoMaiorEmenor = []
   let indexMaior = 0
   let indexMenor = 0

   for(let i of array){
      if ( i < numeroMenor){
         numeroMenor = i
         indexMenor = array.indexOf(numeroMenor)
      }if(i > numeroMaior){
         numeroMaior = i
         indexMaior = array.indexOf(numeroMaior)
         
      }
   } 
   
array.splice(indexMaior, 1)
array.splice(indexMenor, 1)

for(let i of array){
   if(i < segundoMenor){
      segundoMenor = i
   }
   if(i > segundoMaior){
      segundoMaior = i
   }
  

}
segundoMaiorEmenor.push(segundoMaior)
segundoMaiorEmenor.push(segundoMenor)

return segundoMaiorEmenor
}

//Exercício 11

function ordenaArray(array) {
   // implemente sua lógica aqui
   
 for(let i = 0; i < array.length; i++) {
  for(let j = 0; j < array.length; j++) {
   if(array[j] > array[j + 1]) {
    let tmp = array[j];
     array[j] = array[j + 1];
     array[j + 1] = tmp;
    }
   }
  }
return array

   }



// Exercício 12

function filmeFavorito() {
   // implemente sua lógica aqui
   const filme = {
      nome: "O Diabo Veste Prada",
      ano: 2006,
      diretor: "David Frankel",
      atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
   }
   return filme
}

// Exercício 13

function imprimeChamada() {
   // implemente sua lógica aqui
   const filme = {
      nome: "O Diabo Veste Prada",
      ano: 2006,
      diretor: "David Frankel",
      atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
   }
   
   return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
  
}

// Exercício 14

function criaRetangulo(lado1, lado2) {
   // implemente sua lógica aqui
   let retangulo = {
      largura:lado1,
      altura: lado2,
      perimetro: 2 * (lado1 + lado2),
      area: lado1 * lado2
   }
   return retangulo
}

// Exercício 15

function anonimizaPessoa(pessoa) {
   // implemente sua lógica aqui
   const pessoaAnonima = {
      ...pessoa
   }
   pessoaAnonima.nome ="ANÔNIMO"

   return pessoaAnonima
   
   
}



// Exercício 16

const arrayDePessoas = [
  { nome: "Pedro", idade: 20 },
  { nome: "João", idade: 10 },
  { nome: "Paula", idade: 12 },
  { nome: "Artur", idade: 89 } 
]

// Exercício 16, letra A

function maioresDe18(arrayDePessoas) {
   // implemente sua lógica aqui
   let adultos = arrayDePessoas.filter((pessoa) =>{
      return pessoa.idade >= 18
   })

   return adultos
}

// Exercício 16, letra B

function menoresDe18(arrayDePessoas) {
   // implemente sua lógica aqui
   let criancasAdolescentes = arrayDePessoas.filter((pessoa)=>{
      return pessoa.idade < 18
   }
   )
   return criancasAdolescentes
   
}

// Exercício 17, letra A

function multiplicaArrayPor2(array) {
   // implemente sua lógica aqui
   let dobro = array.map((elemento) =>{
      return elemento * 2

   })
    return dobro 
}

// Exercício 17, letra B

function multiplicaArrayPor2S(array) {
  // implemente sua lógica aqui
  let dobro = array.map(elemento =>{
     return (elemento * 2).toString()
  })
  return dobro
}

// Exercício 17, letra C

function verificaParidade(array) {
   // implemente sua lógica aqui
   let arrayNumeros = array.map((elemento) =>{
      if(elemento % 2 === 0){
         return `${elemento} é par`
      } else {
         return `${elemento} é ímpar`
      }

   })
   return arrayNumeros
}

// Exercício 18

const pessoas = [
  { nome: "Paula", idade: 12, altura: 1.8},
  { nome: "João", idade: 20, altura: 1.3},
  { nome: "Pedro", idade: 15, altura: 1.9},
  { nome: "Luciano", idade: 22, altura: 1.8},
  { nome: "Artur", idade: 10, altura: 1.2},
  { nome: "Soter", idade: 70, altura: 1.9}
]

//Exercício 18, letra A

function retornaPessoasAutorizadas() {
   // implemente sua lógica aqui
   let pessoasAutorizadas = []
   for(let elemento of pessoas){
      if(elemento.altura >= 1.5 && elemento.idade > 14 && elemento.idade < 60){
         pessoasAutorizadas.push(elemento)
      } 

   }
   return pessoasAutorizadas
}


// Exercício 18, letra B

function retornaPessoasNaoAutorizadas() {
   // implemente sua lógica aqui
   let pessoasProibidas = []
   for(let elemento of pessoas){
      if(elemento.altura < 1.5 || elemento.idade < 14 || elemento.idade > 60){
         pessoasProibidas.push(elemento)
      }
   }
   return pessoasProibidas
}

//Exercício 19

const consultas = [
  { nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
  { nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
  { nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
  { nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
  ]

function retornaEmailConsulta() {
  // implemente sua lógica aqui
 
}


//Exercício 19, letra A

function ordenaPorNome() {
  
}

// Exercício 19, letra B

const consultasData = [
  { nome: "João", dataDaConsulta: "01/10/2021" },
  { nome: "Pedro", dataDaConsulta: "02/07/2021" },
  { nome: "Paula", dataDaConsulta: "03/11/2021" },
  { nome: "Márcia",  dataDaConsulta: "04/05/2021" }
]

function ordenaPorData() {

}

//Exercício 20

const contas = [
  { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
  { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
  { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
  { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
  { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
  { cliente: "Soter", saldoTotal: 1200, compras: [] }
]

function atualizaSaldo() {
  // implemente sua lógica aqui
  contas.forEach((conta) => {
   let totalDeCompras = 0
   conta.compras.forEach((valor) => {
     totalDeCompras += valor
   })
   conta.saldoTotal -= totalDeCompras
 })
 return contas

}