import React from 'react'
import styled from 'styled-components'

const TelaInput = styled.div`
display: flex;
flex-direction: column;
margin-top: 28px;
`
const Input = styled.input`
outline: none;
width: 50%;
height: 22px;
`
const Selecao = styled.select`
width: 50%;
outline: none;
height: 30px;
`
export default class Etapa1 extends React.Component{
    render(){
        return(
            <TelaInput>
                <h1>ETAPA 1 - DADOS GERAIS</h1>
                <p>1.Qual seu nome?</p>
                <Input type="text" placeholder="nome completo"></Input>
                <p>2. Qual sua idade?</p>
                <Input type="text" placeholder="idade"/>
                <p>3.Qual seu e-mail?</p>
                <Input type="email" placeholder="e-mail"/>
                <p>4.Qual sua escolaridade?</p>
               <Selecao>
                   <option>Ensino Médio Incompleto</option>
                   <option>Ensino Médio Completo</option>
                   <option>Ensino Superior Incompleto</option>
                   <option>Ensino Superior Completo</option>
                   

               </Selecao>
            </TelaInput>
        )
    }
}

 