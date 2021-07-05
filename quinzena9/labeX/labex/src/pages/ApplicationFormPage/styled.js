import styled from 'styled-components'
import astronauta1 from '../../assets/imgbackground.jpg'


export const ContainerForm = styled.div`
    // #a239ca, #9f45d3, #9b4fdd, #9759e5, #9362ee);
    background-color: #fff;
    display: flex;
    flex-direction: column;   
    
` 
export const HeaderApplicationFormPage = styled.header`
    background-image: url(${astronauta1});
    background-size: cover;
    object-fit:cover;
    background-position: bottom;
    background-attachment: fixed;
    height: 50vh;
    display: flex;
    flex-direction: column;
`
export const TituloFormPage = styled.h1`
    color: #fff;
    font-style: italic;
`
export const SubTituloFormPage = styled.h2`
    color: #fff;
    font-size: 48px;
    align-self: center;
`
export const GoToBackButton = styled.button`
    background-color: #0e0b16;
    border: none;
    border-radius: 8px;
    margin: 30px auto;
    color: #fff;
    width:40%;
    font-size: 36px;
    padding: 10px;
    &:hover{
        filter: brightness(2.5)
    }
`
export const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    border: none;
    padding: 32px;
    border-radius: 8px;
    width: 50%; 
    margin: 50px auto;
    align-items: center;
    background-color: #fff;
    box-shadow: 16px 17px 27px 1px rgba(26,23,26,0.20);
`



export const TextUser = styled.input`
    outline: none;
    padding: 10px;
    border-radius: 6px;
    font-size: 20px;
    margin-bottom: 32px;
`


export const UserSelect = styled.select`
    outline: none;
    padding: 10px;
    border-radius: 6px;
    font-size: 20px;
    margin-bottom: 32px;
`
export const FormButton = styled.button`
     background-color: #4717f6;
    border: none;
    width: 40%;
    border-radius: 8px;
    margin: 30px;
    color: #fff;
    font-size: 20px;
    padding: 10px;
    &:hover{
        filter: brightness(1.2)
    }
`