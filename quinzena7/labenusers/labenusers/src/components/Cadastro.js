import axios from 'axios'
import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
display: flex;
flex-direction: column;
`
const TrocarTelas = styled.button`
align-items: center;
padding: 8px;
font-size: 18px;
`
const H2 = styled.h2`
text-align: center;
`
const Cadastrar = styled.button`
margin: 15px auto;

padding: 8px;
font-size:18px;
`
class Cadastro extends React.Component{

state={
    nome: "",
    email: ""
}

handleNome = (event) =>{
    this.setState({nome: event.target.value})

}
handleEmail = (event) =>{
    this.setState({email: event.target.value})
}

criarCadastro = () =>{
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    const body = {
        name: this.state.nome,
        email: this.state.email
    }

    axios.post(url, body, {
        headers: {
            Authorization: "jessica-cabral-munoz"
        }
    })
    .then((res)=>{
        alert('Usuári@ cadastrado com sucesso!')
        this.setState({nome: "", email: ""})
    })
    .catch((err)=>{
        alert("Ops, algo deu errado :(")

    })
}

    render(){
        return(
            <Div>
                <TrocarTelas onClick={this.props.trocarTelaListaUsers}>Ir para lista de usuários &#8680;</TrocarTelas>
                <H2>Cadastro</H2>
                <input type="text" placeholder={"nome"}
                value={this.state.nome}
                onChange={this.handleNome}
                ></input>
                <input placeholder={"e-mail"}
                value={this.state.email}
                onChange={this.handleEmail}
                ></input>
                <Cadastrar onClick={this.criarCadastro}>Cadastrar</Cadastrar>
            </Div>
            
            
        )
    }
}

export default Cadastro