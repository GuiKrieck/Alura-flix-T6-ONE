import { createContext, useContext, useState } from "react";
import data from '../json/db.json'


export const GamesContext = createContext();
GamesContext.displayName = 'Games'

export default function GamesProvider({children}) {
    const [games, setGames] = useState(data.games)
    const [categories, setCategories] = useState(data.categories)
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

    return{
        games,
        categories,
        selectedVideo,
        editCard
    }
}

