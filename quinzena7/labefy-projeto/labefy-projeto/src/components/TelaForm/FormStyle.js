import styled from 'styled-components'


 

export const MudarTela = styled.button`
width: 20%;
background: transparent;
color: #fff;
border: none;
letter-spacing: 3px;
font-size: 16px;
  
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
export const Main = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 90%;
height: 90%;
`

export const Form = styled.div`

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
export const H2 =styled.h2`
margin: 0 0 30px;
  padding: 0;
  color: #fff;
  text-align: center;

`
export const Nome = styled.input`
width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #ff7b00;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
  &:focus{
    top: -20px;
  left: 0;
  color: #ff7b00;
  
  }
`
export const Label = styled.label`

  top:0;
  left: 0;
  padding: 10px 0;
  font-size: 18px;
  color: #fff;
  pointer-events: none;
  transition: .5s;
  
  &:valid{
    
    top: -20px;
  left: 0;
  color: #ff7b00;
  font-size: 12px;
  
  }
`

export const Enviar = styled.button`
position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: #ff7b00;
  font-size: 16px;
  text-transform: uppercase;
  overflow: hidden;
  transition: .3s;
  margin-top: 40px;
  letter-spacing: 4px;
  border:none;
  background: transparent;
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
 