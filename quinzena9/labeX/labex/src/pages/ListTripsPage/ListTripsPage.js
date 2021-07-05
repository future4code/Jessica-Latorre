import {ContainerListTripsPage, SubTituloListTripsPage, CardsTrips, TituloPage, HeaderListTrips, GoToApplicationFormButton, GoToHomePage, ButtonWrapper} from './styled'
import React, {useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import {BASE_URL} from '../../constants/urls'


function ListTripsPage (){

    const [trips, setTrips] = useState([])

    const history = useHistory()

    const GoToHome = () =>{
        history.push("/")
    }

    const goToApplicationForm = () =>{
        history.push("/trips/application")
    }
    const showListTrip =() =>{
            axios.get(`${BASE_URL}/trips`)
            .then((response)=>{
                setTrips(response.data.trips)
                
            })
        }

    useEffect(()=>{
        showListTrip()
    },[])
    
    const listaViagens = trips.map((trip)=>{
        return <CardsTrips key={trip.id}>
            <p>Nome: {trip.name}</p>
            <p>Descrição: {trip.description}</p>
            <p>Planeta: {trip.planet}</p>
            <p>Duração: {trip.durationInDays}</p>
            <p>Data: {trip.date}</p>
        </CardsTrips> 
    })

    return(
        <ContainerListTripsPage>
            <HeaderListTrips>
                <TituloPage>LabeX</TituloPage>
                <SubTituloListTripsPage>Viagens recentes</SubTituloListTripsPage>
            </HeaderListTrips>
            <ButtonWrapper>
            <GoToHomePage onClick={GoToHome}>Home Page</GoToHomePage>
            <GoToApplicationFormButton onClick={goToApplicationForm}>Inscrever-se</GoToApplicationFormButton>
            </ButtonWrapper>
            
                {listaViagens}
        </ContainerListTripsPage>
    )
}
export default ListTripsPage