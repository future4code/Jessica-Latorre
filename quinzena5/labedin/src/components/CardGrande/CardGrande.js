import React from 'react'
import styled from 'styled-components'

const BigContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`
const BigContainerImg = styled.img`
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`
const BigContainerDiv = styled.div`
     display: flex;
    flex-direction: column;
    justify-items: flex-start;
`
const BigContainerH4 = styled.h4`
    margin-bottom: 15px;
`

function CardGrande(props) {
    return (
        <BigContainer>
            <BigContainerImg src={ props.imagem } />
            <BigContainerDiv>
                <BigContainerH4>{ props.nome }</BigContainerH4>
                <p>{ props.descricao }</p>
            </BigContainerDiv>
        </BigContainer>
    )
}

export default CardGrande;