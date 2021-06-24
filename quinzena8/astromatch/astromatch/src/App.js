import {ContainerApp} from './styled'
import './style.css'
import { useState } from 'react'
import HomePage from './pages/HomePage/HomePage'
import MatchPage from './pages/MatchPage/MatchPage'
import MyMatchesPage from './pages/MyMatchesPage/MyMatchesPage'

function App() {

  const[telaAtual, setTelaAtual] = useState('home')

  const escolherTela = () =>{
    switch(telaAtual){
      case 'home':
        return <HomePage irParaMatchPage={irParaMatchPage}/>
      case 'match':
        return <MatchPage irParaMyMatches={irParaMyMatches}/>
      case 'my-matches':
        return <MyMatchesPage voltarParaMatchPage={voltarParaMatchPage}/>
      default:
        <HomePage/>
    }
  }

  const irParaMatchPage = () =>{
    setTelaAtual('match')
  }

  const irParaMyMatches = () =>{
    setTelaAtual('my-matches')
  }

  const voltarParaMatchPage = () =>{
    setTelaAtual('match')
  }

  return (
    <ContainerApp>
      
      {escolherTela()}
    </ContainerApp>
  )
}

export default App;
