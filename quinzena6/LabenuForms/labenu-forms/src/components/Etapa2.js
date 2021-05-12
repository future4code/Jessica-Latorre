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



export default  class Etapa2 extends React.Component{
    render(){
        return(
            <TelaInput>
                <h1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>
                <p>5. Qual curso?</p>
                <Input type="text" placeholder="Nome do curso"/>
                <p>6. Qual a unidade de ensino?</p>
                <Input type="text" placeholder="Nome da instituição de ensino"/>
            </TelaInput>
        )
    }
}

