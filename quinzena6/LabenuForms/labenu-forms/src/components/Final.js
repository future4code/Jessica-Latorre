import React from 'react'
import styled from 'styled-components'

const Agradecimento = styled.div`
display: flex;
flex-direction: column;
margin-top: 28px;
justify-content: center;
align-items: center;
`

export default class Final extends React.Component {
    render(){
        return (
            <Agradecimento>
                <h1>O FORMULÁRIO ACABOU</h1>
                <h3>Muito obrigada por participar! Entraremos em contato</h3>
            </Agradecimento>
        )
    }
}