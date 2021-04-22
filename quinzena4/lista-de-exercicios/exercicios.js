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
  
   
  
  
  
}

//Exercício 11

function ordenaArray(array) {
   // implemente sua lógica aqui
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
  let nomeAnonimo = {
      nome: "Astrodev",
      idade: 25,
      email: "astrodev@future4.com.br",
      endereco: "Rua do Futuro, 4"
   
  }
  nomeAnonimo.nome = "ANÔNIMO"
  
  return nomeAnonimo
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
   
   
   
}

// Exercício 16, letra B

function menoresDe18(arrayDePessoas) {
   // implemente sua lógica aqui
   
}

// Exercício 17, letra A

function multiplicaArrayPor2(array) {
   // implemente sua lógica aqui
}

// Exercício 17, letra B

function multiplicaArrayPor2S(array) {
  // implemente sua lógica aqui
}

// Exercício 17, letra C

function verificaParidade(array) {
   // implemente sua lógica aqui
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

function retornaPessoasAutorizadas(pessoas) {
   // implemente sua lógica aqui
}


// Exercício 18, letra B

function retornaPessoasNaoAutorizadas(pessoas) {
   // implemente sua lógica aqui
}

//Exercício 19

const consultas = [
  { nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
  { nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
  { nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
  { nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
  ]

function retornaEmailConsulta(consultas) {
  // implemente sua lógica aqui
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
}