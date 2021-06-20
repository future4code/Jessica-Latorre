import React from 'react'
import casal3 from '../../videos/casal3.mp4'
import {Container,TituloHome, BotaoIrParaPerfis, BackgroundVideo} from './styled'

function HomePage(props) {
  
	return(
    
		<Container>
      <TituloHome>AstroMatch</TituloHome>
      <BackgroundVideo autoPlay muted loop>
        <source src={casal3} type="video/mp4" />
      </BackgroundVideo>
      <BotaoIrParaPerfis onClick={props.irParaMatchPage}>VER PERFIS</BotaoIrParaPerfis>
    </Container>
	)
}
export default HomePage