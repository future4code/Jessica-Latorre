import React from 'react'
import { useHistory } from 'react-router'


function ApplicationFormPage (){
    const history = useHistory()
    const goToBack = () =>{
       
    }
    return(
        <div>
            <h1>LabeX</h1>
            <h1>Viagens recentes</h1>
              <p>ApplicationFormPage</p>
              <button>Voltar</button>
              <button>Enviar</button>
            
        </div>
    )
}
export default ApplicationFormPage