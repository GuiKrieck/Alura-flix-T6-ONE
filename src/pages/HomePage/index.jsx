import Banner from "../../components/Banner"
import EditModal from "../../components/EditModal"
import GamesContainer from "../../components/GamesContainer"
import { useGamesContext } from "../../context/Games"


const HomePage = () =>{
    const selectedVideo = useGamesContext().selectedVideo
    return(
        <>
            <Banner />
            <GamesContainer />  
            <EditModal selectedCard={selectedVideo} /> 
        </>
    )
}

export default HomePage