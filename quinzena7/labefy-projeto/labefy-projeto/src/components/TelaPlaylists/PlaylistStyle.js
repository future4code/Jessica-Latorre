import styled from 'styled-components'

export const CardPlaylist = styled.div`
display: flex;
justify-content: space-between;

padding: 10px;
margin: 10px;
width: 50%;
color: #fff;
`

export const MinhasPlaylists = styled.div`
display: grid;
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
              transition: .3s;
    
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