import React from 'react'
import { useHistory } from 'react-router'

function LoginPage (){
    const history = useHistory()
    const goToAdminHomePage = () =>{
        history.push("/admin/trips/list")
    }
    return(
        <div>
            <h1>LabeX</h1>
            <h1>Viagens recentes</h1>
              <p>LoginPage</p>
              <button>voltar</button>
              <button onClick={goToAdminHomePage}>Entrar</button>
            
        </div>
    )
}
export default LoginPage