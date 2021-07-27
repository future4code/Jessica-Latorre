import styled from 'styled-components'
import goToSpace from '../../assets/adm.jpg'

export const ContainerAdmPage = styled.div`
    background-image: linear-gradient(to top, #a239ca, #9f45d3, #9b4fdd, #9759e5, #9362ee);
       height: 100%;
    display: flex;
    flex-direction: column;
    
`
export const TituloAdmPage = styled.h1`
    
    font-style: italic;
`
export const AdmPageHeader = styled.header`
    display: flex;
    flex-direction: column;
    
    color: #fff;
    height: 50vh;
    background-image: url(${goToSpace});
    background-size: cover;
    background-position: center;
    
`
export const SubTituloAdmPage = styled.h2`
    align-self: center;
    font-size: 36px;
  
    
`
export const AdmField = styled.div`
    background-color: #fff;
    width: 40%;
    margin: 50px auto;
    border-radius: 10px;
    border: none;
    padding: 22px;
    display: flex;
    height: 60vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 16px 17px 27px 1px rgba(26,23,26,0.65);
`
export const ButtonLogin = styled.button`
    font-size: 20px;
    background-color: #4717f6;
    margin-top: 14px;
    padding: 10px;
    width: 40%;
    color: #fff;
    border: none;
    border-radius: 8px;
    &:hover{
        cursor: pointer;
        filter: brightness(1.2);
        
    }
`
export const ButtonAdmPage = styled.button`
  background-color: #0e0b16;
    border: none;
    border-radius: 8px;
    margin: 30px auto;
    color: #fff;
    font-size: 36px;
    width:40%;
    padding: 10px;
    &:hover{
        filter: brightness(2.5)
    }
`