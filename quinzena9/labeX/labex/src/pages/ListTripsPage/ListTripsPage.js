import {ContainerListTripsPage, SubTituloListTripsPage, CardsTrips} from './styled'
import React from 'react'
import {useHistory} from 'react-router-dom'



function ListTripsPage (){
    const history = useHistory()
    const goToApplicationForm = () =>{
        history.push("/trips/application")
    }
    return(
        <ContainerListTripsPage>
            <h1>LabeX</h1>
            <SubTituloListTripsPage>Viagens recentes</SubTituloListTripsPage>
            <CardsTrips>
              <p>ListTripsPage</p>
              <button onClick={goToApplicationForm}>Inscrever-se</button>
            </CardsTrips>
        </ContainerListTripsPage>
    )
}
export default ListTripsPage