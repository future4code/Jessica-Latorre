import React, {useState} from 'react'
import axios from 'axios'
import { useHistory } from 'react-router'


function CreateTripPage (){
    const history = useHistory()
    const goToAdmPage = () =>{
        history.push('/admin/trips/list')
    }

    const[nameTrip, setNameTrip]= useState("")
    const[planet, setPlanet]= useState("")
    const[date, setDate]= useState("")
    const[description, setDescription]= useState("")
    const[days, setDays]= useState("")

    const handleNameTrip = (event) =>{
        setNameTrip(event.target.value)
    }
    const handlePlanet = (event) =>{
        setPlanet(event.target.value)
    }
    const handleDate = (event) =>{
        setDate(event.target.value)
    }
    const handleDescription = (event) =>{
        setDescription(event.target.value)
    }
    const handleDays = (event) =>{
        setDays(event.target.value)
    }
  
    const createTrip = () =>{
    const token = localStorage.getItem('token')

        const body = {
            name: nameTrip,
            planet: planet,
            date: date,
            description: description,
            durationInDays: days
        }
        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/jessica-cabral-munoz/trips', body, {
            headers: {
                auth: token
            }
        }).then((response)=>{
            console.log(response)
            alert('Viagem criada com sucesso!')
            goToAdmPage()

        }).catch((err) =>{
            console.log(err.response)
        })
    }
    console.log(planet)
    return(
        <div>
            <h1>LabeX</h1>
            <h1>Crie viagens</h1>
                <div>
                    <div>
                    <input type='text' onChange={handleNameTrip} value={nameTrip} placeholder='Nome da viagem' required/>
                    <select onChange={handlePlanet}>
                        <option >Escolha um planeta</option>
                        <option>Mercúrio</option>
                        <option>Vênus</option>
                        <option>Marte</option>
                        <option>Júpiter</option>
                        <option>Saturno</option>
                        <option>Urano</option>
                        <option>Netuno</option>
                        <option>Plutão</option>
                        <option>Terra</option>
                    </select>
                    <input type='date' onChange={handleDate} value={date} placeholder='dd/mm/aaaa' required/>
                    <input type='text' onChange={handleDescription} value={description} placeholder='Descrição' required/>
                    <input type='number' onChange={handleDays} value={days} placeholder='Duração em dias' required/>
                    <button onClick={createTrip}>Criar esta viagem!</button>
                    </div>
                    <div>
                        <button onClick={goToAdmPage}>Voltar</button>
                    </div>


                </div>
            
        </div>
    )
}
export default CreateTripPage