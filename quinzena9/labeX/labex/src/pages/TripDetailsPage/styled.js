import styled from 'styled-components'

export const ContainerAdminTrips= styled.div`
    height: 100vh;
    display:flex;
    flex-direction: column;
    border: red solid 3px;
    
`
export const TituloDetailsPage = styled.h1`
    border: green solid 3px;
` 
export const ContainerTripDetails = styled.main`
    display: grid;
    border: orange solid 4px;
    grid-template-columns: 50% 50%;
`
export const TripDetails = styled.section`
    border: blue solid 4px;
`
export const TripCandidate = styled.section`
    border: black solid 3px;
    display: flex;
    flex-direction: column;
`
export const GoToBackButton = styled.button`
    width: 30%;
    align-self: center;


`