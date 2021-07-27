import styled from 'styled-components'
import astronauta from '../../assets/capaceteAstronauta.jpg'


export const ContainerListTripsPage = styled.div`
   background-image: linear-gradient(to top, #a239ca, #9f45d3, #9b4fdd, #9759e5, #9362ee); 
    display: flex;
    flex-direction: column;
    
   
   
`
export const HeaderListTrips = styled.header`
    background-image: url(${astronauta});
    background-size: cover;
    object-fit:cover;
    background-position: center;
    background-attachment: fixed;
    height: 50vh;
    display: flex;
    flex-direction: column;
`
export const SubTituloListTripsPage = styled.h2`
    color: #fff;
    align-self: center;
    font-size: 48px;
`
export const CardsTrips = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    border: none;
    border-radius: 8px;
    background-color: #fff;
    color: #0e0b16;
    font-size: 22px;
    width: 60%;
    height: 30vh;
    padding: 20px;
    margin: 20px auto;
`
export const TituloPage = styled.h1`
    color: #fff;
    font-style: italic;
`
export const ButtonWrapper = styled.div`
    display: flex;
    margin: 22px auto;
    width: 50%;

`
export const GoToApplicationFormButton = styled.button`
    background-color: #0e0b16;
    border: none;
    border-radius: 8px;
    font-weight: bold;
    margin: 30px auto;
    color: #fff;
    font-size: 36px;
    padding: 16px;
    font-family: 'Roboto', sans-serif;
    &:hover{
        filter: brightness(2.5);
       
    }
`
export const GoToHomePage = styled.button`
    background-color:#0e0b16 ;
    border: none;
    font-weight: bold;
    border-radius: 8px;
    margin: 30px auto;
    color: #fff;
    font-family: 'Roboto', sans-serif;
    font-size: 36px;
    padding: 16px;
    &:hover{
        filter: brightness(2.5);
        
    }
`