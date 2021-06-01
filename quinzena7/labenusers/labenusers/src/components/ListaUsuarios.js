import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

const Div = styled.div`
display: flex;
flex-direction: column;
`
const ListaUser = styled.div`
border: black solid 1px;
border-radius: 15px;
margin: 10px;
padding: 10px;
width: 300px;
display: flex;
justify-content: space-between;

`
const Button = styled.button`
width: 120px;
margin: 0 auto;
font-size: 18px;
`
const H2 = styled.h2`
text-align: center;
`
const Deletar = styled.button`
border-radius: 50%;
&:hover{
    background-color: red;
}
`


class ListaUsuarios extends React.Component{
    state = {
        usuarios: []
    }


componentDidMount() {
    this.mostrarLista()
}

mostrarLista = () =>{
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    

    
    axios.get(url, {
        headers: {
            Authorization: "jessica-cabral-munoz"
        }
    }).then((res)=>{
        this.setState({usuarios: res.data})
    })
      .catch((err)=>{
         alert("Ops! ocorreu um erro :( ")

      })
}

deletarUsuario = (id) =>{
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`

    axios.delete(url, {
        headers: {
            Authorization: "jessica-cabral-munoz"
        }
    }).then((res)=>{
        
        alert("Usuári@ deletado com sucesso")
        this.mostrarLista()
    })
      .catch((err)=>{
          
          alert('Ops, ocorreu um erro')
      })
}

    render(){
        const ListaDeUsuario = this.state.usuarios.map((usuario)=>{
            return <ListaUser key={usuario.id}>
                {usuario.name}
                <Deletar onClick={()=> this.deletarUsuario(usuario.id)}>X</Deletar>
                </ListaUser>

        })
        return(
            <Div>
                <Button onClick={this.props.trocarTelaCadastro}>&#8678; Ir para cadastro</Button>
                <H2>Lista de usuários</H2>
                {ListaDeUsuario}
               
            </Div>
        )
    }
}

export default ListaUsuarios