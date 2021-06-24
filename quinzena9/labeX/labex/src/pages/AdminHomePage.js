import React from 'react'
import { useHistory } from 'react-router'

function AdminHomePage (){
    const history = useHistory()
    const goToCreateTripPage = () =>{
        history.push("/admin/trips/create")
    }
    return(
        <div>
            <h1>LabeX</h1>
            <h1>Viagens recentes</h1>
              <p>AdminHomePage</p>
              <button onClick={goToCreateTripPage}>Criar viagem</button>
              <button>voltar</button>
            
        </div>
    )
}
export default AdminHomePage