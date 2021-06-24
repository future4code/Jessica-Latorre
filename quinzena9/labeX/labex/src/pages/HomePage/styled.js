import styled,  { keyframes } from 'styled-components'
import BackgroundImamge from '../../assets/background.jpg'


const Typing = keyframes`
from{
    width: 0;
}
`
const Blink = keyframes`
50% {
    border-color: transparent;
}
`
export const ContainerHomePage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-image: url(${BackgroundImamge});
    background-size: cover;
    
`
export const TituloHomePage = styled.h2`
    font-size: 46px;
    color: #fff;
`
export const SubTtituloHomePage = styled.h3`
    font-size: 30px;
    color: #fff;
    width: 32ch;
    animation: ${Typing} 2s steps(22), ${Blink} .5s step-end infinite alternate;
    white-space: nowrap;
    overflow: hidden;
    border-right: 3px solid;
  
`
export const ContainerButtons = styled.div`
    display: flex;
    padding: 8px;
    width: 40%;
    margin-top: 30px;
    justify-content: space-around;
`
export const HomePageButtons = styled.button`
    padding: 16px;
    font-size: 26px;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    border-radius: 9px;
    border: none;
    color: #fff;
    background-color: #ff5100;
    transition: 0.4s;
    &:hover{
        cursor:pointer;
        background-color: #cc4100;
    }
`

