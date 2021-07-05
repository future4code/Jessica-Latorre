import React, {useState} from 'react'
import { useHistory } from 'react-router'
import {TextField} from '@material-ui/core'
import axios from 'axios'


import {ContainerAdmPage, TituloAdmPage, AdmPageHeader, SubTituloAdmPage, AdmField, ButtonAdmPage, ButtonLogin } from './styled'

function LoginPage (){
    const [email, setEmail]= useState("")
    const[password, setPassword] = useState("")

    const handleEmail = (event)=>{
        setEmail(event.target.value)
    }

    const handlePassword = (event)=>{
        setPassword(event.target.value)
    }

    const history = useHistory()
    const goToAdminHomePage = () =>{
        history.push("/admin/trips/list")
    }
    const goToBack = () =>{
        history.goBack()
    }

    const loginAdm = () =>{
        const body = {
            email: email,
            password: password
        }
        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/jessica-cabral-munoz/login', body)
        .then((response)=>{
            alert('Login realizado com sucesso')
            localStorage.setItem('token', response.data.token)
            goToAdminHomePage()
            
        })
        .catch((err)=>{
            alert('Algo deu errado, verifique suas credenciais')
            
        })
    }
   
    return(
        <ContainerAdmPage>
            <AdmPageHeader>
            <TituloAdmPage>LabeX</TituloAdmPage>
            <SubTituloAdmPage>Área de Adm</SubTituloAdmPage>
            </AdmPageHeader>

            <AdmField>
                <h2>Login</h2>
            <TextField
          id="outlined-text-input"
          label="e-mail"
          type="e-mail"
          margin="normal"
          variant="outlined"
          value={email}
          onChange={handleEmail}
        />
            <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          margin="normal"
          autoComplete="current-password"
          variant="outlined"
          onChange={handlePassword}
          value={password}
        />
         <ButtonLogin onClick={loginAdm }>Entrar</ButtonLogin>
            </AdmField>
        
            
              <ButtonAdmPage onClick={goToBack}>voltar</ButtonAdmPage>
             
            
        </ContainerAdmPage>
    )
}
export default LoginPage