import {ContainerHomePage,TituloHomePage, SubTtituloHomePage, ContainerButtons, HomePageButtons} from './styled.js'
import {useHistory} from 'react-router-dom'


function HomePage () {
    const history = useHistory()

    const goToListTripsPage = () =>{
        history.push("/trips/list")
    }
    const goToLogin = () =>{
        history.push("/login")
    }
    
    return(
        <ContainerHomePage>
            <TituloHomePage>LabeX</TituloHomePage>
            <SubTtituloHomePage>Encontre as melhores viagens espaciais</SubTtituloHomePage>
            <ContainerButtons>
                <HomePageButtons onClick={goToListTripsPage}>Ver viagens</HomePageButtons>
                <HomePageButtons onClick={goToLogin}>Área Adm</HomePageButtons>
            </ContainerButtons>
           
        </ContainerHomePage>
    )
}
export default HomePage