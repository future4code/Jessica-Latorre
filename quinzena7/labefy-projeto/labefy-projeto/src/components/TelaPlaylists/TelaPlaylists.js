import React from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toast'


import {CardPlaylist, MinhasPlaylists, H2, DelButton, IrHome, Div} from './PlaylistStyle'



class TelaPlaylists extends React.Component{

    state={
        playlists: []
    }

    componentDidMount(){
        this.mostrarPlaylists()
    }

    mostrarPlaylists = () => {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', {
            headers: {
                Authorization: 'jessica-cabral-munoz'
            }
        }).then((response)=>{
            
            this.setState({playlists: response.data.result.list})
        }).catch((err)=>{
            console.log(err)
        })

    }

    deletarPlaylist = (id) => {
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`, {
            headers: {
                Authorization: 'jessica-cabral-munoz'
            }
        }).then((response)=>{
            this.mostrarPlaylists()
            toast.warn('Playlist excluída!')
    
        }).catch((err)=>{
            console.log(err)
            toast.error('Algo não saiu bem...tente novamente')
        })

    }

    render(){
        
        const listaPlaylists = this.state.playlists.map((item)=>{
            return <CardPlaylist key={item.id}>{item.name}
            <DelButton onClick={()=>this.deletarPlaylist(item.id)}>Excluir</DelButton>
            </CardPlaylist>

        })
        return(
            <Div>
                <IrHome onClick={this.props.irParaHome}>Ir para home</IrHome>
                <MinhasPlaylists>
                <H2>Suas playlists</H2>
                {listaPlaylists}
                </MinhasPlaylists>
                <ToastContainer/>
                
            </Div>
        )
    }
}

export default TelaPlaylists