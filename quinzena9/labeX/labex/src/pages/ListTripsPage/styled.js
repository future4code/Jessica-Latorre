import styled from 'styled-components'
import astronauta from '../../assets/capaceteAstronauta.jpg'

export const ContainerListTripsPage = styled.div`
    background-image: url(${astronauta});
    background-size: cover;
    height: 100vh;
    display: flex;
    flex-direction: column;
`
export const SubTituloListTripsPage = styled.h2`
    color: #fff;
    align-self: center;
`
export const CardsTrips = styled.div`
    border: white solid 3px;
`