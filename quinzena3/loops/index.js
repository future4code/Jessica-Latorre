/* Exercicios da aula sobre Laços */

// Interpretação de código 


/*EXERCICIO 1 - O código está adicionando 1 ao contador até que o i seja menor que 5. O resultado
impresso no console será 10.

EXERCICIO 2 -
 a) Será impresso todos os numeros do array que são maiores que 18.
 b)

*/
 //Exercicios de escrita de codigo 

 //EXERCICIO 3 

 //a)
 /*
let arrayOriginal = [10,40,38,22,90,87,28,27,80]
for (let numero of arrayOriginal){
    console.log(numero)
}

//b)
const arrayOriginal = [10,40,38,22,90,87,28,27,80]
for (let numero of arrayOriginal){
    numero /= 10
    console.log(numero)
}

//c)
const arrayPar = []
const arrayOriginal = [10,40,38,22,90,87,28,27,80]
for (let numero of arrayOriginal){
    if (numero % 2 === 0){
        arrayPar.push(numero)
        
    }
    
}
console.log(arrayPar)

//d)
const stringsArray = []
const arrayOriginal = [10,40,38,22,90,87,28,27,80]
for(let i = 0; i < arrayOriginal.length; i++){
    const string = `O elemento do index  ${i} é: ${arrayOriginal[i]}`
    stringsArray.push(string)
    

}
console.log(stringsArray)

// e)
/*
const arrayOriginal = [10,40,38,22,90,87,28,27,80]
let menorValor = arrayOriginal[0]
let maiorValor = arrayOriginal[0]

for (let i = 0; i < arrayOriginal.length; i++){
if (arrayOriginal[i] < menorValor){
    menorValor = arrayOriginal[i]

    }else if (arrayOriginal[i] > maiorValor){
        maiorValor = arrayOriginal[i]
    }
}
console.log("O maior valor do arrayOriginal é " + maiorValor + " e o menor valor é " + menorValor)
*/


