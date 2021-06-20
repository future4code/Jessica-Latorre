import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'

const Div = styled.div`
width: 90vw;
`
const CardPoke = styled.div`
border: black 2px solid;
font-family:  'Press start 2p';
width: 50%;
margin: 20px auto;
padding-top: 12px;
display: flex;
flex-direction: column;
border: none;
align-items: center;
box-shadow: 3px 0 white,-3px 0 white, 0 -3px white, 0 3px white,6px 0 white, -6px 0 white, 0 -6px white, 0 6px white, 0 0 0 3px white, 9px 0 red,-9px 0 red,0 9px red,  0 -9px red, 0 -3px 0 3px red, 0 3px 0 3px red,3px 0 0 3px red, -3px 0 0 3px red;
`

function PokeCard (props) {
    const [pokemon, setPokemon] = useState({})

    useEffect (()=>{
        pegaPokemon(props.pokemon)
    })

    useEffect(()=>{
        if(props.pokemon !== pokemon){
            pegaPokemon(props.pokemon)
        }
    })
    const pegaPokemon = (pokeName) =>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
        .then((response)=>{
            setPokemon(response.data)
        })
        .catch((err)=>{
            console.log(err)
        })

    }
    return(
        <Div>
            <CardPoke>
            <p>Nome:{pokemon.name}</p>
            <p>Peso: {pokemon.weight} kg</p>
            {pokemon.types && <p>Tipo: {pokemon.types[0].type.name}</p>}
            {pokemon.sprites && (
                <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
            )}
            </CardPoke>
        </Div>
    )

}
export default PokeCard;