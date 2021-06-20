import styled from 'styled-components'

export const ContainerList = styled.div` 
    background: radial-gradient(circle, #ffe6e2, #fcc8c7, #f6aab3, #ed8ca5, #e06d9d);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
`
export const ProfileMatch = styled.div`
    font-size: 22px;
    display: flex;
    align-items: center;
    color: #ffe6e2;
    width: 80%;
    height: 80px;
    margin-top: 5px;
    margin-bottom: 5px;
    transition-duration:0.6s;
    border-radius: 4px;
    padding: 2px;
    img{
        width: 70px;
        height: 70px;
        border-radius: 50%;
        margin-right: 8px;
    }
    &:hover{
        cursor: pointer;
        color: #fff;
        box-shadow: 0 15px 15px rgba(0,0,0,.4);
    }
`

export const CardMatches = styled.div`
    background-color: #2d2d2d;
    font-family: 'Roboto', sans-serif;
    padding: 8px ;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-radius: 8px;
    width: 30vw;
    height: 86vh;
    overflow-y: scroll;
    &::-webkit-scrollbar{
        width: thin;
        background: transparent;
    }
    box-shadow: 0 15px 25px rgba(0,0,0,.4);
    @media(max-width: 767px){
        width: 80%;
    }
`
export const CardHeader = styled.div`
    align-self: center;
    display: flex;
    width: 100%;
    margin-top: 8px;
    justify-content: space-around;
`

export const TituloListaMatches = styled.h2`
    color: #ed8ca5;
`
export const BackButton = styled.button`
    padding: 12px;
    font-size: 18px;
    font-style: italic;
    color: #fff;
    background-color: transparent;
    border: none;
    transition-duration:0.6s;
    &:hover{
        cursor: pointer;
        border: none;
        background-color: #e06d9d;
    }
`

