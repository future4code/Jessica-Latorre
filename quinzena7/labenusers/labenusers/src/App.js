import React from "react"
import styled from 'styled-components'
import axios from 'axios'
import Cadastro from './components/Cadastro'
import ListaUsuarios from './components/ListaUsuarios'




const Principal = styled.div`
border: dotted;
width: 50%;
margin: 0 auto;
padding: 16px;
display: flex;
flex-direction: column;
align-items: center;
font-family: 'Arial', "sans-serif";
`
const Titulo = styled.h1`
text-align: center;
`

class App extends React.Component{

  state={
    tela: "cadastro"
  }

  trocarTela = () =>{
    switch (this.state.tela) {
      case "cadastro":
        return <Cadastro trocarTelaListaUsers={this.trocarTelaListaUsers}/>
     
    
      case "lista":
        return <ListaUsuarios trocarTelaCadastro={this.trocarTelaCadastro}/>
      default:
        return <Cadastro trocarTelaListaUsers={this.trocarTelaListaUsers}/>
    }
  }

  trocarTelaCadastro = () =>{
    this.setState({tela: "cadastro"})
  }

  trocarTelaListaUsers = () =>{
      this.setState({tela: "lista"})
  }

  criarUsuario = () =>{
    axios.post()
  }



  render(){
    
    return(
      <Principal>
        <Titulo>Labenusers</Titulo>
        
        {this.trocarTela()}
       
      </Principal>
    )
  }
}
export default App