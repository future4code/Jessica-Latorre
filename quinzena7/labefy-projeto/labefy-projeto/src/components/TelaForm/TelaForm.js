import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import  {MudarTela, Main, Form, H2, Nome, Label, Enviar} from './FormStyle'
import { ToastContainer, toast } from 'react-toast'






class TelaForm extends React.Component {
  state={
    name: ""
   
  }

  onChangeNome = (event) =>{
    this.setState({name: event.target.value})
  }
criarPlaylist = () => {
  const body = {
    name: this.state.name
  }
  axios
  .post("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", body, {
    headers: {
      "Authorization": "jessica-cabral-munoz"
    }
  }).then((response) =>{
    this.setState({name:""})
    toast.success('Playlist criada com sucesso')
   

    
  }).catch((err)=>{
    console.log(err.response)
    toast.error('Algo não saiu bem...talvez já exista outra playlist com mesmo nome')
  })
} 
  
  

  
  render() {


    return (
      <Main>
        
        <ToastContainer/>
       <MudarTela onClick={this.props.verPlaylists}> Ver playlists </MudarTela>
       <Form>
         <H2>Criar Playlist</H2>
     
     <Label>Nome da playlist</Label>
     <Nome value={this.state.name} onChange={this.onChangeNome}></Nome>
     
     <Enviar onClick={this.criarPlaylist}>Enviar</Enviar>
     
     
     </Form>
       
       
       
      </Main>
    );
  }

}


export default TelaForm;
