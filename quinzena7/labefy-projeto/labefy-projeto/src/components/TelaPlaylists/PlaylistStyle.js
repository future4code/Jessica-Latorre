import styled from 'styled-components'

export const CardPlaylist = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 10px;
margin: 10px;
width: 80%;
color: #ff7b00;
border-bottom: #fff solid 1px;
`

export const MinhasPlaylistsMain = styled.div`
height: 50vh;
display: flex;
flex-direction: column;
align-items: center;
margin-top: 50px;
position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  padding: 40px;
  transform: translate(-50%, -50%);
  background: rgba(0,0,0,.5);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0,0,0,.6);
  border-radius: 10px;
`
export const MinhasPlaylists = styled.div`
  overflow-y: scroll;
  height: 80%;
  width: 100%;
  &::-webkit-scrollbar{
  width: 5px;
  }
  &::-webkit-scrollbar-corner{
  background:transparent;
  }
  &::-webkit-scrollbar-track {
    background: transparent; 
    border-radius:5px;
    width: thin;
  }
  &::-webkit-scrollbar-button{
    width:5px;
  }
&::-webkit-scrollbar-thumb{
  background: #141e30;
  border-radius:6px;
  &:hover{
    background: rgba(0,0,0,.5);
  }
}
`
export const H2 = styled.h2`
margin: 0 0 30px;
  padding: 0;
  color: #fff;
  text-align: center;
`
export const DelButton = styled.button`
border:none;
letter-spacing: 3px;
background: transparent;
padding: 8px;
color: #fff;
&:hover{
    background-color: red;
  box-shadow: 0 0 5px red,
              0 0 25px red,
              0 0 50px red,
              0 0 100px red;
}
`
export const IrHome = styled.button`
width: 20%;
background: transparent;
color: #fff;
border: none;
letter-spacing: 3px;
font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  padding: 10px 20px;
  transition: .3s;
&:hover{
    background: #ff7b00;
  color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 5px #ff7b00,
              0 0 25px #ff7b00,
              0 0 50px #ff7b00,
              0 0 100px #ff7b00;
  }
`
export const Div = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 90%;
height: 90%;
`