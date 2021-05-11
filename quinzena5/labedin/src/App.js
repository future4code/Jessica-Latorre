import React from 'react';
//import './App.css';
import styled from 'styled-components'
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import perfil from './imagens/perfil.jpg';
import freelancer from './imagens/freelancer.jpg'
import empresa from './imagens/tdk.png'
import email from './imagens/email.png'
import casa from './imagens/casa.png'
import CardPequeno from './components/CardPequeno/CardPequeno'

const AppDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
` 
const DivContainer = styled.div`
width: 40vw;
  margin: 10px 0;
`
const DivContainerH2 = styled.h2`
   display: flex;
  justify-content: center;
  margin-bottom: 20px;
`



function App() {
  return (
    < AppDiv >
      <DivContainer>
        <DivContainerH2>Dados pessoais</DivContainerH2>
        <CardGrande 
          imagem={perfil} 
          nome="Jessica Latorre Cabral" 
          descricao="Busco recolocação no mercado de trabalho como desenvolvedora web frontend jr, estou migrando de area, depois de 4 anos trabalhando na linha de produção de uma multinacional. Realizei alguns projetos como freelancer e atualmente sou estudante de desenvolvimento web front-end."
        />
        
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
        <DivContainerH2>Informações de contato</DivContainerH2>
        <CardPequeno
        imagem={email}
        info="E-mail: jessica.latorre@mecontratapfvr.com.br"
        
        />
        <CardPequeno
        imagem={casa}
        info="Endereço: Rua das Andorinhas, 222"
        />
       
      </DivContainer>

      <DivContainer >
        <DivContainerH2>Experiências profissionais</DivContainerH2>
        <CardGrande 
          imagem={freelancer} 
          nome="Autonôma/Freelancer" 
          descricao="Criando websites" 
        />
        
        <CardGrande 
          imagem={empresa}
          nome="TDK" 
          descricao="Inspeção e embalagem de capacitores." 
        />
      </DivContainer>

      <DivContainer>
        <DivContainerH2>Minhas redes sociais</DivContainerH2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </DivContainer>
    </ AppDiv>
  );
}

export default App;
