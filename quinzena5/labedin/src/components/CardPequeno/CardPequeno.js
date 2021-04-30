import React from 'react'
import styled from 'styled-components'

const InfoContato = styled.div`
display: flex;
  align-items: center;
  border: 1px solid black;
  padding: 20px 10px;
  margin-bottom: 10px;
  height: 80px;
`
const InfoContatoImg = styled.img`
margin-left: 8px;
  margin-right: 8px;    
`

function CardPequeno(props){
    return (
        <InfoContato>
            <InfoContatoImg src={ props.imagem } />
            <div>
                
                <p>{props.info}</p>
            </div>
        </InfoContato>
    )
}
export default CardPequeno;