import React, {useState} from 'react'
import {ContainerAdminTrips, TituloDetailsPage,ContainerTripDetails, TripDetails, TripCandidate, GoToBackButton} from './styled'
import axios from 'axios'
import { useParams } from 'react-router-dom'



function TripDetailsPage (){

    const[tripsAdm, setTripsAdm]= useState({})
    
    const token = localStorage.getItem('token')
    const params = useParams()
    
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/jessica-cabral-munoz/trip/${params.id}`, {
            headers: {
                auth: token
            }
        })
        .then((response)=>{
           
            setTripsAdm(response.data.trip)
        }).catch((err)=>{
            console.log(err)
        })
    
       
      const {name} = tripsAdm
      
        
    return(
        <ContainerAdminTrips>
            <TituloDetailsPage>
            LabeX
            </TituloDetailsPage>
            <ContainerTripDetails>
                <TripDetails>TRIP DETAILS</TripDetails>
                <TripCandidate>candidatos</TripCandidate>
            </ContainerTripDetails>
            <GoToBackButton>Voltar</GoToBackButton>
            
            
              
            
        </ContainerAdminTrips>
    )
}
export default TripDetailsPage