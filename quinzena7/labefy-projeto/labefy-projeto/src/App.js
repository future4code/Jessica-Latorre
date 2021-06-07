import React from 'react'
import styled from 'styled-components'
import TelaForm from './components/TelaForm/TelaForm'
import TelaPlaylists from './components/TelaPlaylists/TelaPlaylists'

const DivMain = styled.div`
background: linear-gradient(#141e30, #243b55);
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;

`
const H1 = styled.h1`
color: #fff;
`


export default class App extends React.Component {
  state={
    telaAtual: "form"
    
  }
 navegacaoTelas = () =>{
  switch (this.state.telaAtual) {
    case "form":
      return <TelaForm verPlaylists={this.verPlaylists}/>
   
  
    case "playlists":
      return <TelaPlaylists irParaHome={this.irParaHome}/>
    default:
      return <TelaForm verPlaylists={this.verPlaylists}/>
  }
 }
  verPlaylists = () =>{
    this.setState({telaAtual: "playlists"})
  }

  irParaHome = () =>{
    this.setState({telaAtual: "form"})
  }



  render(){

  
  return (
    <DivMain>
      <header>
        <H1>Labefy</H1>
      </header>
     
      {this.navegacaoTelas()}

      
       
      </DivMain>
    );
  }
   
  }



