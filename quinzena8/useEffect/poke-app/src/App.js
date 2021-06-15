import React, {useState, useEffect}from 'react'
import axios from "axios"
import PokeCard from "./components/PokeCard"
import styled from 'styled-components'

const Div = styled.div`
display: flex;
flex-direction: column;
align-items: center;
font-family: 'Press start 2p';
height: 90vh;
`
const H3 = styled.p`
margin-top: 90px;
`
const Select = styled.select`
margin-top: 50px;
padding: 10px;
font-family: 'Press start 2p';
`
function App() {
  const [pokeList, setPokeList]=useState([])
  const [pokeName, setPokeName]=useState("")

  useEffect(()=>{
    
    axios.get("https://pokeapi.co/api/v2/pokemon/?limit=151")
    .then((response)=>{
      setPokeList(response.data.results)
    }).catch((err)=>{
      console.log(err)
    })
  })
  const changePokeName = (event)=>{
    setPokeName(event.target.value)
  }
  return (
    <Div >
      <H3>Escolha um pokémon:</H3>
      <Select onChange={changePokeName}>
        <option value={""} >Nenhum</option>
        {pokeList.map((pokemon) =>{
          return(
            <option key={pokemon.name} value={pokemon.name}>
              {pokemon.name}
            </option>
          )
        })}
      </Select>
      {pokeName && <PokeCard pokemon={pokeName}/>}
    </Div>
  );
}

export default App;