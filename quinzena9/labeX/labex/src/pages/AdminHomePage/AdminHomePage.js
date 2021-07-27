import React, {useEffect, useState} from 'react'
import { useHistory } from 'react-router'
import axios from 'axios'
import {TripWrapper} from './styled'
import {BASE_URL} from '../../constants/urls'

function AdminHomePage (){
    const[tripsAdm, setTripsAdm]= useState([])
    const history = useHistory()
    const goToCreateTripPage = () =>{
        history.push("/admin/trips/create")
    }
    const goToTripDetails = (id) =>{
        history.push(`/tripDetails/${id}`)
    }
    const goToBack = () =>{
        history.goBack()
     }
    useEffect(()=>{
        axios.get(`${BASE_URL}/trips`)
        .then((response)=>{
            setTripsAdm(response.data.trips)
        })
    },[])
    const listTripsAdm = tripsAdm.map((trip)=>{
        return <TripWrapper onClick={()=>goToTripDetails(trip.id)} key={trip.id}><p>{trip.name}</p><button>Excluir</button>
        </TripWrapper>
    })
    return(
        <div>
            <h1>LabeX</h1>
            <h1>Painel de controle</h1>
            <button onClick={goToCreateTripPage}>Criar viagem</button>
            <button onClick={goToBack}>voltar</button>
            {listTripsAdm}

            
        </div>
    )
}
export default AdminHomePage