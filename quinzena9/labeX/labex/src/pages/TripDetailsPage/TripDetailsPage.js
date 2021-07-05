import React, { useState, useEffect } from 'react'
import { ContainerAdminTrips, TituloDetailsPage, ContainerTripDetails, TripDetails, TripCandidate, GoToBackButton } from './styled'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { BASE_URL } from '../../constants/urls'



function TripDetailsPage() {
    const params = useParams()
    const [tripsAdm, setTripsAdm] = useState({})


    useEffect(() => {



        const token = localStorage.getItem('token')


        axios.get(`${BASE_URL}/trip/${params.id}`, {
            headers: {
                auth: token
            }
        })
            .then((response) => {

                setTripsAdm(response.data.trip)
                console.log(tripsAdm)
            }).catch((err) => {
                console.log(err)
            })

    }, [])




    const { name, description, planet, durationInDays, date } = tripsAdm
    console.log(tripsAdm)




    return (
        <ContainerAdminTrips>
            <TituloDetailsPage>
                LabeX
            </TituloDetailsPage>
            <ContainerTripDetails>
                <TripDetails>
                    <p>Nome:{name}</p>
                    <p>Descrição:{description}</p>
                    <p>Planeta:{planet}</p>
                    <p>Duração:{durationInDays}</p>
                    <p>Data:{date}</p>
                </TripDetails>
                <TripCandidate>
                    <div>Candidatos Pendentes

                    </div>
                    <div>Candidatos Aprovados</div>
                </TripCandidate>
            </ContainerTripDetails>
            <GoToBackButton>Voltar</GoToBackButton>




        </ContainerAdminTrips>
    )
}
export default TripDetailsPage