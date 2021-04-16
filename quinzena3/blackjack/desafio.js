/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

    console.log("Bem-vindo ao jogo de Blackjack!")
    if(confirm("Quer iniciar uma nova rodada?")){
       let cartaUsuario1 = comprarCarta()
       let cartaUsuario2 = comprarCarta()
       let cartaComputador1 = comprarCarta()
       let cartaComputador2 = comprarCarta()
       let cartaUsuario = [cartaUsuario1, cartaUsuario2]
       let cartaComputador = [cartaComputador1, cartaComputador2]


       if(cartaUsuario1.valor + cartaUsuario2.valor === 22){
          cartaUsuario1 = comprarCarta()
          cartaUsuario2 = comprarCarta()
       } else if (cartaComputador1.valor + cartaComputador2 === 22){
          cartaComputador1 = comprarCarta()
          cartaComputador2 = comprarCarta()
       }

       let pontosUsuario = cartaUsuario[0].valor + cartaUsuario[1].valor
       let pontosComputador = cartaComputador[0].valor + cartaComputador[1].valor
       
       console.log(`Usuário - cartas: ${cartaUsuario[0].texto} ${cartaUsuario[1].texto} pontuação: ${pontosUsuario}`)
       console.log(`Computador - carta revelada: ${cartaComputador[0].texto}`)

       let textoCartaUsuario = [cartaUsuario1.texto, cartaUsuario2.texto]

       let novaCarta
       if (pontosUsuario < 21 && confirm("Suas cartas são: " + textoCartaUsuario + ". A carta revelada do computador é " + cartaComputador[0].texto + "\n "
            + "Deseja comprar mais uma carta?")){  
               cartaUsuario.push(comprarCarta())


}
    }
      
    
       
