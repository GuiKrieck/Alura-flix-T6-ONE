import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";



export const GamesContext = createContext();
GamesContext.displayName = 'Games'

export default function GamesProvider({children}) {

    const [games, setGames] = useState([])
    
    useEffect(() =>{
        axios.get('https://my-json-server.typicode.com/GuiKrieck/alura-flix-api/games')
            .then(response => {
                setGames(response.data)
            })
    },[])
    
    const [categories, setCategories] = useState([])
    
    useEffect(() =>{
        axios.get('https://my-json-server.typicode.com/GuiKrieck/alura-flix-api/categories')
            .then(response =>{
                setCategories(response.data)
            })
    },[])
    
    const [selectedVideo, setSelectedVideo] = useState(null)
    return (
        <GamesContext.Provider value={{games, setGames, categories, setCategories, selectedVideo, setSelectedVideo}}>
            {children}
        </GamesContext.Provider>
    )
}

export function useGamesContext(){
    const{games, setGames} = useContext(GamesContext)
    const{categories, setCategories} = useContext(GamesContext)
    const{selectedVideo, setSelectedVideo} = useContext(GamesContext)


    function editCard(game){
        setSelectedVideo(game)
    }

    function addGame(game){
        //adicionar esse jogo na api
    }

    return{
        games,
        categories,
        selectedVideo,
        editCard
    }
}

