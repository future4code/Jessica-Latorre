import React,{useEffect, useState} from 'react'
import axios from 'axios'
import {BASE_URL} from '../../constants/url'
import {ContainerList, TituloListaMatches, CardHeader,BackButton, ProfileMatch, CardMatches} from './styled'


function MyMatchesPage(props) {
	const[arrayProfilesMatches, setArrayProfilesMatches]= useState([])

	useEffect(()=>{
		axios.get(`${BASE_URL}/matches`)
		.then((response)=>{
			setArrayProfilesMatches(response.data.matches)
		})
		.catch((err)=>{
			console.log(err)
		})
	},[])
	
	const myMatchesList = arrayProfilesMatches.map((person)=>{
		return <ProfileMatch key={person.id}><img src={person.photo} alt='foto do perfil'/> {person.name}</ProfileMatch>
	})
	return(
		<ContainerList>
			<CardMatches>
				<CardHeader>
					<TituloListaMatches>Meus Matches</TituloListaMatches>
					<BackButton onClick={props.voltarParaMatchPage}>
						⬅ voltar
					</BackButton>
				</CardHeader>
				{myMatchesList}
			</CardMatches>
		</ContainerList>
	)
}
export default MyMatchesPage