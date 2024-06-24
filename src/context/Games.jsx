import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";


const gamesApiUrl = 'https://my-json-server.typicode.com/GuiKrieck/alura-flix-api/games'
const categoriesApiUrl = 'https://my-json-server.typicode.com/GuiKrieck/alura-flix-api/categories'
export const GamesContext = createContext();
GamesContext.displayName = 'Games'

export default function GamesProvider({children}) {


    const [games, setGames] = useState([])
    
    useEffect(() =>{
        axios.get(gamesApiUrl)
            .then(response => {
                setGames(response.data)
            })
    },[])
    
    const [categories, setCategories] = useState([])
    
    useEffect(() =>{
        axios.get(categoriesApiUrl)
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
        axios
            .post(gamesApiUrl,{
                "title":game.title,
                "cover":game.cover,
                "link":game.link,
                "system":game.system,
                "description":game.description
            })
            .then((response)=>{
                setGames([...games, response.data])
                alert("Jogo Adicionado com Sucesso!")
            })
            .catch(() => alert("Houve um erro ao adicionar o jogo, tente novamente!"))
    }

    function updateGame(game){
        axios
            .put(`${gamesApiUrl}/${game.id}`,{
                "title":game.title,
                "cover":game.cover,
                "link":game.link,
                "system":game.system,
                "description":game.description
            })
            .then(()=>{
                setGames(games.map(thisgame => thisgame.id === game.id ? game : thisgame))
                alert("Jogo editado com sucesso!")
            })
            .catch(() => alert("Houve um erro ao editar o jogo. Tente novamente"))
    }

    function deleteGame(game){        
        axios
            .delete(`${gamesApiUrl}/${game.id}`)
            .then(() =>{
                setGames(games.filter((thisGame) => thisGame.id !== game.id))
            })
    }

    return{
        games,
        categories,
        selectedVideo,
        editCard,
        addGame,
        updateGame,
        deleteGame
    }
}

