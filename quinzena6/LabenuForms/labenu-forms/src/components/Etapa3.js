import React from 'react'
import styled from 'styled-components'


const TelaInput = styled.div`
display: flex;
flex-direction: column;
margin-top: 28px;
`

const AreaTexto = styled.textarea`
width: 50%;
outline: none;
`
const SelecaoCurso = styled.select`
width: 30%;
outline: none;
`

export default  class Etapa3 extends React.Component{
    render(){
        return(
            <TelaInput>
                <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
                <p>5. Por que você não terminou um curso de graduação?</p>
                <AreaTexto type="message" rows="10" cols="30"/>
                <p>6. Você fez algum curso complementar?</p>
                <SelecaoCurso>
                    <option>Nenhum</option>
                    <option>Curso de inglês</option>
                    <option>Curso Técnico</option>
                    <option>Curso Profissionalizante</option>
                </SelecaoCurso>
            </TelaInput>
        )
    }
}

