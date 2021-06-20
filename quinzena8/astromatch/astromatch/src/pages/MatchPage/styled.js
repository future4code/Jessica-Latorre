import styled from 'styled-components'

export const MatchContainer = styled.div` 
    background: radial-gradient(circle, #ffe6e2, #fcc8c7, #f6aab3, #ed8ca5, #e06d9d);
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const ProfileCard = styled.div` 
    background-color: #2d2d2d;
    font-family: 'Roboto', sans-serif;
    padding: 8px ;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    width: 30vw;
    height: 86vh;
    box-shadow: 0 15px 25px rgba(0,0,0,.4);
    img{
        margin-top: 10px;
        width:65%;
        height: 50%;
        border-radius: 6px;
        box-shadow: 0 15px 25px rgba(0,0,0,.4) ;
    }
	@media(max-width: 767px){
		width: 80%;
	}
`
export const BotoesMatchPage = styled.div`
    display: flex;
    padding: 8px;
    justify-content: space-evenly;
    align-self: center;
`
export const ClearButton = styled.button`
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
export const GoToMatches = styled.button`
    padding: 12px;
    font-size: 18px;
    font-style: italic;
    color: #fff;
    border: none;
    background-color: transparent;
    transition-duration:0.6s;
    &:hover{
        cursor: pointer;
        border: none;
        background-color: #e06d9d;
    }
    
`
export const ContainerBotoesProfileCard = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 20px;
    margin: 12px auto;
    width: 80%;
`
export const ReactionsButtons = styled.button`
    border-radius: 50%; 
    border: none;
    background-color: transparent;
    color:#e06d9d;
    font-size:44px;
    &:hover{
        color: #f6aab3;
        cursor: pointer;
    }
`

export const ProfileInfos = styled.div`
    padding: 4px;
    width: 85%;
    color: #fff;
`