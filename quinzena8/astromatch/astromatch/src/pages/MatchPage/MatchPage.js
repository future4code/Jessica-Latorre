import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {BASE_URL} from '../../constants/url'
import {MatchContainer,ProfileCard, ReactionsButtons, ContainerBotoesProfileCard, ProfileInfos, BotoesMatchPage, ClearButton, GoToMatches} from './styled'


function MatchPage(props){

	const[profilePerson, setProfilePerson] = useState({})

	const getProfile = () =>{
		axios.get(`${BASE_URL}/person`)
		.then((response)=>{
			setProfilePerson(response.data.profile)
		})
		.catch((err)=>{
			console.log(err)
		})
	}
	
	useEffect(()=>{
		getProfile()
	},[])

	const choosePerson = (id) =>{
		const body = {
			id: profilePerson.id,
			choice: true
		}
		axios.post(`${BASE_URL}/choose-person`,body)
		.then((response)=>{
			getProfile()
		})
		.catch((err)=>{
			console.log(err)
			})
		}

		const rejectPerson = () =>{
			getProfile()
		}

		const clearAllMatchesAndSwipes = () =>{
			
			axios.put(`${BASE_URL}/clear`)
			.then((response)=>{
				getProfile()
			})
			.catch((err)=>{
				console.log(err.data)
			})
		}
	
	return(
		<MatchContainer>
			<ProfileCard>
				<BotoesMatchPage>
					<ClearButton onClick={clearAllMatchesAndSwipes}>Limpar swipes e matches</ClearButton>
					<GoToMatches onClick={props.irParaMyMatches}>Meus matches</GoToMatches>
				</BotoesMatchPage>
				<img src={profilePerson.photo} alt='foto do perfil'/>
				<ContainerBotoesProfileCard>
					<ReactionsButtons onClick={rejectPerson}>✖</ReactionsButtons>
					<ReactionsButtons onClick={()=>choosePerson(profilePerson.id)}>❤</ReactionsButtons>
				</ContainerBotoesProfileCard>
				<ProfileInfos>
					<p>{profilePerson.name}, {profilePerson.age}</p>
					<p>{profilePerson.bio}</p>
				</ProfileInfos>
			</ProfileCard>
		</MatchContainer>
	)
}
export default MatchPage