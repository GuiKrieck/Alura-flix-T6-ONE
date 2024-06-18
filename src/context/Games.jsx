import { createContext, useContext, useState } from "react";
import data from '../json/db.json'


export const GamesContext = createContext();
GamesContext.displayName = 'Games'

export default function GamesProvider({children}) {
    const [games, setGames] = useState(data.games)
    const [categories, setCategories] = useState(data.categories)
    return (
        <GamesContext.Provider value={{games, setGames, categories, setCategories}}>
            {children}
        </GamesContext.Provider>
    )
}

export function useGamesContext(){
    const{games, setGames} = useContext(GamesContext)
    const{categories, setCategories} = useContext(GamesContext)

    return{
        games,
        categories,
    }
}

